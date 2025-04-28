import { BASE_URL } from './config.js';

// Função principal
export async function cadastrar() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem');

    try {
        const resposta = await fetch(`${BASE_URL}/api/cadastro`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome, email }),
        });

        const data = await resposta.json();
        
        if (resposta.ok) {
            mensagem.innerText = 'Usuário cadastrado com sucesso!';
            mensagem.style.color = 'green';
        } else {
            mensagem.innerText = 'Erro: ' + (data.erro || 'Não foi possível cadastrar.');
            mensagem.style.color = 'red';
        }
    } catch (err) {
        mensagem.innerText = 'Erro de conexão com a API.';
        mensagem.style.color = 'red';
        console.error(err);
    }
}

// Tornando a função disponível globalmente
window.cadastrar = cadastrar;