// Endereço da nossa API Express (Back-End)
const API_URL = 'http://localhost:3000/produtos';

// Elementos da tela (DOM)
const formProduto = document.getElementById('form-produto');
const inputNome = document.getElementById('nome');
const inputPreco = document.getElementById('preco');
const listaProdutos = document.getElementById('lista-produtos');
const statusConexao = document.getElementById('status-conexao');

// 1. Função para buscar os produtos no Back-End (GET)
async function carregarProdutos() {
  try {
    statusConexao.style.display = 'none';

    const resposta = await fetch(API_URL);
    if (!resposta.ok) throw new Error('Falha ao comunicar com o servidor');

    const produtos = await resposta.json();

    // Limpa a lista antes de desenhar os itens
    listaProdutos.innerHTML = '';

    if (produtos.length === 0) {
      listaProdutos.innerHTML = '<p class="lista-vazia">Nenhum produto cadastrado ainda.</p>';
      return;
    }

    // Desenha cada produto na tela
    produtos.forEach(produto => {
      const card = document.createElement('div');
      card.className = 'item-produto';
      card.innerHTML = `
        <div>
          <div class="nome">${produto.nome}</div>
          <div class="preco">R$ ${Number(produto.preco).toFixed(2)}</div>
        </div>
        <div class="id-tag">ID: ${produto.id}</div>
      `;
      listaProdutos.appendChild(card);
    });

  } catch (erro) {
    console.error('Erro ao buscar produtos:', erro);
    statusConexao.textContent = '⚠️ Servidor Back-End offline! Certifique-se de que ele está rodando em http://localhost:3000';
    statusConexao.className = 'status erro';
    statusConexao.style.display = 'block';
  }
}

// 2. Função para enviar um novo produto ao Back-End (POST)
async function cadastrarProduto(event) {
  event.preventDefault(); // Impede o recarregamento automático da página

  const novoProduto = {
    nome: inputNome.value.trim(),
    preco: parseFloat(inputPreco.value)
  };

  try {
    const resposta = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(novoProduto)
    });

    if (!resposta.ok) throw new Error('Não foi possível cadastrar');

    // Limpa os campos do formulário
    inputNome.value = '';
    inputPreco.value = '';
    inputNome.focus();

    // Atualiza a lista na tela
    await carregarProdutos();

  } catch (erro) {
    alert('Erro ao cadastrar produto. Verifique se o Back-End está ligado.');
    console.error(erro);
  }
}

// Eventos
formProduto.addEventListener('submit', cadastrarProduto);
window.addEventListener('DOMContentLoaded', carregarProdutos);