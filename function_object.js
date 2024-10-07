'use strict'
function print(...args) {
    console.log.apply(console, args);
}

// function sayHi() {

// }

let sayHi = function () {

}
print( sayHi.name )


let user = {
    sayHi() {

    }
}
print( user.sayHi.name )


let arr = [function(){}] // The function Have not name
print( arr[0].name )

function f1(number){}
function f2(n1, n2){}
print( f1.length, f2.length )


