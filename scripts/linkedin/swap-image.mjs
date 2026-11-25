// Replace the image of posts that are already scheduled on LinkedIn.
//
// Usage (from a folder Claude in Chrome may upload from, e.g. the scratchpad):
//   node <chumak-cv>/scripts/linkedin/swap-image.mjs <slug> [image]
//   node <chumak-cv>/scripts/linkedin/swap-image.mjs <slug> <slug> ...
//
// The image defaults to public/posts/<slug>/linkedin.gif, else linkedin.png,
// and is copied into the current folder as <slug>.<ext>. A post is found in
// the Scheduled list by its first line; the alt text and last line come from
// the draft in career-ops-main/output/linkedin/drafts/<slug>.md.
//
// One slug writes two scripts, run on linkedin.com/feed/?shareActive=true:
//   <slug>.open.js    Scheduled → "…" → Edit post → remove image → Media.
//                     Returns "READY <slug> <Posting at …>" or a reason.
//   then: find "hidden file input" → file_upload <slug>.<ext> by ref
//   <slug>.finish.js  alt text, Next, checks text, image and unchanged time,
//                     presses Schedule. Returns "SAVED <slug> …" or "FAIL …".
//
// Several slugs write swap.install.json and swap.step.js. The JSON holds the
// code and the queue for sessionStorage (it survives navigation on
// linkedin.com); swap.step.js is one line that runs the next phase. The JSON
// goes in through a file input, so its 6 KB never pass through a tool call:
//   batch 1: navigate feed/?shareActive=true → wait 4 s → loader (printed
//            below, adds input "swap loader") → find "swap loader"
//   batch 2: file_upload swap.install.json by ref → load (printed below)
//            → step (READY post 1) → find "hidden file input"
// Then per post, in one browser_batch:
//   file_upload <slug>.<ext> → step (SAVED, reloads the composer) → wait 5 s
//   → step (READY <next slug>) → find "hidden file input"
// A step that does not return READY/SAVED leaves the queue where it was, so
// the same step can be run again after a look at the page.
import fs from 'node:fs'
import path from 'node:path'

const args = process.argv.slice(2)
if (!args.length) throw new Error('usage: swap-image.mjs <slug> [image] | <slug> <slug> ...')
const root = path.resolve(import.meta.dirname, '../..')
const imageArg = args.length === 2 && /\.(gif|png|jpe?g)$/i.test(args[1]) ? args.pop() : null

const item = (slug) => {
  const draft = fs.readFileSync(
    path.join(root, `../career-ops-main/output/linkedin/drafts/${slug}.md`),
    'utf8',
  )
  const lines = draft
    .split('## Post\n')[1]
    .split('\n## ')[0]
    .trim()
    .split('\n')
    .filter(Boolean)
  const alt = (draft.match(/^Alt \(EN, for LinkedIn\): (.+)$/m) ||
    draft.match(/^- imageAlt EN: (.+)$/m))?.[1].trim()
  if (!alt) throw new Error(`No alt text in the ${slug} draft`)
  const dir = path.join(root, `public/posts/${slug}`)
  const image =
    imageArg ??
    ['linkedin.gif', 'linkedin.png'].map((f) => path.join(dir, f)).find(fs.existsSync)
  if (!image || !fs.existsSync(image)) throw new Error(`No image for ${slug}`)
  const upload = path.resolve(`${slug}${path.extname(image)}`)
  fs.copyFileSync(image, upload)
  console.log(`${slug}: ${upload} (${(fs.statSync(upload).size / 1024).toFixed(0)} KB)`)
  console.log(`  first: ${lines[0]}\n  last:  ${lines.at(-1)}`)
  return { slug, first: lines[0], last: lines.at(-1), alt }
}

