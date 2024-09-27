const darkModeToggle = document.getElementById('darkmode-toggle');
const background = document.querySelector('.background');

darkModeToggle.addEventListener('change', function() {
  if (this.checked) {
    background.style.backgroundColor = '#121212'; // Dark mode color
  } else {
    background.style.backgroundColor = '#ffffff'; // Light mode color
  }
});