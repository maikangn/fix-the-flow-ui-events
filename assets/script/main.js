let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

// Color change Design button
let changeColor = document.querySelector('a:nth-of-type(2)')

changeColor.addEventListener('click', show)

function show(){
  changeColor.classList.toggle('show')
}