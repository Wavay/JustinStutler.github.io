document.getElementById("ToggleBtn").addEventListener("click", function () {
    var textToToggle = document.getElementById("ToggleTxt");
    if (textToToggle.style.display === "none") {
        textToToggle.style.display = "block";
    } else {
        textToToggle.style.display = "none";
    }
});

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.getElementById("test").onmouseover = event => {
    let i = 0;
    const interval = setInterval(() => {
        // scrambles letters
        event.target.innerText = event.target.innerText.split("")
            .map((letter, index) => {
                if (index < i) {
                    return event.target.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

        // scramble code runs the # times = length of text
        if (i >= event.target.dataset.value.length) clearInterval(interval);
        // controls the speed of true letter reveal with lower number = slower (0-1)
        i += 1/5;
    }, 30);

}