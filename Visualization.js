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

    // Start the animation
    moveClouds();
}

// Run the animation when the window loads
window.onload = animateClouds;
