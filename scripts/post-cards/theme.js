// ?theme=light switches a card to the light palette from card.css.
if (new URLSearchParams(location.search).get('theme') === 'light') {
  document.body.classList.add('light')
}
