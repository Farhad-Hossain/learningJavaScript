function print(...args) {
    console.log.apply(console, args);
}

+function(){
    print('Hello, World')
}()