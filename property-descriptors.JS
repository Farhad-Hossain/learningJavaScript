'use strict'
function print() {
    console.log.apply(console, arguments)
}
let user = {
    "name": "Farhad",
    "age": 30
}
let descriptor = Object.getOwnPropertyDescriptor(user, 'name')
print( JSON.stringify(descriptor, null, 2) )
