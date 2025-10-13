document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const body = document.body;
    
    const classesDeCorFundo = ['bg-azul', 'bg-amarelo', 'bg-verde', 'bg-rosa'];

    body.classList.add('fade-in');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // 

            body.classList.remove('fade-in');
            body.classList.add('fade-out');

            navLinks.forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
            
            const novaCorFundo = this.getAttribute('data-cor-fundo');

            setTimeout(() => {
                body.classList.remove(...classesDeCorFundo);

                if (novaCorFundo) {
                    body.classList.add(novaCorFundo);
                }

                body.classList.remove('fade-out');
                body.classList.add('fade-in');
            }, 500);
        });
    });
});
