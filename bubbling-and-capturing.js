let para = document.querySelector(`#para`);
para.onclick = function (event) {
    event.stopPropagation();
    print('Paragraph clicked');
}