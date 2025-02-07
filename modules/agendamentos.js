export function renderAgendamentos(parent) {
  const agendamentosPage = document.createElement('div');
  agendamentosPage.classList.add('agendamentos-page');

  agendamentosPage.innerHTML = `
    <h2>Agendamentos</h2>
    <p>Gerencie seus agendamentos aqui.</p>

    <h3>Novo Agendamento</h3>
    <form id="novo-agendamento-form">
      <label for="cliente">Cliente:</label>
      <input type="text" id="cliente" name="cliente" required><br><br>

      <label for="servico">Serviço:</label>
      <input type="text" id="servico" name="servico" required><br><br>

      <label for="data">Data:</label>
      <input type="date" id="data" name="data" required><br><br>

      <label for="hora">Hora:</label>
      <input type="text" id="hora" name="hora" required><br><br>

      <input type="submit" value="Criar Agendamento">
    </form>

    <h3>Lista de Agendamentos</h3>
    <table id="tabela-agendamentos">
      <thead>
        <tr>
          <th>Cliente</th>
          <th>Serviço</th>
          <th>Data</th>
          <th>Hora</th>
        </tr>
      </thead>
      <tbody>
        <!-- Os agendamentos serão adicionados aqui via JavaScript -->
      </tbody>
    </table>
  `;

  parent.appendChild(agendamentosPage);

  // Adicionar funcionalidade de formulário aqui (exemplo básico)
  const form = agendamentosPage.querySelector('#novo-agendamento-form');
  const tabela = agendamentosPage.querySelector('#tabela-agendamentos tbody');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const cliente = form.cliente.value;
    const servico = form.servico.value;
    const data = form.data.value;
    const hora = form.hora.value;

    const newRow = tabela.insertRow();
    newRow.innerHTML = `
      <td>${cliente}</td>
      <td>${servico}</td>
      <td>${data}</td>
      <td>${hora}</td>
    `;

    // Limpar o formulário
    form.reset();
  });
}