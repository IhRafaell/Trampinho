const searchInput = document.getElementById('searchInput');
const cards = document.getElementById('cards');

// Função para renderizar os cards com base nos prestadores
function renderCards(prestadores) {
    cardsContainer.innerHTML = ''; // Limpa os cards existentes

    prestadores.forEach(prestador => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${prestador.nome}</h3>
            <p>Serviço: ${prestador.servico}</p>
            <p>Localização: ${prestador.localizacao}</p>
            <p>Preço: R$ ${prestador.preco}</p>
            <p>${prestador.descricao}</p>
            <img src="${prestador.imagem}" alt="Imagem do prestador" width="100" height="100">
        `;
        cardsContainer.appendChild(card);
    });
}

// Função para buscar os prestadores da API
async function fetchPrestadores() {
    try {
        const response = await fetch('http://localhost:3000/usuarios');
        const prestadores = await response.json();
        renderCards(prestadores);
    } catch (error) {
        console.error('Erro ao buscar prestadores:', error);
    }
}

// Função para filtrar os cards com base no texto da pesquisa
function filterCards() {
    const searchTerm = searchInput.value.toLowerCase();

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const cardText = card.innerText.toLowerCase();
        if (cardText.includes(searchTerm)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Evento de input na barra de pesquisa
searchInput.addEventListener('input', filterCards);

// Buscar e renderizar prestadores quando a página carregar
fetchPrestadores();
