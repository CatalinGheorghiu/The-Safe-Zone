//Select all the keys
const keys = document.querySelectorAll(".key");
//For each key add an event that removes the transition
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

/**
 ** EVENTS
 */
//When a specific key is pressed, a sound is played
window.addEventListener("keydown", playSound);

/**
 ** FUNCTIONS
 */
function removeTransition(e) {
    //If the pressed key doesn't have a property transform
    //Stop the function
    if (e.propertyName !== "transform") return;
    //Else, remove the class with transition effect
    this.classList.remove("playing");
}

function playSound(e) {
    console.log(e)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    // Stop the function if the pressed key isn't defined
    if (!audio) return;
    //Resets the sound every time the key is pressed again
    audio.currentTime = 25;
    //Play the sound
    audio.play();
    //Add a class with transition effect
    key.classList.add("playing");
}
