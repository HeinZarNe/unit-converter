let inputAmount = document.getElementById("input-amount")
let inputUnit = document.getElementById("input-unit")

let outputm2 = document.getElementById("output-m2")
let outputft2 = document.getElementById("output-ft2")
let outputkm2 = document.getElementById("output-km2")
let outputacre = document.getElementById("output-acre")


function createOption(x, y, z) {
    let option = document.createElement("option");
    let optionUnit = document.createTextNode(y);
    option.setAttribute("value", z)
    option.appendChild(optionUnit);
    x.appendChild(option);
}

for (x in unit.area) {
    createOption(inputUnit, x, unit.area[x]);
}

inputAmount.addEventListener("keyup", calc)
inputUnit.addEventListener("change", calc)

function calc() {
    let x = inputAmount.value;
    let y = inputUnit.value

    outputm2.innerHTML = parseFloat(((x / y) * unit.area["Square Meter"]).toFixed(5)) + " " + "m<sup>2</sup>"
    outputft2.innerHTML = parseFloat(((x / y) * unit.area["Square Foot"]).toFixed(5)) + " " + "ft<sup>2</sup>"
    outputkm2.innerHTML = parseFloat(((x / y) * unit.area["Square Kilometer"]).toFixed(5)) + " " + "km<sup>2</sup>"
    outputacre.innerHTML = parseFloat(((x / y) * unit.area.Acre).toFixed(5)) + " " + "Acre"


}