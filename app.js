const imagesArray = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"]; // All image links

/**
 * Return random items from given array
 * @param {Array} givenArray
 * @param {String} prefix
 * @returns String
 */
const randomItemFromArray = (givenArray, prefix = "") => {
    return prefix + givenArray[Math.floor(Math.random() * givenArray.length)];
};

// Toggle Background Image
const toggleBackgrounds = () => {
    const body = document.getElementById("app-body");
    let previousImageUrl = body.style.backgroundImage;
    const imageUrl = randomItemFromArray(imagesArray, "./assets/images/");
    body.style.backgroundImage = `url(${imageUrl})`;
};

toggleBackgrounds(); // Run

// Change Background image every x seconds
setInterval(toggleBackgrounds, 10000);


const backgroundMusic = new Audio("./assets/audio/1.mp3"); // Audio
const toggleMusicButton = document.getElementById("toggle-sound-btn"); // Toggle button
const toggleMusicButtonText = document.getElementById("toggle-sound-btn-text"); // Toggle button text
const musicPlayingSpan = document.getElementById("music-playing-dot"); // Music playing dot

// Start audio
const startAudio = () => {
    backgroundMusic.loop = true;
    backgroundMusic.play();
    toggleMusicButtonText.innerText = "Stop Sound";
    musicPlayingSpan.classList.remove("hidden");
};

// Stop audio
const stopAudio = () => {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
    toggleMusicButtonText.innerText = "Play Sound";
    musicPlayingSpan.classList.add("hidden");
};

// Play Music
const playAudio = () => {
    stopAudio();
    startAudio();
};

// Click Play button
toggleMusicButton.addEventListener("click", () => {
    if (backgroundMusic.paused || backgroundMusic.currentTime == 0)
        return playAudio();
    return stopAudio();
});


// Footer
const footerDateSpan = document.getElementById('date-in-footer');

footerDateSpan.innerText = " " + new Date().getFullYear();