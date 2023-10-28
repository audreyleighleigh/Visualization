// JavaScript file

// Function to animate the clouds
function animateClouds() {
    const cloud1 = document.getElementById('Cloud1');
    const cloud2 = document.getElementById('Cloud2');

    // Initial positions of the clouds
    let cloud1X = 1920; // Start off-screen to the right
    let cloud2X = 1920; // Start off-screen to the right

    // Animation speed (you can adjust this value)
    const cloudSpeed = 120; // Adjust the speed as needed

    // Animation function
    function moveClouds() {
        // Move clouds to the left
        cloud1X -= cloudSpeed;
        cloud2X -= cloudSpeed;

        // Apply new positions using the transform attribute
        cloud1.setAttribute('transform', `translate(${cloud1X}, 0)`);
        cloud2.setAttribute('transform', `translate(${cloud2X}, 0)`);

        // Check if clouds have moved off-screen to the left
        if (cloud1X < -300) {
            cloud1X = 1920; // Reset to the right
        }

        if (cloud2X < -300) {
            cloud2X = 1920; // Reset to the right
        }

        // Request animation frame
        requestAnimationFrame(moveClouds);
    }

    // Your existing JavaScript code

// Add a DOMContentLoaded event listener to ensure the code runs when the DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  // Add drag behavior to the slider track (XYBar)
  const sliderTrack = d3.select("#XYBar rect.slider-track");

  const drag = d3.drag().on("drag", function (event) {
    // Update the position of the slider thumb based on user drag
    const x = Math.max(288, Math.min(1755, event.x)); // Constrain within slider track
    dot1.attr("transform", `translate(${x}, 176)`);

    // Calculate the selected value based on the thumb's position
    const selectedValue = (x - 288) / 1467; // Adjust as needed
    // You can use the selectedValue to update other elements or perform actions.
  });

  sliderTrack.call(drag);
});

// Function to handle slider functionality
 
// Run the initialization when the window loads

window.onload = () => {
    animateClouds(); // Your existing animation
    initSlider(); // Initialize the slider
  };


  // Path: Visualization.js