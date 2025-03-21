function simularEmprestimo() {
    // Taxa de juros fixa (3,04% ao mês)
    const taxaJuros = 0.0304;

    // Obter valores dos campos
    const valorMaximoParcela = parseFloat(document.getElementById('valor-maximo-parcela').value);
    const valorNecessario = parseFloat(document.getElementById('valor-necessario').value);
    const quantidadeParcelas = parseInt(document.getElementById('quantidade-parcelas').value);

    // Verificar se os campos têm valores válidos
    if (isNaN(valorMaximoParcela) || isNaN(valorNecessario) || isNaN(quantidadeParcelas) || valorMaximoParcela <= 0 || valorNecessario <= 0 || quantidadeParcelas <= 0) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    // Fórmula para calcular a parcela com juros compostos (empréstimo com parcelas fixas)
    const i = taxaJuros; // taxa de juros mensal
    const n = quantidadeParcelas; // número de parcelas
    const valorEmprestimo = valorNecessario; // valor do empréstimo

    // Calculando a parcela
    const parcela = (valorEmprestimo * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);

    // Calculando o valor total a ser pago
    const valorTotalPago = parcela * n;

    // Verificar se a parcela excede o valor máximo permitido
    if (parcela > valorMaximoParcela) {
        // Calcular o número mínimo de parcelas necessário
        const parcelasMinimas = Math.ceil(valorEmprestimo * (1 + i) / valorMaximoParcela);
        alert(`O valor da parcela excede o valor máximo de parcela permitido! Tente aumentar o número de parcelas para pelo menos ${parcelasMinimas}.`);
    } else {
        // Exibir resultado
        document.getElementById('resultado').style.display = 'block';
        document.getElementById('resumo-emprestimo').innerText = 
            `Valor do empréstimo: R$ ${valorNecessario.toFixed(2)} | Quantidade de parcelas: ${quantidadeParcelas} | Valor da parcela: R$ ${parcela.toFixed(2)}`;
        document.getElementById('detalhes-emprestimo').innerText = 
            `Valor total a ser pago: R$ ${valorTotalPago.toFixed(2)} | Taxa de referência: ${(taxaJuros * 100).toFixed(2)}% ao mês`;
    }
}
