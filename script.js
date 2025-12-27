const weddingDate = new Date("2024-12-28T00:00:00");

function updateCounter() {
    const now = new Date();
    const diff = now - weddingDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").innerText = days;
    document.getElementById("time").innerText =
        `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
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
