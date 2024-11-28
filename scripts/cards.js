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