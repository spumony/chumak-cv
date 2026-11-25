// Replace the image of a post that is already scheduled on LinkedIn.
//
// Usage (from a folder Claude in Chrome may upload from, e.g. the scratchpad):
//   node <chumak-cv>/scripts/linkedin/swap-image.mjs <slug> [image]
//
// image defaults to public/posts/<slug>/linkedin.gif, else linkedin.png.
// The post is found in the Scheduled list by its first line, and the alt text
// and last line come from the draft in career-ops-main/output/linkedin/drafts.
//
// Writes into the current folder:
//   <slug>.<ext>          the image to upload
//   <slug>.open.js        run on linkedin.com/feed/?shareActive=true:
//                         Scheduled list → "…" → Edit post → remove image → Media.
//                         Returns "READY <Posting at …>" or a reason.
//   <slug>.finish.js      after file_upload to the hidden file input: alt text,
//                         Next, checks text, image and unchanged time, presses
//                         Schedule. Returns "SAVED …" or "FAIL …".
// Between the two: find "hidden file input" → file_upload <slug>.<ext> by ref.
import fs from 'node:fs'
import path from 'node:path'

const [slug, imageArg] = process.argv.slice(2)
if (!slug) throw new Error('usage: swap-image.mjs <slug> [image]')
const root = path.resolve(import.meta.dirname, '../..')
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
  ['linkedin.gif', 'linkedin.png']
    .map((f) => path.join(dir, f))
    .find(fs.existsSync)
if (!image || !fs.existsSync(image)) throw new Error(`No image for ${slug}`)
const upload = path.resolve(`${slug}${path.extname(image)}`)
fs.copyFileSync(image, upload)

const J = JSON.stringify
const helpers = `const w=ms=>new Promise(r=>setTimeout(r,ms));const vis=e=>e.offsetParent;const L=e=>(e.getAttribute('aria-label')||e.innerText||'').trim();const until=async(f,ms=6000)=>{for(let t=0;t<ms;t+=250){const v=f();if(v)return v;await w(250)}return null};const label=()=>(document.body.innerText.match(/Posting at[^\\n]*/)||['none'])[0].trim();`

const open = `${helpers}
const FIRST=${J(lines[0])};const KEY=FIRST.slice(0,40);
const sched=await until(()=>[...document.querySelectorAll('a[aria-labelledby]')].find(a=>vis(a)&&/^Scheduled \\(\\d+\\)$/.test(document.getElementById(a.getAttribute('aria-labelledby'))?.textContent.trim()||'')));
if(!sched){'NO_SCHEDULED_LINK'}else{
sched.click();
const tab=await until(()=>[...document.querySelectorAll('a')].find(a=>vis(a)&&/^Scheduled \\(\\d+\\)$/.test(a.innerText.trim())));
tab&&tab.click();
const findRow=()=>{const d=[...document.querySelectorAll('svg[aria-label="More options"]')].map(s=>s.closest('[role=button]')).filter(Boolean);for(const b of d){let r=b;while(r.parentElement&&r.parentElement.querySelectorAll('svg[aria-label="More options"]').length===1)r=r.parentElement;if(/Posting (Mon|Tue|Wed|Thu|Fri|Sat|Sun), /.test(r.innerText||'')&&r.innerText.replace(/\\s+/g," ").includes(KEY))return {r,b}}return null};
let hit=await until(findRow,4000);
for(let k=0;k<20&&!hit;k++){const sc=[...document.querySelectorAll('*')].find(e=>e.scrollHeight>e.clientHeight+40&&/auto|scroll/.test(getComputedStyle(e).overflowY)&&e.innerText.includes('Posting '));if(sc)sc.scrollTop+=600;await w(500);hit=findRow()}
if(!hit){'NO_ROW for first line'}else{
const when=(hit.r.innerText.match(/Posting [^\\n]*/)||[''])[0];
hit.b.scrollIntoView({block:'center'});
let item=null;for(let k=0;k<3&&!item;k++){hit.b.click();item=await until(()=>[...document.querySelectorAll('[role=menuitem]')].find(e=>vis(e)&&e.textContent.trim()==='Edit post'),1500)}
if(!item){'NO_EDIT_ITEM '+when}else{
item.click();
const ed=await until(()=>document.querySelector('.ql-editor, [contenteditable=true][role=textbox]'));
if(!ed||!ed.innerText.trim().startsWith(FIRST)){'WRONG_POST '+(ed?ed.innerText.slice(0,50):'no editor')}else{
if(!window.__p){const o=HTMLInputElement.prototype.click;HTMLInputElement.prototype.click=function(){if(this.type==='file'){this.setAttribute('data-claude-file','1');if(!this.isConnected){this.style.display='none';document.body.appendChild(this)}return}return o.call(this)};window.__p=1}
window.__swapLabel=await until(()=>label()!=='none'&&label());
const imgCloses=()=>[...document.querySelectorAll('button')].filter(b=>L(b)==='Close'&&[...(b.parentElement?.parentElement?.querySelectorAll('button')||[])].some(x=>L(x)==='Edit'));
const closes=(await until(()=>imgCloses().length&&imgCloses(),4000))||[];
if(closes.length>1){'AMBIGUOUS_IMAGE '+closes.length}else{
if(closes.length===1){closes[0].click();await w(1500)}
const m=await until(()=>[...document.querySelectorAll('button')].find(b=>vis(b)&&L(b)==='Media'));
if(!m){'NO_MEDIA_BUTTON'}else{m.click();await w(1200);
(document.querySelector('input[type=file][data-claude-file]')?'READY ':'NO_FILE_INPUT ')+window.__swapLabel+(closes.length?'':' (post had no image)')}}}}}}`

const finish = `${helpers}
const ALT=${J(alt)};const LAST=${J(lines.at(-1))};
const btn=t=>[...document.querySelectorAll('button')].find(b=>vis(b)&&b.innerText.trim()===t);
const a=await until(()=>[...document.querySelectorAll('button')].find(b=>vis(b)&&L(b)==='Alternative text'),10000);
if(!a){'NO_ALT_BUTTON (upload not finished?)'}else{
a.click();const ta=await until(()=>[...document.querySelectorAll('textarea')].find(vis));
Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,'value').set.call(ta,ALT);ta.dispatchEvent(new Event('input',{bubbles:true}));await w(300);
btn('Add').click();await w(800);btn('Next').click();
const im=await until(()=>[...document.querySelectorAll('img')].find(i=>(i.alt||'')===ALT));
const ed=document.querySelector('.ql-editor, [contenteditable=true][role=textbox]');const s=btn('Schedule');
if(im&&ed&&ed.innerText.includes(LAST)&&window.__swapLabel&&label()===window.__swapLabel&&s){s.click();const gone=await until(()=>!document.querySelector('.ql-editor, [contenteditable=true][role=textbox]'),8000);(gone?'SAVED ':'STILL_OPEN ')+window.__swapLabel}
else 'FAIL img='+!!im+' last='+!!(ed&&ed.innerText.includes(LAST))+' label='+label()+' was='+window.__swapLabel+' btn='+!!s}`

fs.writeFileSync(`${slug}.open.js`, open)
fs.writeFileSync(`${slug}.finish.js`, finish)
console.log(
  `${slug}: ${path.basename(upload)} (${(fs.statSync(upload).size / 1024).toFixed(0)} KB)`,
)
console.log(`  first: ${lines[0]}`)
console.log(`  last:  ${lines.at(-1)}`)
