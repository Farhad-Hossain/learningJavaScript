document.body.myData = {
    name: "Farhad Hossain",
    title: "Sr. Software Engineer"
}

document.body.sayTagName = function () {
    print( this.tagName )
}
print( document.body.myData.title, document.body.getAttribute('id') )

for (let attr of document.body.attributes) {
    print( attr.value )
}