document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const body = document.body;
    const containers = document.querySelectorAll('.container-imagens');

    containers.forEach(container => {
        container.style.display = 'none';
    });
    document.getElementById('home').style.display = 'block';

    body.classList.add('fade-in');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            body.classList.remove('fade-in');
            body.classList.add('fade-out');

            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');

            const targetId = this.getAttribute('data-target');

            setTimeout(() => {
                containers.forEach(container => {
                    container.style.display = 'none';
                });

                const targetContainer = document.getElementById(targetId);
                if (targetContainer) {
                    targetContainer.style.display = 'block';
                }

                body.classList.remove('fade-out');
                body.classList.add('fade-in');
            }, 300);
        });
    });
});
