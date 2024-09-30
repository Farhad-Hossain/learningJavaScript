function print(...args) {
    console.log.apply(console, args);
}


{
    let message = "Hello";
    print(message)
}

{
    let message = "GoodBye";
    print(message)
}

function sayHiBye(firstName, lastName) {
    function getFullName() {
        return firstName + " " + lastName;
    }
    print("Hello "+getFullName() )
}
sayHiBye("Farhad", "Hossain")

function makeCounter() {
    let count = 0;
    return function () {
        return count++;
    }
}
let counter = makeCounter()
print(counter())
print(counter())
print(counter())

