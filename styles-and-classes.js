let elem = document.body
elem.style.cssText = `color: red; background-color: green;`


print(getComputedStyle(elem).color)