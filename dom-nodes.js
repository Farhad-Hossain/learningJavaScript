document.body.style.background = 'red';
setTimeout(()=>{
    document.body.style.background = '';
    print( document.body.offsetWidth )
}, 3000)
Live DOM Viewer