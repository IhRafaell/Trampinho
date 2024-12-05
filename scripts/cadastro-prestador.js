document.getElementById('cadastroForm').addEventListener('submit', async function(event) {
    event.preventDefault();  // Impede o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const servico = document.getElementById('servico').value;
    const localizacao = document.getElementById('localizacao').value;
    const preco = document.getElementById('preco').value;
    const telefone = document.getElementById('telefone').value;
    const descricao = document.getElementById('descricao').value;
    const imagem = document.getElementById('imagem').value;

    const prestadorData = {
        nome,
        servico,
        localizacao,
        preco,
        telefone,
        descricao,
        imagem
    };

    try {
        const response = await fetch('http://localhost:3000/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(prestadorData)
        });

        if (response.ok) {
            alert('Prestador cadastrado com sucesso!');
            // Você pode redirecionar ou limpar o formulário após o cadastro
            document.getElementById('cadastroForm').reset();
        } else {
            const errorData = await response.json();
            alert(`Erro: ${errorData.message}`);
        }
    } catch (error) {
        console.error('Erro ao cadastrar prestador:', error);
        alert('Erro ao cadastrar prestador.');
    }
});
