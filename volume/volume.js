let inputAmount = document.getElementById("input-amount")
let inputUnit = document.getElementById("input-unit")

let outputm = document.getElementById("output-m3")
let outputdm = document.getElementById("output-cm3")
let outputcm = document.getElementById("output-ft3")
let outputmm = document.getElementById("output-in3")


function createOption(x, y, z) {
    let option = document.createElement("option");
    let optionUnit = document.createTextNode(y);
    option.setAttribute("value", z)
    option.appendChild(optionUnit);
    x.appendChild(option);
}

for (x in unit.volume) {
    createOption(inputUnit, x, unit.volume[x]);
}

inputAmount.addEventListener("keyup", calc)
inputUnit.addEventListener("change", calc)

function calc() {
    let x = inputAmount.value;
    let y = inputUnit.value

    outputm.innerHTML = parseFloat(((x / y) * unit.volume["Cubic Meter"]).toFixed(5)) + " " + "m<sup>3</sup>"
    outputdm.innerHTML = parseFloat(((x / y) * unit.volume["Cubic Centimeter"]).toFixed(5)) + " " + "cm<sup>3</sup>"
    outputcm.innerHTML = parseFloat(((x / y) * unit.volume["Cubic Feet"]).toFixed(5)) + " " + "ft<sup>3</sup>"
    outputmm.innerHTML = parseFloat(((x / y) * unit.volume["Cubic Inch"]).toFixed(5)) + " " + "in<sup>3</sup>"

}