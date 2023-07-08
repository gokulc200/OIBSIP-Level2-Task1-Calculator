let result = document.getElementById("result");
let backgroundContainer = document.getElementById("calculator");
let themeChangeElement1 = document.getElementById("changeColor1");
let themeChangeElement2 = document.getElementById("changeColor2");
let themeChangeElement3 = document.getElementById("changeColor3");
let themeChangeElement4 = document.getElementById("changeColor4");
let themeChangeElement5 = document.getElementById("changeColor5");
let themeChangeElement6 = document.getElementById("changeColor6");
let themeChangeElement7 = document.getElementById("changeColor7");
let themeChangeElement8 = document.getElementById("changeColor8");
let themeChangeElement9 = document.getElementById("changeColor9");
let themeChangeElement10 = document.getElementById("changeColor10");
let themeChangeElement11 = document.getElementById("changeColor11");
let themeChangeElement12 = document.getElementById("changeColor12");
let themeChangeElement13 = document.getElementById("changeColor13");
let themeChangeElement14 = document.getElementById("changeColor14");
let themeChangeElement15 = document.getElementById("changeColor15");
let themeChangeElement16 = document.getElementById("changeColor16");
let themeChangeElement17 = document.getElementById("changeColor17");
let themeChangeElement18 = document.getElementById("changeColor18");
let themeChangeElement19 = document.getElementById("changeColor19");
let themeChangeElement20 = document.getElementById("changeColor20");
let themeChangeElement21 = document.getElementById("changeColor21");

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    themeChangeElement1.classList.toggle("white");
    themeChangeElement2.classList.toggle("white");
    themeChangeElement3.classList.toggle("white");
    themeChangeElement4.classList.toggle("white");
    themeChangeElement5.classList.toggle("white");
    themeChangeElement6.classList.toggle("white");
    themeChangeElement7.classList.toggle("white");
    themeChangeElement8.classList.toggle("white");
    themeChangeElement9.classList.toggle("white");
    themeChangeElement10.classList.toggle("white");
    themeChangeElement11.classList.toggle("white");
    themeChangeElement12.classList.toggle("white");
    themeChangeElement13.classList.toggle("white");
    themeChangeElement14.classList.toggle("white");
    themeChangeElement15.classList.toggle("white");
    themeChangeElement16.classList.toggle("white");
    themeChangeElement17.classList.toggle("white");
    themeChangeElement18.classList.toggle("white");
    themeChangeElement19.classList.toggle("white");
    themeChangeElement20.classList.toggle("white");
    themeChangeElement21.classList.toggle("white");
    backgroundContainer.classList.toggle("white");
})

function appendToResult(value) {
    result.value += value;
}

function clearResult() {
    result.value = "";
}

function backspace() {
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error";
    }
}

function calculatePercentage() {
    try {
        result.value = eval(result.value) / 100;
    } catch (error) {
        result.value = "Error";
    }
}

function calculateSquareRoot() {
    try {
        result.value = Math.sqrt(eval(result.value));
    } catch (error) {
        result.value = "Error";
    }
}

function calculateCubeRoot() {
    try {
        result.value = Math.cbrt(eval(result.value));
    } catch (error) {
        result.value = "Error";
    }
}

function calculateLogarithm() {
    try {
        result.value = Math.log10(eval(result.value));
    } catch (error) {
        result.value = "Error";
    }
}