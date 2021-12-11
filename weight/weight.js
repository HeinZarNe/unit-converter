let inputAmount = document.getElementById("input-amount")
let inputUnit = document.getElementById("input-unit")

let outputkg = document.getElementById("output-kg")
let outputg = document.getElementById("output-g")
let outputlb = document.getElementById("output-lb")
let outputton = document.getElementById("output-ton")

function createOption(x, y, z) {
    let option = document.createElement("option");
    let optionUnit = document.createTextNode(y);
    option.setAttribute("value", z)
    option.appendChild(optionUnit);
    x.appendChild(option);
}

for (x in unit.weight) {
    createOption(inputUnit, x, unit.weight[x]);
}

inputAmount.addEventListener("keyup", calc)
inputUnit.addEventListener("change", calc)

function calc() {
    let x = inputAmount.value;
    let y = inputUnit.value

    outputkg.innerText = parseFloat(((x / y) * unit.weight.kg).toFixed(5)) + " " + "kg"
    outputg.innerText = parseFloat(((x / y) * unit.weight.g).toFixed(5)) + " " + "g"
    outputlb.innerText = parseFloat(((x / y) * unit.weight.lb).toFixed(5)) + " " + "lb"
    outputton.innerText = parseFloat(((x / y) * unit.weight.ton).toFixed(5)) + " " + "ton"

}