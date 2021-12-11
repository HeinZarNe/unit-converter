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

    if (y == unit.temperature["Degree Celcius"]) {
        outputC.innerText = parseFloat(((x / y) * unit.temperature["Degree Celcius"]).toFixed(5)) + " " + "°C"
        outputK.innerText = parseFloat((Number(x) + 273.15)) + " " + "K"
        outputF.innerText = parseFloat(((x * 9 / 5) + 32).toFixed(5)) + " " + "°F"
    } else if (y == unit.temperature["Kelvin"]) {
        outputC.innerText = parseFloat(((x - 30) * 5 / 9).toFixed(5)) + " " + "°C"
        outputK.innerText = x + " K"
        outputF.innerText = parseFloat((((x - 273.15) * 9 / 5) + 32).toFixed(5)) + " " + "°F"
    } else if (y == unit.temperature["Fahrenheit"]) {
        outputC.innerText = parseFloat(((x - 32) * 5 / 9).toFixed(5)) + " " + "°C"
        outputK.innerText = parseFloat((((x - 32) * 5 / 9) + 273.15).toFixed(5)) + " " + "K"
        outputF.innerText = x + "°F"
    }


}

// outputC.innerText = parseFloat(((x / y) * unit.temperature["Degree Celcius"]).toFixed(5)) + " " + "°C"
//     outputK.innerText = parseFloat(((x + 273.15)).toFixed(5)) + " " + "K"
//     outputF.innerText = parseFloat(((x * 9 / 5) + 32).toFixed(5)) + " " + "°F"
//(1° C× 9 / 5) + 32 = 33.8° F
// 1°C + 273.15 = 274.15K