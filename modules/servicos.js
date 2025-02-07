export function renderServicos(parent) {
  const servicosPage = document.createElement('div');
  servicosPage.classList.add('servicos-page');

  servicosPage.innerHTML = `
    <h2>Serviços</h2>
    <p>Gerencie seus serviços aqui.</p>

    <h3>Novo Serviço</h3>
    <form id="novo-servico-form">
      <label for="nome">Nome do Serviço:</label>
      <input type="text" id="nome" name="nome" required><br><br>

      <label for="preco">Preço:</label>
      <input type="number" id="preco" name="preco" required><br><br>

      <label for="descricao">Descrição:</label>
      <textarea id="descricao" name="descricao" rows="4" cols="50"></textarea><br><br>

      <input type="submit" value="Adicionar Serviço">
    </form>

    <h3>Lista de Serviços</h3>
    <table id="tabela-servicos">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Preço</th>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
        <!-- Os serviços serão adicionados aqui via JavaScript -->
      </tbody>
    </table>
  `;

  parent.appendChild(servicosPage);

  // Adicionar funcionalidade de formulário aqui (exemplo básico)
  const form = servicosPage.querySelector('#novo-servico-form');
  const tabela = servicosPage.querySelector('#tabela-servicos tbody');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = form.nome.value;
    const preco = form.preco.value;
    const descricao = form.descricao.value;

    const newRow = tabela.insertRow();
    newRow.innerHTML = `
      <td>${nome}</td>
      <td>${preco}</td>
      <td>${descricao}</td>
    `;

    // Limpar o formulário
    form.reset();
  });
}