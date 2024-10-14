function print () {
    console.log.apply(console, arguments)
}
let promise = new Promise((resolve, reject)=> {
    // setTimeout( ()=> resolve('Done'), 1000 );
    setTimeout( ()=> reject('Error'), 1000 );
})
promise.finally(()=>{print('Finally')}).then(result=>{
    print(result)
}, error=>{
    print(error)
})