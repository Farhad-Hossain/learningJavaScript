// for (let i = 0; i < document.body.childNodes.length; i++) {
//     print( document.body.childNodes[i] )
// }


for ( let node of document.body.childNodes ) {
    print(node)
}

print( typeof Array.from( document.body.childNodes ) )

print( typeof document.body.childNodes )


for (let prop in document.body.childNodes) print(prop)


print( document.body.nextElementSibling )

print( document.body.previousElementSibling )

print(document.body.parentElement)


print(document.body.children)

print(table.rows)