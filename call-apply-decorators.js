'use strict'
function print() {
    console.log.apply(console, arguments);
}
function slow(x) {
    print(`Called with ${x}`)
    return x;
}
function cachingDecorator(func) {
    let cache = new Map();

    return function (x) {
        if ( cache.has(x) ) {
            return cache.get(x);
        }

        let result = func(x);

        cache.set(x, result)

        return result
    }
}

let slowFunc = cachingDecorator(slow)
slowFunc(1)
slowFunc(5)


function sayHi() {
    print(this.name)
}
sayHi.call({"name": 'Farhad'});
