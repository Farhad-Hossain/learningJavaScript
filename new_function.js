function print() {
    console.log.apply(console, arguments)
}

let func = new Function('a', 'b', 'return a + b')

print( func() )