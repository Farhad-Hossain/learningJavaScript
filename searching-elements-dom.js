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
