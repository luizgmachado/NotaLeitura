// Lista de notas de leiturista
const notasDeLeitura = [
  { numero: '1101', status: 'Com leitura', detalhe: 'LEITURA DIFICULTADA POR CÃES/ANIMAIS' },
  { numero: '1102', status: 'Com leitura', detalhe: 'MEDIDOR OBSTRUÍDO COM POSSIBILIDADE DE LEITURA' },
  { numero: '1103', status: 'Com leitura', detalhe: 'FALTA PLACA/IDENTIF. MEDIDOR/QUADRO/APTO. /PRÉDIO' },
  { numero: '1104', status: 'Com leitura', detalhe: 'MEDIÇÃO/QUADRO EM MAL ESTADO' },
  { numero: '1105', status: 'Com leitura', detalhe: 'FALTA ILUMINAÇÃO/LIMPEZA' },
  { numero: '1110', status: 'Com leitura', detalhe: 'TAMPA ACRÍLICA/VISOR DA CAIXA EMBAÇADO' },
  { numero: '1107', status: 'Com leitura', detalhe: 'MED LOCAL IMPRÓPRIO PERIGOSO/CX MED ALTURA ANORMAL' },
  { numero: '1120', status: 'Com leitura', detalhe: 'SUSPEITA DE CRIADOURO DA DENGUE' },
  { numero: '1201', status: 'Com leitura', detalhe: 'MUDANÇA NOME LOGRADOURO' },
  { numero: '1202', status: 'Com leitura', detalhe: 'MUDANÇA NUMERAÇÃO INTERNA, APTO OU VILA DE CASAS' },
  { numero: '1203', status: 'Com leitura', detalhe: 'INSTALAÇÃO FORA DE SEQUÊNCIA' },
  { numero: '1204', status: 'Com leitura', detalhe: 'Nº MEDIDOR/CONSTANTE DIFERENTE SEM SUBSTITUIÇÃO' },
  { numero: '1205', status: 'Com leitura', detalhe: 'MEDIDOR SUBSTITUÍDO' },
  { numero: '1206', status: 'Com leitura', detalhe: 'CÓDIGO DE CLASSE/RAMO DE NEGÓCIO INADEQUADO' },
  { numero: '1207', status: 'Com leitura', detalhe: 'CLIENTE NÃO CADASTRADO/NOVA LIGAÇÃO' },
  { numero: '1208', status: 'Com leitura', detalhe: 'SEQUÊNCIAMENTO DE ROTAS' },
  { numero: '1231', status: 'Com leitura', detalhe: 'INVERSÃO DE MEDIDORES ENTRE INSTALAÇÕES' },
  { numero: '1250', status: 'Com leitura', detalhe: 'INCLUSÃO/ALTERAÇÃO LOCAL INSTALAÇÃO DO EQUIPAMENTO' },
  { numero: '1300', status: 'Com leitura', detalhe: 'REGISTRADOR NÃO CONSTA NO SGL - COM LEITURA' },
  { numero: '1302', status: 'Com leitura', detalhe: 'RAMAL AÉREO COM OBSTÁCULOS' },
  { numero: '1303', status: 'Com leitura', detalhe: 'FORNECIMENTO A TERCEIROS/INTERLIGAÇÃO' },
  { numero: '1304', status: 'Com leitura', detalhe: 'CONSUMO EM INSTALAÇÃO DESLIGADA' },
  { numero: '1305', status: 'Com leitura', detalhe: 'AUTO RELIG. S/CONTRATO LIGADO SISTEMA' },
  { numero: '1326', status: 'Com leitura', detalhe: 'VESPEIRO NA MEDIÇÃO' },
  { numero: '1327', status: 'Com leitura', detalhe: 'VIDRO VISOR QUEBRADO' },
  { numero: '1329', status: 'Com leitura', detalhe: 'MEDIDOR EMBAÇADO' },
  { numero: '1343', status: 'Com leitura', detalhe: 'ILUMINAÇÃO PÚBLICA ACESA DURANTE O DIA' },
  { numero: '1349', status: 'Com leitura', detalhe: 'INSTALAÇÃO COM LIGAÇÃO PROVISÓRIA' },
  { numero: '1351', status: 'Com leitura', detalhe: 'SUSPEITA DE MEDIDOR COM PONTEIROS DESREGULADOS' },
  { numero: '1364', status: 'Com leitura', detalhe: 'VIDRO VISOR DA CAIXA EMBAÇADO' },
  { numero: '1373', status: 'Com leitura', detalhe: 'INSTALAÇÃO INCENDIADA/DEMOLIDA' },
  { numero: '1390', status: 'Com leitura', detalhe: 'MED POSICIONADO INADEQUADAMENTE NA CAIXA' },
  { numero: '1501', status: 'Com leitura', detalhe: 'MEDIDOR SEM CAIXA/TAMPA' },
  { numero: '1502', status: 'Com leitura', detalhe: 'CAIXA DE MEDIÇÃO SEM SELO' },
  { numero: '1503', status: 'Com leitura', detalhe: 'SUSPEITA DE IRREGULARIDADE' },
  { numero: '1504', status: 'Com leitura', detalhe: 'INSTALAÇÃO LIGADA DIRETA' },
  { numero: '1505', status: 'Com leitura', detalhe: 'SUSPEITA MED DEFEITUOSO/AVARIADO/MANIPULADO/PARADO' },
  { numero: '1506', status: 'Com leitura', detalhe: 'MEDIDOR COM DISCO GIRANDO AO CONTRÁRIO/DESMARCAÇÃO' },
  { numero: '1544', status: 'Com leitura', detalhe: 'NÃO IDENTIFICADO MOTIVO DO CONSUMO ZERO' },
  { numero: '1546', status: 'Com leitura', detalhe: 'CONSUMO INCOMPATÍVEL COM O IMÓVEL' },
  { numero: '1560', status: 'Com leitura', detalhe: 'DENÚNCIA DE UMA LIGAÇÃO CLANDESTINA' },
  { numero: '1562', status: 'Com leitura', detalhe: 'INSTALAÇÃO DESLIGADA SEM CONSUMO' },
  { numero: '1570', status: 'Com leitura', detalhe: 'DENÚNCIA DE VÁRIAS LIGAÇÕES CLANDESTINAS' },
  { numero: '1800', status: 'Com leitura', detalhe: 'LEIT PREVISTA NO CALENDÁRIO REAL-LEITURA NORMAL' },
  { numero: '1801', status: 'Com leitura', detalhe: 'INSTALAÇÃO DESABITADA/VAZIA' },
  { numero: '1802', status: 'Com leitura', detalhe: 'LEITURA ATUAL MENOR QUE ANTERIOR SEM VIRADA' },
  { numero: '1818', status: 'Com leitura', detalhe: 'LEITURA DE TELEMETRIA' },
  { numero: '1819', status: 'Com leitura', detalhe: 'LEITURA DE TELEMETRIA' },
  { numero: '1828', status: 'Com leitura', detalhe: 'LEITURA CONFERIDA E CONFIRMADA' },
  { numero: '1834', status: 'Com leitura', detalhe: 'LEITURA INFORMADA PELO CLIENTE' },
  { numero: '1835', status: 'Com leitura', detalhe: 'PONTALETE UTILIZADO PARA OUTROS FINS' },
  { numero: '1837', status: 'Com leitura', detalhe: 'VIRADA DE MEDIDOR' },
  { numero: '1838', status: 'Com leitura', detalhe: 'ETIQUETA DESCOLANDO/SEM ETIQUETA' },
  { numero: '1840', status: 'Com leitura', detalhe: 'LEITURA LANÇADA PELO FATURISTA' },
  { numero: '1841', status: 'Com leitura', detalhe: 'INSTALAÇÃO DESATIVADA SEM MEDIÇÃO' },
  { numero: '1847', status: 'Com leitura', detalhe: 'LEITURA INFORMADA FORMULÁRIO AUTO LEITURA RURAL' },
  { numero: '1854', status: 'Com leitura', detalhe: 'LEITURA ORIGINADA DE NOTA DE SERVIÇO' },
  { numero: '1855', status: 'Com leitura', detalhe: 'LEITURA ORIGINADA DE NS UTILIZADA PARA CÁLCULO' },
  { numero: '1879', status: 'Com leitura', detalhe: 'LEIT N/PREVISTA CALEND. EXEC EM DESACORDO CALEND.' },
  { numero: '1897', status: 'Com leitura', detalhe: 'LEITURA COLETADA VIA APP DE MENSAGEM' },
  { numero: '1898', status: 'Com leitura', detalhe: 'LEITURA INFORMADA CLIENTE FORMULÁRIO ESPECÍFICO' },
  { numero: '1899', status: 'Com leitura', detalhe: 'LEITURA CONFIRMADA EM CAMPO ATRAVÉS DE RELEITURA' },
  { numero: '1901', status: 'Com leitura', detalhe: 'CAIXA MAL POSICIONADA NO POSTE/CPREDE' },
  { numero: '1902', status: 'Com leitura', detalhe: 'DEFEITO NA TAMPA MEDIDOR NO POSTE/CPREDE' },
  { numero: '1903', status: 'Com leitura', detalhe: 'DEFEITO NA CHAMINÉ / MEDIDOR NO POSTE/CPREDE' },
  { numero: '1904', status: 'Com leitura', detalhe: 'JANELA ACESSO/CHAPINHA LIDECOR SEM SELO/CPREDE' },
  { numero: '1905', status: 'Com leitura', detalhe: 'SEM ETIQUETAS "PERIGO" OU "CONCESSIONÁRIA"/CPREDE' },
  { numero: '1906', status: 'Com leitura', detalhe: 'PRENSA CABO SOLTA MEDIDOR NO POSTE/CPREDE' },
  { numero: '1907', status: 'Com leitura', detalhe: 'NECESSITA SUBSTITUIÇÃO CAIXA MEDIDOR POSTE/CPREDE' },
  { numero: '1978', status: 'Com leitura', detalhe: 'MEDIDOR NO POSTE/CPREDE' },
  { numero: '2000', status: 'Com leitura', detalhe: 'SUSPENSÃO DE MEDIDOR DEFEITUOSO DEVIDO A CHUVAS/ENCHENTES' },
  { numero: '3201', status: 'Sem Leitura', detalhe: 'MEDIDOR RETIRADO' },
  { numero: '3205', status: 'Sem Leitura', detalhe: 'END. INSTALAÇÃO N/LOCALIZADO/INSTAL ALOCADA ERRADA' },
  { numero: '3245', status: 'Sem Leitura', detalhe: 'INSTALAÇÃO INEXISTENTE SEM RAMAL E SEM MEDIÇÃO' },
  { numero: '3301', status: 'Sem Leitura', detalhe: 'MEDIDOR ELETRÔNICO SEM FUNÇÃO AUXILIAR' },
  { numero: '3311', status: 'Sem Leitura', detalhe: 'MEDIDOR ELETRÔNICO APAGADO/CHAVE DISJ DESLIGADA' },
  { numero: '3312', status: 'Sem Leitura', detalhe: 'MEDIDOR COM DISCO GIRANDO AO CONTRÁRIO/DESMARCAÇÃO' },
  { numero: '3313', status: 'Sem Leitura', detalhe: 'INSETOS DENTRO DA CAIXA OU ENVOLVENDO O MEDIDOR' },
  { numero: '3369', status: 'Sem Leitura', detalhe: 'MEDIDOR EMBAÇADO' },
  { numero: '3370', status: 'Sem Leitura', detalhe: 'TAMPA ACRÍLICA/VISOR DA CAIXA EMBAÇADO' },
  { numero: '3374', status: 'Sem Leitura', detalhe: 'VIDRO VISOR DA CAIXA EMBAÇADO' },
  { numero: '3376', status: 'Sem Leitura', detalhe: 'MEDIDOR ELETRÔNICO DESPROGRAMADO' },
  { numero: '3379', status: 'Sem Leitura', detalhe: 'MED POSICIONADO INADEQUADAMENTE NA CAIXA' },
  { numero: '3511', status: 'Sem Leitura', detalhe: 'SUSPEITA MED DEFEITUOSO/ AVARIADO/ MANIPULADO/PARADO' },
  { numero: '3601', status: 'Sem Leitura', detalhe: 'TELEMETRIA SEM COMUNICAÇÃO' },
  { numero: '3700', status: 'Sem Leitura', detalhe: 'MEDIDOR EM CURTO OU INCENDIADO' },
  { numero: '3801', status: 'Sem Leitura', detalhe: 'LEIT N/EXEC. PREVISTA NO CALENDÁRIO-CAUSA PARCEIRA' },
  { numero: '3804', status: 'Sem Leitura', detalhe: 'MEDIDOR ELETRÔNICO APAGADO/FALTA ENERGIA NA REDE' },
  { numero: '3830', status: 'Sem Leitura', detalhe: 'LEITURA ESTIMADA PELO FATURAMENTO' },
  { numero: '3865', status: 'Sem Leitura', detalhe: 'GREVE NO SERVIÇO DE LEITURA' },
  { numero: '3867', status: 'Sem Leitura', detalhe: 'PROB OPER CAUSA CONCESSIONÁRIA(MCD, FALTA TRANSM)' },
  { numero: '3868', status: 'Sem Leitura', detalhe: 'PROB OPER CAUSA PARCEIRA VEÍC MCD FALTA TRANSMISSÃO' },
  { numero: '3871', status: 'Sem Leitura', detalhe: 'PROBLEMA ADMINISTRATIVO (FALTOU LEITURISTA)' },
  { numero: '3878', status: 'Sem Leitura', detalhe: 'INSTALAÇÕES SEM LEITURA PLANEJADA PARA O MÊS' },
  { numero: '3894', status: 'Sem Leitura', detalhe: 'LEIT PLURIMENSAL N/REAL PREV CALEND CAUSA CONCESS.' },
  { numero: '3895', status: 'Sem Leitura', detalhe: 'LEIT MENSAL N/REALIZADA PREV NO CALEND CAUSA CONCESSIONÁRIA' },
  { numero: '3901', status: 'Sem Leitura', detalhe: 'CAIXA MAL POSICIONADA NO POSTE/CPREDE' },
  { numero: '3902', status: 'Sem Leitura', detalhe: 'DEFEITO NA LENTE DA CAIXA MEDIDOR POSTE/CPREDE' },
  { numero: '3903', status: 'Sem Leitura', detalhe: 'CAIXA MEDIDOR SEM LENTE POSTE/CPREDE' },
  { numero: '3904', status: 'Sem Leitura', detalhe: 'CAIXA SEM TAMPA POSTE/CPREDE' },
  { numero: '3905', status: 'Sem Leitura', detalhe: 'NECESSITA SUBSTITUIÇÃO DE CAIXA POSTE/CPREDE' },
  { numero: '3906', status: 'Sem Leitura', detalhe: 'LENTE SUJA CAIXA MEDIDOR POSTE/CPREDE' },
  { numero: '3907', status: 'Sem Leitura', detalhe: 'EMBAÇADO DEVIDO CHUVA POSTE/CPREDE' },
  { numero: '3908', status: 'Sem Leitura', detalhe: 'OBSTÁCULO/IMPEDIMENTO DE LEITURA POSTE/CPREDE' },
  { numero: '5101', status: 'Sem Leitura', detalhe: 'MEDIÇÃO/QUADRO SEM A POSSIBILIDADE DE ABRIR' },
  { numero: '5102', status: 'Sem Leitura', detalhe: 'MEDIDOR OBSTRUÍDO SEM A POSSIBILIDADE LEITURA' },
  { numero: '5103', status: 'Sem Leitura', detalhe: 'INSETOS NA CAIXA DO MEDIDOR EXTERNAMENTE' },
  { numero: '5104', status: 'Sem Leitura', detalhe: 'CASA FECHADA/PORTÃO FECHADO/FALTA ACESSO A MEDIÇÃO' },
  { numero: '5105', status: 'Sem Leitura', detalhe: 'CLIENTE NÃO PERMITIU ACESSO DO LEITURISTA AO MEDIDOR' },
  { numero: '5106', status: 'Sem Leitura', detalhe: 'MED LOCAL IMPRÓPRIO PERIGOSO/CX MED ALTURA ANORMAL' },
  { numero: '5107', status: 'Sem Leitura', detalhe: 'FALTA ILUMINAÇÃO/LIMPEZA' },
  { numero: '5108', status: 'Sem Leitura', detalhe: 'LEITURA IMPEDIDA POR CÃES/ANIMAIS' },
  { numero: '5109', status: 'Sem Leitura', detalhe: 'INSTALAÇÃO DESABITADA/VAZIA' },
  { numero: '5127', status: 'Sem Leitura', detalhe: 'FALTA OU TROCA DE Nº PREDIAL SEM ACESSO A LEITURA' },
  { numero: '5260', status: 'Sem Leitura', detalhe: 'CÓDIGO DE CLASSE/RAMO DE NEGÓCIO INADEQUADO' },
  { numero: '5558', status: 'Sem Leitura', detalhe: 'SUSPEITA DE IRREGULARIDADE' },
  { numero: '5800', status: 'Sem Leitura', detalhe: 'PADRÃO MEDIÇÃO INCENDIADO/DEMOLIDO' },
  { numero: '5802', status: 'Sem Leitura', detalhe: 'INSTALAÇÃO INTERDITADA' },
  { numero: '6801', status: 'Sem Leitura', detalhe: 'LEITURA IMPEDIDA POR CONDIÇÃO INSEGURA/ÁREA RISCO' },
  { numero: '6820', status: 'Sem Leitura', detalhe: 'RUA INTRASITÁVEL' },
  { numero: '6824', status: 'Sem Leitura', detalhe: 'CALAMIDADE N/DECRET ENCHENTE ALAGAM TERREM VENDAV.' },
  { numero: '6836', status: 'Sem Leitura', detalhe: 'OBRAS PÚBLICAS SEM ACIONAMENTO CONCESSIONÁRIA' },
  { numero: '6862', status: 'Sem Leitura', detalhe: 'GREVE NO SERVIÇO PÚBLICO' },
  { numero: '6872', status: 'Sem Leitura', detalhe: 'CALAMIDADE DECRETADA ENCHENTE ALAGAM TERREM VENDAV' },
  { numero: '7000', status: 'Sem Leitura', detalhe: 'MEDIDOR SUBMERSO' },
  { numero: '7171', status: 'Sem Leitura', detalhe: 'FATURAMENTO BLOQUEADO PARA CÁLCULO DO ART. 71' },
  { numero: '9997', status: 'Sem Leitura', detalhe: 'REMANEJAMENTO ROTA' }
];


