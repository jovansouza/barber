export function renderClientes(parent) {
  const clientesPage = document.createElement('div');
  clientesPage.classList.add('clientes-page');

  clientesPage.innerHTML = `
    <h2>Clientes</h2>
    <p>Gerencie seus clientes aqui.</p>

    <h3>Novo Cliente</h3>
    <form id="novo-cliente-form">
      <label for="nome">Nome:</label>
      <input type="text" id="nome" name="nome" required><br><br>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email"><br><br>

      <label for="telefone">Telefone:</label>
      <input type="text" id="telefone" name="telefone"><br><br>

      <input type="submit" value="Adicionar Cliente">
    </form>

    <h3>Lista de Clientes</h3>
    <table id="tabela-clientes">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Telefone</th>
        </tr>
      </thead>
      <tbody>
        <!-- Os clientes serão adicionados aqui via JavaScript -->
      </tbody>
    </table>
  `;

  parent.appendChild(clientesPage);

  // Adicionar funcionalidade de formulário aqui (exemplo básico)
  const form = clientesPage.querySelector('#novo-cliente-form');
  const tabela = clientesPage.querySelector('#tabela-clientes tbody');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = form.nome.value;
    const email = form.email.value;
    const telefone = form.telefone.value;

    const newRow = tabela.insertRow();
    newRow.innerHTML = `
      <td>${nome}</td>
      <td>${email}</td>
      <td>${telefone}</td>
    `;

    // Limpar o formulário
    form.reset();
  });
}