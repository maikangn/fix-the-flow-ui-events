let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

// 1. Enlarging Frontend button
let bigger = document.querySelector('a:nth-of-type(1)')

bigger.addEventListener('click', larger)
bigger.addEventListener('animationed', larger)

function larger() {
bigger.classList.toggle('enlarge')
}

// 2. Color change Design button
let changeColor = document.querySelector('a:nth-of-type(2)')

changeColor.addEventListener('click', show)

function show(){
  changeColor.classList.toggle('show')
}

// 3. Flash effect '&' button
let flashing = document.querySelector('a:nth-of-type(3)')

flashing.addEventListener('click', flash)
flashing.addEventListener('animationed', flash)

function flash() {
  flashing.classList.toggle('flash')
}