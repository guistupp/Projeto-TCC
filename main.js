document.addEventListener('DOMContentLoaded', () => {
    const formCadastroSafra = document.getElementById('form-cadastro-safra');
    const listaHistorico = document.getElementById('lista-historico');
    const formCadastroTrato = document.getElementById('form-cadastro-trato');
    const formCadastroCustos = document.getElementById('form-cadastro-custos');
    const btnGerarRelatorio = document.getElementById('btn-gerar-relatorio');
    const conteudoRelatorio = document.getElementById('conteudo-relatorio');
    const relatorioCompleto = document.getElementById('relatorio-completo');

    let historicoSafras = [];
    let tratosCulturais = [];
    let custos = [];

    formCadastroSafra.addEventListener('submit', (e) => {
        e.preventDefault();
        const ano = document.getElementById('ano').value;
        const variedade = document.getElementById('variedade').value;
        const quantidade = document.getElementById('quantidade').value;
        const estimativa = document.getElementById('estimativa').value;

        const safra = {
            ano,
            variedade,
            quantidade,
            estimativa
        };

        historicoSafras.push(safra);
        adicionarHistorico(safra);
        formCadastroSafra.reset();
    });

    formCadastroTrato.addEventListener('submit', (e) => {
        e.preventDefault();
        const atividade = document.getElementById('atividade').value;
        const dataInicio = document.getElementById('data-inicio').value;
        const dataFim = document.getElementById('data-fim').value;
        const relatorio = document.getElementById('relatorio').value;

        const trato = {
            atividade,
            dataInicio,
            dataFim,
            relatorio
        };

        tratosCulturais.push(trato);
        console.log('Trato Cultural Cadastrado:', trato);
        formCadastroTrato.reset();
    });

    formCadastroCustos.addEventListener('submit', (e) => {
        e.preventDefault();
        const descricao = document.getElementById('descricao').value;
        const valor = document.getElementById('valor').value;

        const custo = {
            descricao,
            valor
        };

        custos.push(custo);
        console.log('Custo Cadastrado:', custo);
        formCadastroCustos.reset();
    });

    btnGerarRelatorio.addEventListener('click', () => {
        gerarRelatorioCompleto();
        relatorioCompleto.style.display = 'block';
    });

    function adicionarHistorico(safra) {
        const div = document.createElement('div');
        div.classList.add('safra-item');
        div.innerHTML = `
            <p><strong>Ano:</strong> ${safra.ano}</p>
            <p><strong>Variedade:</strong> ${safra.variedade}</p>
            <p><strong>Quantidade:</strong> ${safra.quantidade}</p>
            <p><strong>Estimativa:</strong> ${safra.estimativa}</p>
        `;
        listaHistorico.appendChild(div);
    }

    function gerarRelatorioCompleto() {
        conteudoRelatorio.innerHTML = '';

        const historicoDiv = document.createElement('div');
        historicoDiv.innerHTML = '<h3>Histórico de Safras</h3>';
        historicoSafras.forEach(safra => {
            const safraDiv = document.createElement('div');
            safraDiv.innerHTML = `
                <p><strong>Ano:</strong> ${safra.ano}</p>
                <p><strong>Variedade:</strong> ${safra.variedade}</p>
                <p><strong>Quantidade:</strong> ${safra.quantidade}</p>
                <p><strong>Estimativa:</strong> ${safra.estimativa}</p>
            `;
            historicoDiv.appendChild(safraDiv);
        });

        const tratosDiv = document.createElement('div');
        tratosDiv.innerHTML = '<h3>Tratos Culturais</h3>';
        tratosCulturais.forEach(trato => {
            const tratoDiv = document.createElement('div');
            tratoDiv.innerHTML = `
                <p><strong>Atividade:</strong> ${trato.atividade}</p>
                <p><strong>Data de Início:</strong> ${trato.dataInicio}</p>
                <p><strong>Data de Fim:</strong> ${trato.dataFim}</p>
                <p><strong>Relatório:</strong> ${trato.relatorio}</p>
            `;
            tratosDiv.appendChild(tratoDiv);
        });

        const custosDiv = document.createElement('div');
        custosDiv.innerHTML = '<h3>Custos</h3>';
        custos.forEach(custo => {
            const custoDiv = document.createElement('div');
            custoDiv.innerHTML = `
                <p><strong>Descrição:</strong> ${custo.descricao}</p>
                <p><strong>Valor:</strong> ${custo.valor}</p>
            `;
            custosDiv.appendChild(custoDiv);
        });

        conteudoRelatorio.appendChild(historicoDiv);
        conteudoRelatorio.appendChild(tratosDiv);
        conteudoRelatorio.appendChild(custosDiv);
    }
});