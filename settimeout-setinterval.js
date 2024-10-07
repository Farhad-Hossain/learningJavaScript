function print() {
    console.log.apply(console, arguments)
}

function sayHi(phrase, from) {
    print(`${phrase} from ${from}`)
}
setTimeout(sayHi, 1000, "Hello", "Farhad")

setTimeout(()=> {print('ok')}, 2000)
function func() {
    return function () {
        print('func')
    }
}
setTimeout(func(), 1000)

function sayHello() {
    print('Hello from sayHello');
}

let timerId = setTimeout(()=> sayHello('Hello', 1000))
clearTimeout(timerId)

// function showTimestamp() {
//     let now = new Date();
//     print( `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}` )
// }
// setInterval(showTimestamp, 1000)

function ok() {
    print('ok')
}
let delay = 1000
// setTimeout(function sayOk () {
//     print( new Date().getSeconds() )
//     delay = Math.floor(Math.random() * 5 ) + 1;
//     delay = delay * 1000;
//     print(`Next Delay : ${delay}`)
//     setTimeout(sayOk, delay)
// }, delay)

