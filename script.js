var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}


// Sets the gradient background to match the color inputs when the page loads. 
window.addEventListener("load", setGradient);

// Adjusts the gradient values 
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


// Generates the random color value
function randomColorValue() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomColor() {
    color1.value = randomColorValue();
    color2.value = randomColorValue();
    setGradient();
}

// Generates random color
random.addEventListener("click", randomColor);

