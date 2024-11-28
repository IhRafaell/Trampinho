document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.parentElement;
        const overlay = document.querySelector('.overlay');

        // Alternar a classe expanded no card
        card.classList.toggle('expanded');
        
        // Exibir ou ocultar o overlay
        if (card.classList.contains('expanded')) {
            overlay.style.display = 'block';
            this.innerHTML = "Ver Menos";
        } else {
            overlay.style.display = 'none';
            this.innerHTML = "Ver Mais";
        }

        // Fechar o card ao clicar no overlay
        overlay.addEventListener('click', function() {
            card.classList.remove('expanded');
            overlay.style.display = 'none';
            button.innerHTML = "Ver Mais";
        });
    });
});

