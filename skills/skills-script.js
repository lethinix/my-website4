document.getElementById('skills-heading').addEventListener('click', function () {
    const skillsList = document.getElementById('skills-list');
    skillsList.classList.toggle('visible');
});

document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("music");

    // Check if the music has already played in this session
    if (!sessionStorage.getItem("musicPlayed")) {
        // Set the flag immediately to indicate the music has played
        sessionStorage.setItem("musicPlayed", "true");

        // Try to autoplay the music
        const playAudio = () => {
            audio.autoplay = true;
            audio.muted = false; // Ensure the audio is not muted
            audio.play().catch(() => {
                // Autoplay was blocked, wait for user interaction
                console.log("Autoplay was blocked. Waiting for user interaction...");
                document.body.addEventListener('click', () => {
                    audio.play();
                }, { once: true }); // Only listen for the first click
            });
        };

        playAudio();
    } else {
        // If the music has already played, disable autoplay
        audio.autoplay = false;
    }
});