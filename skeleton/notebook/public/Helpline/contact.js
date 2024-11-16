// Close the slider when the close button is clicked
document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.overlay').classList.remove('visible');
});

// Automatically show the slider when the page loads (you can customize this)
window.onload = function() {
    document.querySelector('.overlay').classList.add('visible');
};