(()=>{'use strict'})()
function print() {
    console.log.apply(console, arguments)
}
let now = new Date(2023, 1, 20, 45);
print(now.getFullYear(), 
    now.getMonth(), 
    now.getDate(), 
    now.getHours(),
    now.getTimezoneOffset(),
    +now
)