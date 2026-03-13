// 1. Importar Express
const express = require('express');

// 2. Criar aplicação
const app = express();

// 3. Definir porta
const PORT = 80;

// 4. Middleware para JSON
app.use(express.json());

// ===========================
// SIMLUDAOR - BANCO DE DADOS
// ===========================
let produtos = []
let proximoId = 1

// ===================
// ENDPOINTS INICIAIS
// ===================

// Endpoint Principal 
app.get('/', (req, res) => {
    res.json({
        mensagem: '🎉 Minha primeira API funcionando!',
        status: 'sucesso',
        timestamp: new Date().toISOString()
    });
});

// Informações da API
app.get('/info', (req, res) => {
    res.json({
        nome: 'Minha API REST',
        versao: '1.0.0',
        autor: 'Gabriel Patriota'
    });
});

// ======================
// MÉTODOS PARA PRODUTOS
// ======================

// LISTR PRODUTOS 
app.get('/produtos', (req, res) => {
    res.json(produtos);
});

// BUSCAR PRODUTOS POR ID
app.get('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({
            erro: 'Produto não encontrado'
        });
    }

    res.json(produto);
}); 

// CRIAR PRODUTO
app.post('/produtos', (req, res) => {

    const { nome, preco } = req.body;

    if (!nome || !preco) {
        return res.status(400).json({
            erro: 'Nome e preço são obrigatórios'
        });
    }

    const novoProduto = {
        id: proximoId++,
        nome,
        preco
    };

    produtos.push(novoProduto);

    res.status(201).json(novoProduto);
});

// ATUALIZAR PRODUTO
app.put('/produtos/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const { nome, preco } = req.body;

    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({
            erro: 'Produto não encontrado'
        });
    }

    produto.nome = nome;
    produto.preco = preco;

    res.json(produto);
});

//DELETAR PRODUTO
app.delete('/produtos/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const index = produtos.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            erro: 'Produto não encontrado'
        });
    }

    produtos.splice(index, 1);

    res.json({
        mensagem: 'Produto removido com sucesso'
    });
});


// =================
// INICIAR SERVIDOR
// =================
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
