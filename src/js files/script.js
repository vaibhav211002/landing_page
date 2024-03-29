document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.getElementById('dropdownButton');
    const navLinks = document.getElementById('navLinks');
  
    dropdownButton.addEventListener('click', function() {
      navLinks.classList.toggle('show');
    });
  

    
    window.addEventListener('click', function(event) {
      if (!event.target.matches('.dropdown-button')) {
        if (navLinks.classList.contains('show')) {
          navLinks.classList.remove('show');
        }
      }
    });
  });
  