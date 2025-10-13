document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');


  navLinks.forEach(link => {
    link.addEventListener('click', function() {

      navLinks.forEach(item => {
        item.classList.remove('active');
      });

      this.classList.add('active');
    });
  });

  const currentPath = window.location.pathname.split('/').pop();
  if (currentPath === '' || currentPath === 'index.html') {
    document.querySelector('.home-color').classList.add('active');
  } else {
    const activeLink = document.querySelector(`[href*="${currentPath}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }
});