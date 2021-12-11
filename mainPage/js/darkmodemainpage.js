const nightBtn = document.querySelector(".night");
const dayBtn = document.querySelector(".day");

nightBtn.addEventListener("click", () => {
    nightBtn.style.display = "none"
    dayBtn.style.display = "flex"
    document.body.classList.add("darkmode")
    localStorage.setItem("dark","darkmode")
});


dayBtn.addEventListener("click", () => {
    nightBtn.style.display = "flex"
    dayBtn.style.display = "none"
    document.body.classList.remove("darkmode")
    localStorage.removeItem("dark");
});

(function toShowUI() {
    if (localStorage.getItem("dark")) {
        document.body.classList.add(localStorage.getItem("dark"));
        nightBtn.style.display = "none"
        dayBtn.style.display = "flex"
    }
})()