// Page code. Function bodies return strings; nothing here touches the disk.
const lib = String.raw`
const w=ms=>new Promise(r=>setTimeout(r,ms));const vis=e=>e.offsetParent;
const L=e=>(e.getAttribute('aria-label')||e.innerText||'').trim();
const until=async(f,ms=6000)=>{for(let t=0;t<ms;t+=250){const v=f();if(v)return v;await w(250)}return null};
const label=()=>(document.body.innerText.match(/Posting at[^\n]*/)||['none'])[0].trim();
const editor=()=>document.querySelector('.ql-editor, [contenteditable=true][role=textbox]');
const btn=t=>[...document.querySelectorAll('button')].find(b=>vis(b)&&b.innerText.trim()===t);
async function open(it){
  const KEY=it.first.slice(0,40);
  const sched=await until(()=>[...document.querySelectorAll('a[aria-labelledby]')].find(a=>vis(a)&&/^Scheduled \(\d+\)$/.test(document.getElementById(a.getAttribute('aria-labelledby'))?.textContent.trim()||'')));
  if(!sched)return 'NO_SCHEDULED_LINK (is the composer open?)';
  sched.click();
  const tab=await until(()=>[...document.querySelectorAll('a')].find(a=>vis(a)&&/^Scheduled \(\d+\)$/.test(a.innerText.trim())));
  tab&&tab.click();
  const findRow=()=>{for(const s of document.querySelectorAll('svg[aria-label="More options"]')){const b=s.closest('[role=button]');if(!b)continue;let r=b;while(r.parentElement&&r.parentElement.querySelectorAll('svg[aria-label="More options"]').length===1)r=r.parentElement;if(/Posting (Mon|Tue|Wed|Thu|Fri|Sat|Sun), /.test(r.innerText||'')&&r.innerText.replace(/\s+/g,' ').includes(KEY))return{r,b}}return null};
  let hit=await until(findRow,4000);
  for(let k=0;k<20&&!hit;k++){const sc=[...document.querySelectorAll('*')].find(e=>e.scrollHeight>e.clientHeight+40&&/auto|scroll/.test(getComputedStyle(e).overflowY)&&e.innerText.includes('Posting '));if(sc)sc.scrollTop+=600;await w(500);hit=findRow()}
  if(!hit)return 'NO_ROW '+it.slug;
  const when=(hit.r.innerText.match(/Posting [^\n]*/)||[''])[0];
  hit.b.scrollIntoView({block:'center'});
  let item=null;for(let k=0;k<3&&!item;k++){hit.b.click();item=await until(()=>[...document.querySelectorAll('[role=menuitem]')].find(e=>vis(e)&&e.textContent.trim()==='Edit post'),1500)}
  if(!item)return 'NO_EDIT_ITEM '+when;
  item.click();
  const ed=await until(editor);
  if(!ed||!ed.innerText.trim().startsWith(it.first))return 'WRONG_POST '+(ed?ed.innerText.slice(0,50):'no editor');
  if(!window.__p){const o=HTMLInputElement.prototype.click;HTMLInputElement.prototype.click=function(){if(this.type==='file'){this.setAttribute('data-claude-file','1');if(!this.isConnected){this.style.display='none';document.body.appendChild(this)}return}return o.call(this)};window.__p=1}
  window.__swapLabel=await until(()=>label()!=='none'&&label());
  const imgCloses=()=>[...document.querySelectorAll('button')].filter(b=>L(b)==='Close'&&[...(b.parentElement?.parentElement?.querySelectorAll('button')||[])].some(x=>L(x)==='Edit'));
  const closes=(await until(()=>imgCloses().length&&imgCloses(),4000))||[];
  if(closes.length>1)return 'AMBIGUOUS_IMAGE '+closes.length;
  if(closes.length===1){closes[0].click();await w(1500)}
  const m=await until(()=>[...document.querySelectorAll('button')].find(b=>vis(b)&&L(b)==='Media'));
  if(!m)return 'NO_MEDIA_BUTTON';
  m.click();await w(1200);
  return (document.querySelector('input[type=file][data-claude-file]')?'READY ':'NO_FILE_INPUT ')+it.slug+' '+window.__swapLabel+(closes.length?'':' (post had no image)');
}
async function finish(it){
  const a=await until(()=>[...document.querySelectorAll('button')].find(b=>vis(b)&&L(b)==='Alternative text'),10000);
  if(!a)return 'NO_ALT_BUTTON (upload not finished?)';
  a.click();const ta=await until(()=>[...document.querySelectorAll('textarea')].find(vis));
  Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,'value').set.call(ta,it.alt);ta.dispatchEvent(new Event('input',{bubbles:true}));await w(300);
  btn('Add').click();await w(800);btn('Next').click();
  const im=await until(()=>[...document.querySelectorAll('img')].find(i=>(i.alt||'')===it.alt));
  const ed=editor();const s=btn('Schedule');
  if(!(im&&ed&&ed.innerText.includes(it.last)&&window.__swapLabel&&label()===window.__swapLabel&&s))
    return 'FAIL img='+!!im+' last='+!!(ed&&ed.innerText.includes(it.last))+' label='+label()+' was='+window.__swapLabel+' btn='+!!s;
  s.click();
  const gone=await until(()=>!editor(),8000);
  return (gone?'SAVED ':'STILL_OPEN ')+it.slug+' '+window.__swapLabel;
}`