// Função para criar os cards dinamicamente
function criarCards(filtro = '') {
  const container = document.getElementById('card-container');
  container.innerHTML = ''; // Limpa os cards anteriores

  notasDeLeitura
    .filter(nota => {
      const conteudoCard = `${nota.numero} ${nota.status} ${nota.detalhe}`.toLowerCase();
      return conteudoCard.includes(filtro.toLowerCase()); // Verifica se o texto do card contém o filtro
    })
    .forEach(nota => {
      const card = document.createElement('div');
      card.classList.add('card');

      const titulo = document.createElement('h2');
      titulo.textContent = nota.numero;

      const status = document.createElement('p');
      status.textContent = nota.status;

      // Aplica a cor do texto baseada no status de leitura
      if (nota.status.toLowerCase() === 'com leitura') {
        status.classList.add('leitura-verde');
      } else if (nota.status.toLowerCase() === 'sem leitura') {
        status.classList.add('leitura-vermelha');
      }

      const detalhe = document.createElement('p');
      detalhe.textContent = nota.detalhe;

      card.appendChild(titulo);
      card.appendChild(status);
      card.appendChild(detalhe);

      container.appendChild(card);
    });

  // Exibe mensagem se não houver resultados
  if (container.innerHTML === '') {
    const mensagem = document.createElement('p');
    mensagem.textContent = 'Nenhum resultado encontrado.';
    container.appendChild(mensagem);
  }
}

// Função para lidar com o campo de pesquisa
document.getElementById('search-input').addEventListener('input', function (e) {
  const filtro = e.target.value;
  criarCards(filtro); // Atualiza os cards conforme a pesquisa
});

// Chama a função para criar os cards assim que a página for carregada
document.addEventListener('DOMContentLoaded', () => criarCards());

// Função para mostrar/esconder o botão "Voltar ao Topo"
window.addEventListener('scroll', () => {
  const backToTopButton = document.getElementById('back-to-top');
  if (window.scrollY > 20) { // Mostra o botão se o usuário rolar mais de 200px para baixo
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Função para rolar de volta ao topo
document.getElementById('back-to-top').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
