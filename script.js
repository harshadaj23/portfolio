function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// Scroll Animation
const elements = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if (position < screen - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});

function sendMessage(e) {
    e.preventDefault();
    document.getElementById("msg").innerText = "Message Sent Successfully!";
}