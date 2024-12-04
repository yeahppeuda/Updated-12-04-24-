document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector(".slides");
    const images = document.querySelectorAll(".slides img");
    let currentIndex = 0;

    // Dynamically set the width of the slides container to fit all images
    slides.style.width = `${images.length * 100}%`; // Width for all images combined

    // Function to move to the next image automatically
    function moveToNextImage() {
        if (currentIndex < images.length - 1) {
            currentIndex++; // Move to the next image
        } else {
            currentIndex = 0; // Loop back to the first image
        }
        updateSliderPosition();
    }

    // Function to update slider position based on currentIndex
    function updateSliderPosition() {
        const sliderWidth = document.querySelector(".slider").offsetWidth; // Get slider width
        slides.style.transform = `translateX(-${currentIndex * sliderWidth}px)`; // Move horizontally
    }

    // Auto-slide every 3 seconds
    setInterval(moveToNextImage, 3000);

    // Initialize slider position
    updateSliderPosition();
});
