var fut = false;
var interval = '';

function startStop() {
    if (fut == false) {
        interval = window.setInterval(startTimer, 1000);
        document.getElementById('start').innerText = "pause session";
        fut = true;
    } else if (fut == true) {
        clearInterval(interval);
        document.getElementById('start').innerText = "start session";
        fut = false;
    }
}

let seconds = 0;
let minutes = 0;
let hours = 0;
let displayseconds = 0;
let displayminutes = 0;
let displayhours = 0;

function startTimer() {
    seconds++;
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    if (seconds < 10) {
        displayseconds = "0" + seconds.toString();
    } else {
        displayseconds = seconds;
    }

    if (minutes < 10) {
        displayminutes = "0" + minutes.toString();
    } else {
        displayminutes = minutes;
    }

    if (hours < 10) {
        displayhours = "0" + hours.toString();
    } else {
        displayhours = hours;
    }

    document.getElementById('realtimer').innerHTML = displayhours + ":" + displayminutes + ":" + displayseconds;
}



function addTodo() {
    let textField = document.getElementById('textField');
    let todos = document.getElementById('list');

    var paragraph = document.createElement('li');

    paragraph.classList.add('todo');
    paragraph.innerText = textField.value;

    if (textField.value != '') {
        todos.appendChild(paragraph);
    }

    textField.value = "";

    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = 'line-through';
    });

    paragraph.addEventListener('dblclick', function() {
        todos.removeChild(paragraph);
    });
}

function check() {
    document.getElementById('textField').addEventListener('keyup', function(event) {
        if (event.key === "Enter") {
            addTodo();
        }
    })
}