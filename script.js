const weddingDate = new Date("2024-12-28T00:00:00");

function updateUnit(id, value) {
    const container = document.getElementById(id);
    const current = container.querySelector(".flip");

    if (current.textContent !== String(value)) {
        const newSpan = document.createElement("span");
        newSpan.className = "flip";
        newSpan.textContent = value;

        container.innerHTML = "";
        container.appendChild(newSpan);
    }
}

function updateCounter() {
    const now = new Date();
    const diff = now - weddingDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    updateUnit("days", days);
    updateUnit("hours", hours);
    updateUnit("minutes", minutes);
    updateUnit("seconds", seconds);
}

updateCounter();
setInterval(updateCounter, 1000);


const music = document.getElementById("bg-music");

document.addEventListener("click", () => {
    if (music.muted) {
        music.muted = false;
        music.volume = 0.4; // soft romantic volume
        music.play();
    }
}, { once: true });

const bgMusic = document.getElementById("bg-music");

// Unmute & fade-in music on first user interaction
document.addEventListener("click", () => {
    if (bgMusic.muted) {
        bgMusic.muted = false;
        bgMusic.volume = 0;

        bgMusic.play();

        // Smooth volume fade-in
        let volume = 0;
        const fade = setInterval(() => {
            volume += 0.02;
            if (volume >= 0.4) {
                volume = 0.4; // gentle background volume
                clearInterval(fade);
            }
            bgMusic.volume = volume;
        }, 150);
    }
}, { once: true });

const toggleBtn = document.getElementById("music-toggle");

toggleBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
        bgMusic.play();
        toggleBtn.textContent = "🔊 Music";
    } else {
        bgMusic.pause();
        toggleBtn.textContent = "🎵 Music";
    }
});

// Dark mode 
function setDayNightMode() {
    const hour = new Date().getHours();
    if (hour >= 18 || hour < 6) {
        document.body.classList.add("night");
        document.body.classList.remove("day");
    } else {
        document.body.classList.add("day");
        document.body.classList.remove("night");
    }

    // Also apply classes to container, time-box, and quotes for readability
    const container = document.querySelector(".container");
    const timeBoxes = document.querySelectorAll(".time-box");
    const quotes = document.querySelectorAll(".quote");

    if(document.body.classList.contains("night")) {
        container.classList.add("night");
        container.classList.remove("day");
        timeBoxes.forEach(box => {
            box.classList.add("night");
            box.classList.remove("day");
        });
        quotes.forEach(q => {
            q.classList.add("night");
            q.classList.remove("day");
        });
    } else {
        container.classList.add("day");
        container.classList.remove("night");
        timeBoxes.forEach(box => {
            box.classList.add("day");
            box.classList.remove("night");
        });
        quotes.forEach(q => {
            q.classList.add("day");
            q.classList.remove("night");
        });
    }
}

const timeBoxes = document.querySelectorAll(".time-box");

if(document.body.classList.contains("night")) {
    timeBoxes.forEach(box => {
        box.classList.add("night");
        box.classList.remove("day");
    });
} else {
    timeBoxes.forEach(box => {
        box.classList.add("day");
        box.classList.remove("night");
    });
}

setDayNightMode();

// Optional: Update day/night mode every hour
// document.getElementById("mode-toggle").addEventListener("click", () => {
//     document.body.classList.toggle("night");
//     document.body.classList.toggle("day");
//     setDayNightMode(); // re-apply classes for text & container
// });

/* ✨ Shooting stars */
const shootingContainer = document.querySelector(".shooting-stars");

function createShootingStar() {
    if (!document.body.classList.contains("night")) return;

    const star = document.createElement("div");
    star.className = "shooting-star";

    star.style.top = Math.random() * 50 + "vh";
    star.style.left = Math.random() * 100 + "vw";

    shootingContainer.appendChild(star);

    setTimeout(() => star.remove(), 2000);
}

// One shooting star every ~8–12 seconds
setInterval(createShootingStar, Math.random() * 4000 + 8000);


/* ☁️ Night clouds */
const cloudContainer = document.querySelector(".night-clouds");

function createNightCloud() {
    if (!document.body.classList.contains("night")) return;

    const cloud = document.createElement("div");
    cloud.className = "night-cloud";

    const size = Math.random() * 200 + 150;
    cloud.style.width = size + "px";
    cloud.style.height = size / 2 + "px";
    cloud.style.top = Math.random() * 70 + "vh";
    cloud.style.animationDuration = Math.random() * 60 + 60 + "s";

    cloudContainer.appendChild(cloud);

    setTimeout(() => cloud.remove(), 130000);
}

// Create a few clouds initially
for (let i = 0; i < 6; i++) {
    createNightCloud();
}

// 🔐 Secret page unlock via seconds counter
let secretTapCount = 0;
const REQUIRED_TAPS = 7;

const secondsBox = document.getElementById("seconds");

secondsBox.addEventListener("click", () => {
    secretTapCount++;

    // Optional subtle feedback
    secondsBox.style.transform = "scale(1.1)";
    setTimeout(() => secondsBox.style.transform = "scale(1)", 150);

    if (secretTapCount === REQUIRED_TAPS) {
        // Fade out before redirect
        document.body.style.transition = "opacity 1s ease";
        document.body.style.opacity = 0;

        setTimeout(() => {
            window.location.href = "secret.html";
        }, 1000);
    }
});

