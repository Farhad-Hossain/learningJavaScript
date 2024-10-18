let last_elements = document.querySelectorAll('ul > li:last-child')
for (let elem of last_elements) {
    elem.style.background = 'red'
}

let first_elements = document.querySelectorAll('ul > li:first-child')
for (let elem of first_elements) {
    elem.style.background = 'green'
}


let hover_elements = document.querySelectorAll(":hover")
for (let elem of hover_elements) {
    elem.style.background = 'yellow'
}


console.error('You made a mistake')
console.warn('This is a warning')
console.assert(1 + 4 == 11, 'Expresion returns false')
console.table([1,2,3,4,5,6,7,8,9,0])


for (let i = 0; i < 5; i++) {
    console.count()
}

console.clear('Group 1')