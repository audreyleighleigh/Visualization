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

    // Function to handle slider functionality
function initSlider() {
    const sliderBar = document.getElementById('XYBar'); // Updated slider bar ID
    const sliderDot = document.getElementById('Dot1'); // Updated slider dot/thumb ID
  
    // Flag to track whether the user is currently dragging the slider
    let isDragging = false;
  
    // Get the initial dot position from the SVG element
    let dotX = parseFloat(sliderDot.getAttribute('cx'));
  
    // Function to update the dot's position
    function updateDot() {
      sliderDot.setAttribute('cx', dotX);
    }
  
    // Event listener for mouse down on the slider bar
    sliderBar.addEventListener('mousedown', (event) => {
      isDragging = true;
      console.log('Slider clicked'); // Log a message when the dot is clicked
      updateDotPosition(event);
    });
  
    // Event listener for mouse move (dragging) on the slider bar
    sliderBar.addEventListener('mousemove', (event) => {
      if (isDragging) {
        updateDotPosition(event);
      }
    });
  
    // Event listener for mouse up (release) anywhere on the page
    window.addEventListener('mouseup', () => {
      isDragging = false;
    });
  
    // Function to update the dot's position based on mouse coordinates
    function updateDotPosition(event) {
      const sliderRect = sliderBar.getBoundingClientRect();
      const mouseX = event.clientX - sliderRect.left;
  
      // Ensure the dot stays within the slider bounds
      dotX = Math.min(390, Math.max(10, mouseX));
      updateDot();
  
      // Calculate a value based on the dot's position (you can adjust this formula)
      const sliderValue = (dotX - 10) / 380;
  
      // Use the sliderValue as needed (e.g., for animations or other actions)
      console.log('Slider Value:', sliderValue);
    }
  
    // Initialize the dot's position
    updateDot();
  }
  
  // Run the slider initialization when the window loads

  

    // Start the animation
    moveClouds();
}

// Get references to the visible and hidden elements
const elementVisible = document.getElementById('Square5');
const elementHidden = document.getElementById('Square5Filled');

// Add a click event listener to the visible element
elementVisible.addEventListener('click', function() {
  // Hide the visible element
  elementVisible.style.display = 'none';

  // Show the hidden element
  elementHidden.style.display = 'inline'; // or 'block' depending on your layout needs
});


window.onload = () => {
    animateClouds(); // Your existing animation
    initSlider();    // Initialize the slider
  };
