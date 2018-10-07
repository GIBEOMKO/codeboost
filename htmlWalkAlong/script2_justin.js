var h1 = document.getElementsByTagName("h1");
var button = document.getElementById("btn1");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
    return input.value.length
}

function createsElm() {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li)
    input.value = '';
}


function addListAfterClick() {
    if (inputLength() > 0) {
        createsElm();
    }
}

function addListAfterKeypress(e) {
    if (inputLength() > 0 && e.keyCode === 13) {
        createsElm();
    }
}

button.addEventListener('click', addListAfterClick)

input.addEventListener('keypress', addListAfterKeypress)