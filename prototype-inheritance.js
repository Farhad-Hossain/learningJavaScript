function print() {
    console.log.apply(console, arguments)
}
let animal = {
    eats: true,
    walk() {
        print('rabbit is walking')
    }
}
let rabbit = {
    jumps: true,
    __proto__: animal,
}
rabbit.walk = function () {
    print(this.jumps)
}
print(rabbit.eats, rabbit.jumps, rabbit.walk())