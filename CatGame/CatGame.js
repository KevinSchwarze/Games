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

$(document).ready(function () {
  // Array to keep track of selected cats
  const selectedCats = [];

  // Function to create a draggable cat element
  function createCatElement(imageSrc) {
    const catDiv = $('<div class="draggable"><img class="image" src="' + imageSrc + '" /></div>');
    $("#vortex").append(catDiv);
    catDiv.draggable(); // Make the new element draggable
  }

  // Initially hide all draggable cat elements
  $(".draggable").hide();

  // Handle thumbnail click events
  $(".thumbnail").click(function () {
    const imageSrc = $(this).find("img").attr("src");

    // Check if the cat is already selected
    if (selectedCats.includes(imageSrc)) {
      alert("You already selected this cat!");
      return;
    }

    // Add the cat if less than 4 are selected
    if (selectedCats.length < 4) {
      selectedCats.push(imageSrc);
      createCatElement(imageSrc);
    } else {
      alert("You can only select up to 4 cats!");
    }
  });
});
