const playButton = document.getElementById("startButton");

playButton.addEventListener("mouseenter", () => {
    playButton.innerHTML = "havefun";
});
playButton.addEventListener("mouseout", () => {
    playButton.innerHTML = "Play";
});
playButton.addEventListener("click", () => {
    playButton.innerHTML = "HAVE FUN";
});
