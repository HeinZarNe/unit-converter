let inputAmount = document.getElementById("input-amount")
let inputUnit = document.getElementById("input-unit")


let outputm = document.getElementById("output-m")
let outputdm = document.getElementById("output-dm")
let outputcm = document.getElementById("output-cm")
let outputmm = document.getElementById("output-mm")
let outputin = document.getElementById("output-in")
let outputft = document.getElementById("output-ft")
let outputyd = document.getElementById("output-yd")
let outputkm = document.getElementById("output-km")
let outputmile = document.getElementById("output-mile")

function createOption(x, y, z) {
    let option = document.createElement("option");
    let optionUnit = document.createTextNode(y);
    option.setAttribute("value", z)
    option.appendChild(optionUnit);
    x.appendChild(option);
}

for (x in unit.length) {
    createOption(inputUnit, x, unit.length[x]);
}

inputAmount.addEventListener("keyup", calc)
inputUnit.addEventListener("change", calc)


function calc() {
    let x = inputAmount.value;
    let y = inputUnit.value

    outputm.innerText = parseFloat(((x / y) * unit.length.m).toFixed(5)) + " " + "m"
    outputdm.innerText = parseFloat(((x / y) * unit.length.dm).toFixed(5)) + " " + "dm"
    outputcm.innerText = parseFloat(((x / y) * unit.length.cm).toFixed(5)) + " " + "cm"
    outputmm.innerText = parseFloat(((x / y) * unit.length.mm).toFixed(5)) + " " + "mm"
    outputin.innerText = parseFloat(((x / y) * unit.length.in).toFixed(5)) + " " + "in"
    outputft.innerText = parseFloat(((x / y) * unit.length.ft).toFixed(5)) + " " + "ft"
    outputyd.innerText = parseFloat(((x / y) * unit.length.yd).toFixed(5)) + " " + "yd"
    outputkm.innerText = parseFloat(((x / y) * unit.length.km).toFixed(5)) + " " + "km"
    outputmile.innerText = parseFloat(((x / y) * unit.length.mile).toFixed(5)) + " " + "mile"

}

let closeBtn = document.getElementById("close-btn")

function reset() {
    inputAmount.value = "";
    outputm.innerText = "0 m";
    outputdm.innerText = "0 dm";
    outputcm.innerText = "0 cm";
    outputmm.innerText = "0 mm";
    outputin.innerText = "0 in";
    outputft.innerText = "0 ft";
    outputyd.innerText = "0 yd";
    outputkm.innerText = "0 km";
    outputmile.innerText = "0 mile";
}

if (inputAmount.value.length == 0) {
    closeBtn.style.display = "none"
} else {
    closeBtn.style.display = "inline-block"
    console.log("hi")
}