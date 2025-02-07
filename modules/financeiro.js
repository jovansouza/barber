export function renderFinanceiro(parent) {
  const financeiroPage = document.createElement('div');
  financeiroPage.classList.add('financeiro-page');

  financeiroPage.innerHTML = `
    <h2>Financeiro</h2>
    <p>Acompanhe suas finanças aqui.</p>

    <h3>Novo Registro</h3>
    <form id="novo-registro-form">
      <label for="tipo">Tipo:</label>
      <select id="tipo" name="tipo">
        <option value="entrada">Entrada</option>
        <option value="saida">Saída</option>
      </select><br><br>

      <label for="descricao">Descrição:</label>
      <input type="text" id="descricao" name="descricao" required><br><br>

      <label for="valor">Valor:</label>
      <input type="number" id="valor" name="valor" required><br><br>

      <label for="data">Data:</label>
      <input type="date" id="data" name="data" required><br><br>

      <input type="submit" value="Adicionar Registro">
    </form>

    <h3>Lista de Registros</h3>
    <table id="tabela-financeiro">
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        <!-- Os registros financeiros serão adicionados aqui via JavaScript -->
      </tbody>
    </table>

    <h3>Resumo Financeiro</h3>
    <div id="resumo-financeiro">
      <p>Total de Entradas: <span id="total-entradas">0</span></p>
      <p>Total de Saídas: <span id="total-saidas">0</span></p>
      <p>Saldo Total: <span id="saldo-total">0</span></p>
    </div>
  `;

  parent.appendChild(financeiroPage);

  // Adicionar funcionalidade de formulário aqui (exemplo básico)
  const form = financeiroPage.querySelector('#novo-registro-form');
  const tabela = financeiroPage.querySelector('#tabela-financeiro tbody');
  const totalEntradas = financeiroPage.querySelector('#total-entradas');
  const totalSaidas = financeiroPage.querySelector('#total-saidas');
  const saldoTotal = financeiroPage.querySelector('#saldo-total');

  let entradas = 0;
  let saidas = 0;

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const tipo = form.tipo.value;
    const descricao = form.descricao.value;
    const valor = parseFloat(form.valor.value);
    const data = form.data.value;

    const newRow = tabela.insertRow();
    newRow.innerHTML = `
      <td>${tipo}</td>
      <td>${descricao}</td>
      <td>${valor}</td>
      <td>${data}</td>
    `;

    if (tipo === 'entrada') {
      entradas += valor;
    } else {
      saidas += valor;
    }

    totalEntradas.textContent = entradas.toFixed(2);
    totalSaidas.textContent = saidas.toFixed(2);
    saldoTotal.textContent = (entradas - saidas).toFixed(2);

    // Limpar o formulário
    form.reset();
  });
}