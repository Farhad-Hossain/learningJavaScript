function print() {
    console.log.apply(console, arguments)
}
let animal = {
    eats: true,
}
// function Rabbit (name) {
//     this.name = name
// }
// Rabbit.prototype = animal
// rabbit = new Rabbit("White Rabbit")
// print(rabbit.eats)

function Rabbit () {

}
print( Rabbit.prototype.constructor )
let rabbit = new Rabbit()