/*A few mouse events
var button = document.getElementsByTagName("button")[0];
button.addEventListener("click",function(){alert("YOU CLICKED ME!!!");})
button.addEventListener("mouseenter", function(){alert("Are you gonna click or what?!!");})
button.addEventListener("mouseleave", function(){alert("I'm so sad now!");})*/
/*var heading = document.createElement("h1");
var heading_text = document.createTextNode("TITLE 1");
heading.appendChild(heading_text);
document.body.appendChild(heading);*/
var button = document.getElementById("add");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var h = document.getElementById("title");
h.style.color = 'crimson';
function add() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function byclick() {
    if (input.value.length > 0) {
        add();
    }
}

function byenter(event) {
    if (input.value.length > 0 && event.keyCode === 13) {
        add();
    }
}
button.addEventListener("click", byclick);
input.addEventListener("keypress", byenter);
