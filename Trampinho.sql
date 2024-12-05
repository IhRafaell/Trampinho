create database Trampinho;
use Trampinho;
create table usuarios (
id int auto_increment primary key,
nome varchar(100) not null,
servico VARCHAR(100) NOT NULL,
localizacao VARCHAR(255) NOT NULL,
preco VARCHAR(50),
telefone VARCHAR(20),
descricao TEXT,
imagem VARCHAR(255)
);
INSERT INTO usuarios (nome, servico, localizacao, preco, telefone, descricao, imagem)
VALUES
('João Marcos', 'Fotógrafo', 'Benedito Bentes - Maceió', 'R$100,00 - R$150,00 / álbum', '(82) 99999-9999', 'Fotógrafo profissional com experiência em eventos e ensaios.', 'users-images/joao-marcos.png');