document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelector(".cards");

    // Carregar os usuários
    async function loadUsers() {
        try {
            const response = await fetch("http://localhost:3000/usuarios");
            const usuarios = await response.json();

            // Renderizar os cards dinamicamente
            cards.innerHTML = usuarios
                .map(
                    (user) => `
                    <div class="card">
                        <img src="${user.imagem}" alt="${user.nome}">
                        <h1>${user.servico}</h1>
                        <span>${user.nome}</span>
                        <span>${user.localizacao}</span>
                        <span>${user.preco}</span>
                        <div class="mais-informações">
                            <p>Telefone: ${user.telefone}</p>
                            <p>Descrição: ${user.descricao}</p>
                        </div>
                        <button class="toggle-btn">
                            <span>Ver Mais</span>
                        </button>
                    </div>
                `
                )
                .join("");

            // Vincular os eventos após os elementos serem adicionados
            setupToggleButtons();
        } catch (err) {
            console.error("Erro ao carregar os usuários:", err);
        }
    }

    // Configurar os botões de alternância para os cards
    function setupToggleButtons() {
        document.querySelectorAll(".toggle-btn").forEach((button) => {
            button.addEventListener("click", function () {
                const card = this.closest(".card"); // Pega o elemento pai mais próximo com a classe 'card'
                const overlay = document.querySelector(".overlay");

                // Alternar a classe expanded no card
                card.classList.toggle("expanded");

                // Exibir ou ocultar o overlay
                if (card.classList.contains("expanded")) {
                    overlay.style.display = "block";
                    this.innerHTML = "Ver Menos";
                } else {
                    overlay.style.display = "none";
                    this.innerHTML = "Ver Mais";
                }

                // Fechar o card ao clicar no overlay
                overlay.addEventListener("click", function () {
                    card.classList.remove("expanded");
                    overlay.style.display = "none";
                    button.innerHTML = "Ver Mais";
                });
            });
        });
    }

    loadUsers();
});
