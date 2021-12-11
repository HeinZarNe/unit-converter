let inputAmount = document.getElementById("input-amount")
let inputUnit = document.getElementById("input-unit")

let outputC = document.getElementById("output-C")
let outputK = document.getElementById("output-K")
let outputF = document.getElementById("output-F")

function createOption(x, y, z) {
    let option = document.createElement("option");
    let optionUnit = document.createTextNode(y);
    option.setAttribute("value", z)
    option.appendChild(optionUnit);
    x.appendChild(option);
}

for (x in unit.temperature) {
    createOption(inputUnit, x, unit.temperature[x]);
}

inputAmount.addEventListener("keyup", calc)
inputUnit.addEventListener("change", calc)

function calc() {
    let x = inputAmount.value;
    let y = inputUnit.value

    outputC.innerText = parseFloat(((x / y) * unit.temperature["Degree Celcius"]).toFixed(5)) + " " + "°C"
    outputK.innerText = parseFloat(((x / y) * unit.temperature.K).toFixed(5)) + " " + "K"
    outputF.innerText = parseFloat(((x / y) * unit.temperature["Fahrenheit"]).toFixed(5)) + " " + "°F"

}