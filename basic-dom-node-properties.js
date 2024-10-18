print(document.body)

print( document.body.nodeName )
print( document.body.tagName )

// document.body.innerHTML += "The new Body"

let elem = document.getElementById('elem');
setInterval(function() {
    elem.hidden = !elem.hidden
}, 400)