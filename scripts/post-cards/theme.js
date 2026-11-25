// ?theme=light switches a card to the light palette from card.css.
// ?anim turns on the card's CSS animation (scripts/build-post-gif.mjs).
const params = new URLSearchParams(location.search)
if (params.get('theme') === 'light') document.body.classList.add('light')
if (params.has('anim')) document.body.classList.add('anim')
