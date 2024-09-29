function print() {
    console.log.apply(console, arguments)
}

let user = {
    name: 'Farhad Hossain',
    age: 49,
    toString() {
        return `name: ${this.name}, age: ${this.age}`
    }
}
str = JSON.stringify(user)
print( str )

console.log( JSON.parse(str) )

print(JSON.stringify(1))
print(JSON.stringify(true))
print(JSON.stringify([1,2,3]))


let meetup = {
    title: "Conference",
    room: {
        number: 123,
        participants: ["john", 'ann']
    }
}
print( JSON.stringify(meetup) )


let room = {
    number: 123,
    toJSON() {
        return this.number;
    },
    name: 'Hello'
}
print( JSON.stringify(room) )


let anotherMeetup = {
    title: "Conference",
    participants: [{name: 'Farhad'}, {name: 'mim'}],
    room: room
}
anotherMeetup.occupiedBy = meetup

print( JSON.stringify(anotherMeetup, function(key, value) {
    return (key == 'title') ? undefined : value;
}, "  ") )

let numbers = '[1,2,3,45]'
print( JSON.parse(numbers, ) )


str = `{"title":"Conference","date":"2024-11-31T12:00:00.000+06:00"}`
let additionalMeetup = JSON.parse(str, function(key, value) {
    if (key == 'date') return Date.parse(value)
    return value;
});
print(additionalMeetup)