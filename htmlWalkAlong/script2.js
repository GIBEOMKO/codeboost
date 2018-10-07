// Main Javascript Work ~

var h1 = document.querySelector('h1');
var btn = document.querySelector('button');
var ul = document.querySelector('ul');
var li = document.querySelector('li');
var input = document.getElementById('userInput');

// Weve Just created variables attached to the DOM

// event listeners

function inputLength() {
    return input.value.length;
}

function createsElm() {
    var created = document.createElement('li');
    var textCreated = document.createTextNode(input.value);
    created.appendChild(textCreated);
    document.getElementById("shopping_list").appendChild(created);
    input.value = '';
}
btn.addEventListener('click', function() {
    if ( inputLength() > 0 ) {
        createsElm();
        console.log('CLICKED!');
    }
});

input.addEventListener('keypress', function(e) {
    if ( inputLength() > 0 && e.keyCode === 13 ) {
        createsElm();
        console.log('ENTERED!');
    }
});