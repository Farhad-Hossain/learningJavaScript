function print() {
    console.log.apply(console, arguments)
}
let user = {
    name: "Farhad",
    surname: "Hossain",
}
Object.defineProperty(user, "full_name", {
    get() {
        return `${this.name} ${this.surname}`
    },
    set(value) {
        [this.name, this.surname] = value.split(" ")
    }
})
print( user.full_name )
user.full_name = "John Doe"
print( user.full_name )
print( user.name, user.surname )

for (let key in user) {
    print(key, user[key])
}
