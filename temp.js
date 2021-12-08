let Bigbutton = document.getElementById("bigButton")
let icon = document.querySelector("i")
let smallbutton = document.getElementById("smallButton")
let bg = document.getElementsByTagName("body")[0]
let header = document.getElementsByClassName("header")[0]
let image = document.getElementsByTagName("img")

function move() {
    Bigbutton.firstElementChild.classList.toggle("move")
    icon.classList.toggle("feather-sun")
        // bg.classList.toggle("darkBg")
        // header.classList.toggle("newHeader")[0]

    // if (image[0].src == "https://lh3.googleusercontent.com/proxy/dj_U5qleWZgfhxoRtsYE6nmu2n2EJAHdD4mWuQAopBCJDaRtx299uMkjJmrw43kvwmGNqHmveUeleACEoTC1M7ii9iRvoIdfihyX0fZwVv9UdhwAxLIIzQ") {
    //     image[0].srcset = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/862px-Apple_logo_white.svg.png"
    // }
    // if (image[0].src != "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/862px-Apple_logo_white.svg.png") {
    //     image[0].srcset ="https://lh3.googleusercontent.com/proxy/dj_U5qleWZgfhxoRtsYE6nmu2n2EJAHdD4mWuQAopBCJDaRtx299uMkjJmrw43kvwmGNqHmveUeleACEoTC1M7ii9iRvoIdfihyX0fZwVv9UdhwAxLIIzQ"

}