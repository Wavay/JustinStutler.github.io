document.getElementById("ToggleBtn").addEventListener("click", function () {
    var textToToggle = document.getElementById("ToggleTxt");
    if (textToToggle.style.display === "none") {
        textToToggle.style.display = "block";
    } else {
        textToToggle.style.display = "none";
    }
});

// hacker effect
/*
const letters = "abcdefghijklmnopqrstuvwxyz";

const elements = document.querySelectorAll('.hack');

for (const element of elements) {
    element.onmouseover = event => {
        let i = 0;
        const interval = setInterval(() => {
            event.target.innerText = event.target.innerText.split("")
                .map((letter, index) => {
                    if (index < i) {
                        return event.target.dataset.value[index];
                    }
                    if (letter === " ") return " ";
                    let scrambledLetter = letters[Math.floor(Math.random() * 26)];
                    if (letter === letter.toUpperCase() && letter !== letter.toLowerCase()) {
                        scrambledLetter = scrambledLetter.toUpperCase();
                    } else if (letter === letter.toLowerCase() && letter !== letter.toUpperCase()) {
                        scrambledLetter = scrambledLetter.toLowerCase();
                    }
                    return scrambledLetter;
                })
                .join("");
            if (i >= event.target.dataset.value.length) clearInterval(interval);
            i += 1;
        }, 50 / (event.target.dataset.value.length / 20));
    }
}
*/

const letters = "abcdefghijklmnopqrstuvwxyz";

const elements = document.querySelectorAll('.hack');

for (const element of elements) {
    element.onmouseover = event => {
        let i = 0;
        const interval = setInterval(() => {
            event.target.innerText = event.target.innerText.split("")
                .map((letter, index) => {
                    if (index < i) {
                        return event.target.dataset.value[index];
                    }
                    if (letter === " ") return " ";
                    let scrambledLetter = letters[Math.floor(Math.random() * 26)];
                    if (letter === letter.toUpperCase() && letter !== letter.toLowerCase()) {
                        scrambledLetter = scrambledLetter.toUpperCase();
                    } else if (letter === letter.toLowerCase() && letter !== letter.toUpperCase()) {
                        scrambledLetter = scrambledLetter.toLowerCase();
                    }
                    return scrambledLetter;
                })
                .join("");
            if (i >= event.target.dataset.value.length) clearInterval(interval);
            i += 1;
        }, 50 / (event.target.dataset.value.length / 20));
    }
}
