$(document).ready(function() {
  // Initialize draggable functionality
  $(".draggable").draggable();

 // Function to handle the "Start" button click event
  const startButton = document.getElementById("startButton");
  if (startButton) {
    startButton.addEventListener("click", function() {
      const whirlSound = document.getElementById("whirlSound");

      if (whirlSound) {
        whirlSound.play().then(() => {
          setTimeout(() => {
            whirlSound.pause();
            whirlSound.currentTime = 0; // Reset to the start of the audio
          }, 4000);

          // Start the vortex animation
          startVortexAnimation();
        }).catch(error => {
          console.error("Audio playback failed:", error);
        });
      } else {
        console.error("Whirl sound element not found.");
      }
    });
  } else {
    console.error("Start button not found.");
  }

  // Function to add the vortex animation class
  function startVortexAnimation() {
    const vortexElement = document.getElementById("vortex");
    if (vortexElement) {
      vortexElement.classList.add("animate-vortex");
    } else {
      console.error("Vortex element not found.");
    }
  }
});







