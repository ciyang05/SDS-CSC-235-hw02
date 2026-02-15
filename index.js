
// event handler for hovering over summary statistics
const highlighter = document.getElementsByClassName('statistics');

// adds highlight to element when hover on
function addHighlight(target) {
    target.classList.add('highlight');
}

// removes highlight from element when hover off
function removeHighlight(element) {
    element.classList.remove('highlight');
}

// loops through to add event listeners and call corresponding function
for (let i = 0; i < highlighter.length; i++) {

    highlighter[i].addEventListener('mouseover', function(e) {
        addHighlight(e.currentTarget);
    });

    highlighter[i].addEventListener('mouseout', function(e) {
        removeHighlight(e.currentTarget);
    });
}


// highlights and bolds text in intro for better readability
function highlightOn() {
    document.getElementById('synopsis').classList.add('highlight-bold');
}

// turns off hightlight and bold in intro
function highlightOff() {
    document.getElementById('synopsis').classList.remove('highlight-bold');
}
