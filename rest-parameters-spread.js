function print(...args) {
    console.log.apply(console, args)
}

function sumAll(...args) {
    let result = 0;
    for (arg of args) result += arg
    return result;
}
print(sumAll(1,2,3,45,6,7,8,9,456,345,34,5,4))

print(1,2,3)



let numbers = [6,3,42,321,93,2,523]
print( Math.max(1,2,98, 888,...numbers, 90,34) )


let str = "Hello"
print( Array.from(str) )

let arr = [1,2,3]
let arrCopy = [...arr]
print( JSON.stringify(arr) === JSON.stringify(arrCopy) )
print(arrCopy)