document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        alert(`Clicked on ${button.innerText}`)
    })
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = 'red'
    })
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = ''
    })
    button.addEventListener('dblclick', () => {
        button.parentNode.removeChild(button)
    })
})