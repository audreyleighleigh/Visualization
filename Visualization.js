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

// script.js
document.addEventListener('DOMContentLoaded', function () {
    const svg = d3.select('svg'); // Select your SVG element
  
    // Create the drag behavior for the slider track
    const sliderTrack = svg.select('#XYBar rect.slider-track');
    const sliderDrag = d3.drag()
      .on('drag', function (event) {
        const newX = Math.max(288, Math.min(1755, event.x));
        sliderTrack.attr('x', newX);
        // Calculate the selected value based on the slider's position
        const selectedValue = (newX - 288) / 1467; // Adjust as needed
        // You can use the selectedValue to update other elements or perform actions.
      });
  
    sliderTrack.call(sliderDrag);
  
    // Create the drag behavior for the button (Dot1)
    const button = svg.select('#Dot1');
    const buttonDrag = d3.drag()
      .on('drag', function (event) {
        const newX = Math.max(288, Math.min(1755, event.x));
        button.attr('transform', `translate(${newX}, 176)`);
        // You can perform additional actions here as needed.
      });
  
    button.call(buttonDrag);
  });
  

// Function to handle slider functionality
 
// Run the initialization when the window loads

window.onload = () => {
    animateClouds(); // Your existing animation
    initialize; // Initialize the slider
  };


  // Path: Visualization.js