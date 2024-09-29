function print() {
    console.log.apply(console, arguments)
}

let jan_1_1970 = new Date(0) // Timestamp
print(jan_1_1970)

let today = new Date() 
print(today)

let anotherToday = new Date('2024-09-29') // dateString
print(anotherToday)

let aDate = new Date(2024, 8, 1) // Month starts from 0
print(aDate)


let fullYear = today.getFullYear();
print(fullYear)

let month = today.getMonth(); // 0 to 11
print(month)

let date = today.getDate(); // 1 to 31
print(date)

let hours = today.getHours() // 0 to 23
print(hours, 'hours')

let minutes = today.getMinutes()
print(minutes)

let seconds = today.getSeconds()
print(seconds)

let milliseconds = today.getMilliseconds();
print(milliseconds)

let day = today.getDay();
print(day)

print( new Date().getTimezoneOffset() ) // Differance in mibutes between UTC+0 and my Timezone


today.setFullYear(1998, 0, 9) // year is mandatory, month and day are optional
print(today)

today.setMonth(2, 1)
print(today)

today.setDate(8);
print(today)

today.setHours(23)
print(today)

today.setMinutes(0)
print(today)

today.setSeconds(23)
print(today)

today.setMilliseconds(300)
print(today)

// increase  2 days
today.setDate(today.getDate()+2)
print(today.getDate())

print(+today) // The number of milliseconds

let d = Date.now()
print(d)

d = Date.parse("2024-09-29T22:50:33.600+06:00"); // Will return timestamp
print( new Date(d) )

print('End, Have a nice day')