// Queue runner: one phase per call. Lives in sessionStorage.__swapLib.
const step = String.raw`
const q=JSON.parse(sessionStorage.__swapQ||'null');
if(!q)return 'NO_QUEUE (run swap.install.js)';
if(q.i>=q.items.length)return 'DONE '+q.items.length+' posts';
const it=q.items[q.i];const save=()=>sessionStorage.__swapQ=JSON.stringify(q);
if(q.phase==='open'){const r=await open(it);if(r.startsWith('READY')){q.phase='finish';save()}return '['+(q.i+1)+'/'+q.items.length+'] '+r}
const r=await finish(it);
if(!r.startsWith('SAVED'))return r;
q.i++;q.phase='open';save();
setTimeout(()=>location.assign('/feed/?shareActive=true'),300);
return r+(q.i<q.items.length?' → next '+q.items[q.i].slug:' → DONE');`

const J = JSON.stringify
const run = 'await new (Object.getPrototypeOf(async()=>{}).constructor)(sessionStorage.__swapLib)()'

if (args.length === 1) {
  const it = item(args[0])
  fs.writeFileSync(`${it.slug}.open.js`, `${lib}\nawait open(${J(it)})`)
  fs.writeFileSync(`${it.slug}.finish.js`, `${lib}\nawait finish(${J(it)})`)
  console.log(`wrote ${it.slug}.open.js, ${it.slug}.finish.js`)
} else {
  const items = args.map(item)
  fs.writeFileSync(
    'swap.install.json',
    J({ __swapLib: lib + step, __swapQ: J({ items, i: 0, phase: 'open' }) }),
  )
  fs.writeFileSync('swap.step.js', run)
  // No top-level const: the tool may keep one scope per page. No eval after
  // an await either: LinkedIn's CSP allows it only in the tool's own sync part,
  // so the load call only stores data and the step is a separate call.
  const loader = `document.body.prepend(Object.assign(document.createElement('input'),{type:'file',id:'swap-loader',ariaLabel:'swap loader'}));'ok'`
  const load = `Object.assign(sessionStorage,JSON.parse(await document.getElementById('swap-loader').files[0].text()));document.getElementById('swap-loader').remove();'loaded '+JSON.parse(sessionStorage.__swapQ).items.length`
  console.log(
    `wrote swap.install.json (${items.length} posts), swap.step.js\n` +
      `upload: ${path.resolve('swap.install.json')}\nloader: ${loader}\nload:   ${load}\nstep:   ${run}`,
  )
}
