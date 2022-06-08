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

// Toggle Backgroung Image
const toggleBackgrounds = () => {
    const body = document.getElementById("app-body");
    const imageUrl = randomItemFromArray(imagesArray, "./assets/images/");
    body.style.backgroundImage = `url(${imageUrl})`;
};

// Play audio
const playAudio = () => {
    myAudio = new Audio("./assets/audio/1.mp3");
    myAudio.loop = true;
    myAudio.play();
};

toggleBackgrounds(); // Run
playAudio(); // Run

// Change Background image every x seconds
setInterval(toggleBackgrounds, 10000);