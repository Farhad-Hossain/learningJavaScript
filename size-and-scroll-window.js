elem = document.documentElement

print(elem.innerHeight) // Inner height with scrollbar
print(elem.innerWidth) // WIth Scrollbar
print(elem.clientHeight) // Without scrollbar
print(elem.clientWidth) // Without Scrollbar

print(elem.scrollHeight)

print(window.pageXOffset, window.pageYOffset)

// document.body.style.overflow = "hidden"
