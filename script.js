// Add any interactivity, like toggling between monthly and annual pricing.
document.querySelectorAll('.toggle-pricing').forEach(button => {
    button.addEventListener('click', () => {
    alert("Switching pricing view!");
    });
});