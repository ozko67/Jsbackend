const express = require('express');
const cors = require('cors');
const supabase = require('./supabase'); // Importa a conexão com  Supabase

const app = express();
const port = process.env.PORT || 3000;

//Middleware essenciais 
app.use(cors());//Permite que o frontend acesse este backend sem erros de CORS
app.use(express.json());// Permite que o Express entenda requisições com corpo em JSON

//Passo 1 mémoria ram do servidor
let produtosEmMemoria = [
    {id: 1, nome: 'Teclado mecânico', preco: 150.00},
    {id: 2, nome: 'Mouse gamer 3200 DPI', preco: 85.50}
];

//Rota Get
app.get('/produtos', async (req, res) => {
    console.log ('[GET /produtos] Enviando produtos em memória...');
    // res.json(produtosEmMemoria);
    const {data, error} = await supabase.from('produtos').select('*').order('id', {ascending: true});
    if (error) {
        return res.status(500).json({ error: error.message });
         };
        });

//Rota Post
app.post('/produtos', (req, res) => {
    const { nome, preco } = req.body;

    if(!nome || !preco) {
        return res.status(400).json({ error: 'Nome e preço são obrigatórios.' });
    }

    const novoProduto = {
        id:Date.now(), // Gera um ID único baseado no timestamp atual
        nome,
        preco: parseFloat(preco) // Converte o preço para número decimal
    };

    produtosEmMemoria.push(novoProduto);
    res.status(201).json(novoProduto);
});

app.put('/produtos/:id', (req, res) => {
    const {id} = req.params;
    const index = produtosEmMemoria.findIndex(p => p.id === parseInt(id));
    const { nome, preco } = req.body;

    if(!nome || !preco) {
        return res.status(400).json({ error: 'Nome e preço são obrigatórios.' });
    }

    const novoProduto = {
        id, // Gera um ID único baseado no timestamp atual
        nome,
        preco: parseFloat(preco) // Converte o preço para número decimal
    };

    produtosEmMemoria[index] = novoProduto;
    res.status(201).json(novoProduto);
})

app.delete('/produtos/:id', (req, res) => {
    const {id} = req.params;
    const index = produtosEmMemoria.findIndex(p => p.id === parseInt(id));

    produtosEmMemoria.splice(index,1);
    res.status(201).json({
        mensagem: "Deletado com sucesso"
    });
})

//Listen iniciar o servidor
app.listen(port, () => {
    console.log ('================================');
    console.log (`Server Back-End rodando em http://localhost:${port}`);
    console.log ('Rota de produtos: http://localhost:3000/produtos');
    console.log ('Status:Modo memória RAM do atiivo');
    console.log ('===============================')
});


