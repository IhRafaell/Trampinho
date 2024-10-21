function LoginPage(){
    window.location.href = "./login.html";
}

function CadastroPage(){
    window.location.href = "./cadastro.html";
}

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

// Seleciona a barra de pesquisa e os cards
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.card');

// Adiciona um ouvinte de evento para a entrada na barra de pesquisa
searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase(); // Pega o valor digitado e transforma em minúsculas

    cards.forEach(card => {
        const cardText = card.innerText.toLowerCase(); // Pega o texto do card e transforma em minúsculas

        // Verifica se o texto do card contém o termo de pesquisa
        if (cardText.includes(searchTerm)) {
            card.classList.remove('hidden'); // Mostra o card
        } else {
            card.classList.add('hidden'); // Oculta o card
        }
    });
});