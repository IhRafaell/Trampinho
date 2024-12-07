const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configuração do banco de dados
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Trampinho",
});

// Teste de conexão
db.connect((err) => {
    if (err) {
        console.error("Erro ao conectar ao banco de dados:", err);
    } else {
        console.log("Conectado ao banco de dados.");
    }
});

// Rotas
app.get("/usuarios", (req, res) => {
    const query = "SELECT * FROM usuarios";
    db.query(query, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

app.post("/usuarios", (req, res) => {
    const { nome, servico, localizacao, preco, telefone, descricao, imagem } = req.body;
    // Validação: verificar se todos os campos foram fornecidos
    if (!nome || !servico || !localizacao || !preco || !telefone || !descricao || !imagem) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios." });
    }
    const query = "INSERT INTO usuarios (nome, servico, localizacao, preco, telefone, descricao, imagem) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(query, [nome, servico, localizacao, preco, telefone, descricao, imagem], (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({ id: results.insertId });
    });
});

app.delete("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    const query = "DELETE FROM usuarios WHERE id = ?";
    db.query(query, [id], (err) => {
        if (err) return res.status(500).send(err);
        res.sendStatus(204);
    });
});

// Iniciar o servidor
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
