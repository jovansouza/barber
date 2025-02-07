import { renderAgendamentos } from './modules/agendamentos.js';
import { renderClientes } from './modules/clientes.js';
import { renderServicos } from './modules/servicos.js';
import { renderFinanceiro } from './modules/financeiro.js';

const contentDiv = document.getElementById('content');
const navLinks = document.querySelectorAll('nav a');

// Função para carregar o conteúdo da página
function loadPage(page) {
  contentDiv.innerHTML = ''; // Limpa o conteúdo existente

  switch (page) {
    case 'agendamentos':
      renderAgendamentos(contentDiv);
      break;
    case 'clientes':
      renderClientes(contentDiv);
      break;
    case 'servicos':
      renderServicos(contentDiv);
      break;
    case 'financeiro':
      renderFinanceiro(contentDiv);
      break;
    default:
      contentDiv.innerHTML = '<h2>Página não encontrada</h2>';
  }
}

// Adiciona um event listener para cada link do menu
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Impede o link de recarregar a página
    const page = this.dataset.page; // Pega o valor do atributo data-page
    loadPage(page); // Carrega a página correspondente
  });
});

// Carrega a página inicial (Agendamentos, por exemplo)
loadPage('agendamentos');