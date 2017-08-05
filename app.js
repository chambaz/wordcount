const count = require('word-count')

const ui = {
  canvas: document.querySelector('[data-canvas]'),
  counts: {
    words: document.querySelector('[data-count="words"]'),
    chars: document.querySelector('[data-count="chars"]')
  }
}

ui.canvas.addEventListener('keyup', () => {
  ui.counts.words.innerHTML = count(ui.canvas.value)
  ui.counts.chars.innerHTML = ui.canvas.value.length
})
