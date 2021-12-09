let inputValue = document.querySelector("#userInput")
let selectBox = document.querySelector("select")
let button = document.querySelector("button")
let displayBox1 = document.querySelector("#btn1")
let displayBox2 = document.querySelector("#btn2")
let displayBox3 = document.querySelector("#btn3")

fromMeter = (x) => {
    let toFoot = (x * 10.764).toPrecision(2)
    let toKilometer = (x / 1e+6).toPrecision(2)
    let toAcre = (x / 4047).toPrecision(2)
    console.log(toFoot, toKilometer, toAcre)
    displayBox1.innerText = toFoot + " Square Foot"
    displayBox2.innerText = toKilometer + " Square Kilometer"
    displayBox3.innerText = toAcre + " Acre"
}
fromKilometer = (x) => {
    let toFoot = (x * 1.076e+7).toPrecision(2)
    let toMeter = (x * 1e+6).toPrecision(2)
    let toAcre = (x * 247).toPrecision(2)
    console.log(toFoot, toMeter, toAcre)
    displayBox1.innerText = toFoot + " Square Foot"
    displayBox2.innerText = toMeter + " Square Meter"
    displayBox3.innerText = toAcre + " Acre"
}
fromFoot = (x) => {
    let toKilometer = (x / 1.076e+7).toPrecision(2)
    let toMeter = (x / 10.764).toPrecision(2)
    let toAcre = (x / 43560).toPrecision(2)
    console.log(toKilometer, toMeter, toAcre)
    displayBox1.innerText = toKilometer + " Square Kilometer"
    displayBox2.innerText = toMeter + " Square Meter"
    displayBox3.innerText = toAcre + " Acre"
}
fromAcre = (x) => {
    let toKilometer = (x / 247).toPrecision(2)
    let toMeter = (x * 4047).toPrecision(2)
    let toFoot = (x * 43560).toPrecision(2)
    console.log(toKilometer, toMeter, toFoot)
    displayBox1.innerText = toKilometer + " Square Kilometer"
    displayBox2.innerText = toMeter + " Square Meter"
    displayBox3.innerText = toFoot + " Foot"
}


button.addEventListener("click", () => {
    if (selectBox.selectedIndex == 0) {
        fromMeter(Number(inputValue.value))
    } else if (selectBox.selectedIndex == 1) {
        fromFoot(Number(inputValue.value))
    } else if (selectBox.selectedIndex == 2) {
        fromKilometer(Number(inputValue.value))
    } else if (selectBox.selectedIndex == 3) {
        fromAcre(Number(inputValue.value))
    }
})