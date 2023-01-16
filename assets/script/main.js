let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

// 1. Enlarging Frontend button
let frontend = document.querySelector('a:nth-of-type(1)')

frontend.addEventListener('click', largerHandler)
frontend.addEventListener('animationed', largerHandler)

function largerHandler() {
  frontend.classList.toggle('enlarge')
}

// 2. Color change Design button
let changeColor = document.querySelector('a:nth-of-type(2)')

changeColor.addEventListener('click', showHandler)

function showHandler(){
  changeColor.classList.toggle('show')
}

// 3. Flash effect '&' button
let flashing = document.querySelector('a:nth-of-type(3)')

flashing.addEventListener('click', flashHandler)
flashing.addEventListener('animationed', flashHandler)

function flashHandler() {
  flashing.classList.toggle('flash')
}

// 4. Spinning animation on hover Development button
let development = document.querySelector('a:nth-of-type(4)')

development.addEventListener('mouseover', spinningHandler)
development.addEventListener('animationend', spinningHandler)

function spinningHandler() {
  development.classList.toggle('spinning')
}

// 5. Expanding width size on click Sprint 5 button
let sprint5 = document.querySelector('a:nth-of-type(5)')

sprint5.addEventListener('click', expandHandler)
sprint5.addEventListener('animationend', expandHandler)

function expandHandler() {
  sprint5.classList.toggle('expand')
}

// 6. Disco lights on hover Fix button
let fix = document.querySelector('a:nth-of-type(6)')

fix.addEventListener('mouseover', discoHandler)
fix.addEventListener('animationend', discoHandler)

function discoHandler() {
  fix.classList.toggle('disco-lights')
}

// 7. Twist effect on doubleclick "The" button
let the = document.querySelector('a:nth-of-type(7)')

the.addEventListener('dblclick', twistHandler);
the.addEventListener('animationend', twistHandler);

function twistHandler(){
  the.classList.toggle('twist')
}

//8. Shake animation mouseout Flow button
let flow = document.querySelector('a:nth-of-type(8)')

flow.addEventListener('mouseout', shakeHandler);
flow.addEventListener('animationend', shakeHandler);

function shakeHandler(){
  flow.classList.toggle('shaking')
}
