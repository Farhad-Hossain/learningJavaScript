let div = document.createElement('div');
div.className = 'alert'
div.innerHTML = '<strong>Hi There! </strong> You have read an important message';
document.body.append(div);
document.body.insertAdjacentHTML('afterBegin', '<h1>Learning Javascript</h1>')


function getListContent() {
    let ul = [];
    for (let i = 0; i < 5; i++) {
        let li = document.createElement('li');
        li.append(i);
        ul.push(li)
    }
    return ul;
}

ul.append(...getListContent());