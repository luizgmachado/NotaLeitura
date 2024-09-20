// Lista de notas de leiturista
const notasDeLeitura = [
  { numero: '1101', status: 'Com leitura', detalhe: 'LEITURA DIFICULTADA POR CÃES/ANIMAIS' },
  { numero: '1102', status: 'Com leitura', detalhe: 'MEDIDOR OBSTRUÍDO COM POSSIBILIDADE DE LEITURA' },
  { numero: '1103', status: 'Com leitura', detalhe: 'FALTA PLACA/IDENTIF. MEDIDOR/QUADRO/APTO. /PRÉDIO' },
  { numero: '1104', status: 'Com leitura', detalhe: 'MEDIÇÃO/QUADRO EM MAL ESTADO' },
  { numero: '1107', status: 'Com leitura', detalhe: 'MED LOCAL IMPRÓPRIO PERIGOSO/CX MED ALTURA ANORMAL' },
  { numero: '1110', status: 'Com leitura', detalhe: 'TAMPA ACRÍLICA EMBAÇADA' },
  { numero: '1201', status: 'Com leitura', detalhe: 'MUDANÇA NOME LOGRADOURO' },
  { numero: '1202', status: 'Com leitura', detalhe: 'MUDANÇA NUMERAÇÃO INTERNA, APTO OU VILA DE CASAS' },
  { numero: '1203', status: 'Com leitura', detalhe: 'INSTALAÇÃO FORA DE SEQUÊNCIA' },
  { numero: '1204', status: 'Com leitura', detalhe: 'Nº MEDIDOR/CONSTANTE DIFERENTE SEM SUBSTITUIÇÃO' },
  { numero: '1205', status: 'Com leitura', detalhe: 'MEDIDOR SUBSTITUÍDO' },
  { numero: '1206', status: 'Com leitura', detalhe: 'CÓDIGO DE CLASSE/RAMO DE NEGÓCIO INADEQUADO' },
  { numero: '1207', status: 'Com leitura', detalhe: 'CLIENTE NÃO CADASTRADO/NOVA LIGAÇÃO' },
  { numero: '1208', status: 'Com leitura', detalhe: 'SEQUÊNCIAMENTO DE ROTAS' },
  { numero: '1209', status: 'Com leitura', detalhe: 'ROTA FECHADA' },
  { numero: '1231', status: 'Com leitura', detalhe: 'INVERSÃO DE MEDIDORES ENTRE INSTALAÇÕES' },
  { numero: '1234', status: 'Com leitura', detalhe: 'ENDEREÇO URBANO PARA ENTREGA DA FATURA RURAL' },
  { numero: '1250', status: 'Com leitura', detalhe: 'INCLUSÃO/ALTERAÇÃO LOCAL INSTALAÇÃO DO EQUIPAMENTO' },
  { numero: '1300', status: 'Com leitura', detalhe: 'REGISTRADOR NÃO CONSTA NO SGL' },
  { numero: '1302', status: 'Com leitura', detalhe: 'RAMAL AÉREO COM OBSTÁCULOS' },
  { numero: '1303', status: 'Com leitura', detalhe: 'FORNECIMENTO A TERCEIROS/INTERLIGAÇÃO' },
  { numero: '1304', status: 'Com leitura', detalhe: 'CONSUMO EM INSTALAÇÃO DESLIGADA' },
  { numero: '1320', status: 'Com leitura', detalhe: 'SITUAÇÃO DE RISCO PARA TERCEIROS NA REDE' },
  { numero: '1326', status: 'Com leitura', detalhe: 'VESPEIRO NA MEDIÇÃO' },
  { numero: '1327', status: 'Com leitura', detalhe: 'VIDRO VISOR DA CAIXA QUEBRADO' },
  { numero: '1329', status: 'Com leitura', detalhe: 'MEDIDOR EMBAÇADO/SUJO' },
  { numero: '1343', status: 'Com leitura', detalhe: 'ILUMINAÇÃO PÚBLICA ACESA DURANTE O DIA' },
  { numero: '1349', status: 'Com leitura', detalhe: 'INSTALAÇÃO COM LIGAÇÃO PROVISÓRIA' },
  { numero: '1351', status: 'Com leitura', detalhe: 'SUSPEITA DE MEDIDOR COM PONTEIROS DESREGULADOS' },
  { numero: '1364', status: 'Com leitura', detalhe: 'VIDRO VISOR DA CAIXA EMBAÇADO' },
  { numero: '1373', status: 'Com leitura', detalhe: 'INSTALAÇÃO INCENDIADA/DEMOLIDA' },
  { numero: '1390', status: 'Com leitura', detalhe: 'MED POSICIONADO INADEQUADAMENTE NA CAIXA' },
  { numero: '1501', status: 'Com leitura', detalhe: 'CAIXA DE MEDIÇÃO SEM TAMPA' },
  { numero: '1503', status: 'Com leitura', detalhe: 'SUSPEITA DE IRREGULARIDADE' },
  { numero: '1505', status: 'Com leitura', detalhe: 'SUSPEITA MED DEFEITUOSO/AVARIADO/MANIPULADO/PARADO' },
  { numero: '1506', status: 'Com leitura', detalhe: 'MEDIDOR COM DISCO GIRANDO AO CONTRÁRIO/DESMARCAÇÃO' },
  { numero: '1544', status: 'Com leitura', detalhe: 'NÃO IDENTIFICADO MOTIVO DO CONSUMO ZERO' },
  { numero: '1546', status: 'Com leitura', detalhe: 'CONSUMO INCOMPATÍVEL COM O IMÓVEL' },
  { numero: '1560', status: 'Com leitura', detalhe: 'DENÚNCIA DE UMA LIGAÇÃO CLANDESTINA' },
  { numero: '1562', status: 'Com leitura', detalhe: 'INSTALAÇÃO DESLIGADA SEM CONSUMO' },
  { numero: '1570', status: 'Com leitura', detalhe: 'DENÚNCIA DE VÁRIAS LIGAÇÕES CLANDESTINAS' },
  { numero: '1600', status: 'Com leitura', detalhe: 'MEDIDOR EM CURTO OU INCENDIADO' },
  { numero: '1800', status: 'Com leitura', detalhe: 'LEITURA PREVISTA NO CALENDÁRIO REAL - LEITURA NORMAL' },
  { numero: '1801', status: 'Com leitura', detalhe: 'INSTALAÇÃO DESABITADA/VAZIA COM ACESSO À LEITURA' },
  { numero: '1802', status: 'Com leitura', detalhe: 'LEITURA ATUAL MENOR QUE ANTERIOR SEM VIRADA' },
  { numero: '1818', status: 'Com leitura', detalhe: 'TELEMETRIA IMPRESSÃO E ENTREGA' },
  { numero: '1819', status: 'Com leitura', detalhe: 'LEITURA DE TELEMETRIA' },
  { numero: '1828', status: 'Com leitura', detalhe: 'LEITURA CONFERIDA E CONFIRMADA' },
  { numero: '1834', status: 'Com leitura', detalhe: 'LEITURA INFORMADA PELO CLIENTE' },
  { numero: '1835', status: 'Com leitura', detalhe: 'PONTALETE UTILIZADO PARA OUTROS FINS' },
  { numero: '1838', status: 'Com leitura', detalhe: 'ETIQUETA DESCOLANDO/SEM ETIQUETA' },
  { numero: '1847', status: 'Com leitura', detalhe: 'LEITURA INFORMADA PELO CLIENTE FORA DE CICLO' },
  { numero: '1897', status: 'Com leitura', detalhe: 'LEITURA COLETADA VIA APP DE MENSAGEM' },
  { numero: '1898', status: 'Com leitura', detalhe: 'LEITURA INFORMADA PELO CLIENTE NO CICLO' },
  { numero: '1901', status: 'Com leitura', detalhe: 'POSTE: CAIXA MEDIÇÃO: LENTE EMBAÇADA, CAIXA QUEBRADA' },
  { numero: '1902', status: 'Com leitura', detalhe: 'POSTE: DEFEITO NO MEDIDOR: MAL POSICIONADO, EMBAÇADO' },
  { numero: '1978', status: 'Com leitura', detalhe: 'MEDIDOR NO POSTE/CPREDE' },
  { numero: '2000', status: 'Com leitura', detalhe: 'SUSPENSÃO DE MEDIDOR DEFEITUOSO DEVIDO A CHUVAS/ENCHENTES' },
  { numero: '3201', status: 'Sem Leitura', detalhe: 'MEDIDOR RETIRADO' },
  { numero: '3205', status: 'Sem Leitura', detalhe: 'ENDEREÇO INSTALAÇÃO NÃO LOCALIZADO' },
  { numero: '3311', status: 'Sem Leitura', detalhe: 'MEDIDOR ELETRÔNICO APAGADO/CHAVE DISJUNTOR DESLIGADA' },
  { numero: '3313', status: 'Sem Leitura', detalhe: 'INSETOS DENTRO DA CAIXA OU ENVOLVENDO O MEDIDOR' },
  { numero: '3369', status: 'Sem Leitura', detalhe: 'MEDIDOR EMBAÇADO' },
  { numero: '3370', status: 'Sem Leitura', detalhe: 'TAMPA ACRÍLICA EMBAÇADA' },
  { numero: '3374', status: 'Sem Leitura', detalhe: 'VIDRO VISOR DA CAIXA EMBAÇADO' },
  { numero: '3376', status: 'Sem Leitura', detalhe: 'MEDIDOR ELETRÔNICO DESPROGRAMADO' },
  { numero: '3379', status: 'Sem Leitura', detalhe: 'MEDIDOR POSICIONADO INADEQUADAMENTE NA CAIXA' },
  { numero: '3511', status: 'Sem Leitura', detalhe: 'SUSPEITA MED DEFEITUOSO/ AVARIADO/ MANIPULADO/PARADO' },
  { numero: '3700', status: 'Sem Leitura', detalhe: 'MEDIDOR EM CURTO OU INCENDIADO' },
  { numero: '3804', status: 'Sem Leitura', detalhe: 'MEDIDOR ELETRÔNICO APAGADO/FALTA ENERGIA NA REDE' },
  { numero: '3868', status: 'Sem Leitura', detalhe: 'PROBLEMA OPERACIONAL CAUSA PARCEIRA VEÍCULO MCD FALTA TRANSMISSÃO' },
  { numero: '3871', status: 'Sem Leitura', detalhe: 'PROBLEMA ADMINISTRATIVO (FALTOU LEITURISTA)' },
  { numero: '3878', status: 'Sem Leitura', detalhe: 'INSTALAÇÕES SEM LEITURA PLANEJADA PARA O MÊS' },
  { numero: '3901', status: 'Sem Leitura', detalhe: 'POSTE: CAIXA DE MEDIÇÃO: LENTE EMBAÇADA, CAIXA QUEBRADA' },
  { numero: '3902', status: 'Sem Leitura', detalhe: 'POSTE: DEFEITO NO MEDIDOR: MAL POSICIONADO, EMBAÇADO' },
  { numero: '3903', status: 'Sem Leitura', detalhe: 'POSTE: RISCO OU OBSTACULO NA REALIZAÇÃO DA LEITURA' },
  { numero: '5101', status: 'Sem Leitura', detalhe: 'MEDIÇÃO/QUADRO SEM A POSSIBILIDADE DE ABRIR' },
  { numero: '5102', status: 'Sem Leitura', detalhe: 'MEDIDOR OBSTRUÍDO SEM A POSSIBILIDADE LEITURA' },
  { numero: '5103', status: 'Sem Leitura', detalhe: 'INSETOS NA CAIXA DO MEDIDOR EXTERNAMENTE' },
  { numero: '5104', status: 'Sem Leitura', detalhe: 'CASA FECHADA/PORTÃO FECHADO/FALTA ACESSO A MEDIÇÃO' },
  { numero: '5105', status: 'Sem Leitura', detalhe: 'CLIENTE NÃO PERMITIU ACESSO DO LEITURISTA AO MEDIDOR' },
  { numero: '5106', status: 'Sem Leitura', detalhe: 'MED LOCAL IMPRÓPRIO PERIGOSO/CX MED ALTURA ANORMAL' },
  { numero: '5108', status: 'Sem Leitura', detalhe: 'LEITURA IMPEDIDA POR CÃES/ANIMAIS' },
  { numero: '5109', status: 'Sem Leitura', detalhe: 'INSTALAÇÃO DESABITADA/VAZIA SEM ACESSO À LEITURA' },
  { numero: '5558', status: 'Sem Leitura', detalhe: 'SUSPEITA DE IRREGULARIDADE' },
  { numero: '5800', status: 'Sem Leitura', detalhe: 'PADRÃO MEDIÇÃO INCENDIADO/DEMOLIDO' },
  { numero: '5802', status: 'Sem Leitura', detalhe: 'INSTALAÇÃO INTERDITADA' },
  { numero: '6801', status: 'Sem Leitura', detalhe: 'LEITURA IMPEDIDA POR CONDIÇÃO INSEGURA/ÁREA RISCO' },
  { numero: '6820', status: 'Sem Leitura', detalhe: 'ESTRADA OU RUA INTRASITÁVEL' },
  { numero: '6862', status: 'Sem Leitura', detalhe: 'GREVE NO SERVIÇO PÚBLICO' },
  { numero: '6872', status: 'Sem Leitura', detalhe: 'CALAMIDADE DECRETADA ENCHENTE ALAGAM TERREMOTO VENDAVAL' },
  { numero: '7000', status: 'Sem Leitura', detalhe: 'SUSPENSÃO DE MEDIDOR DEFEITUOSO DEVIDO A CHUVAS/ENCHENTES' },
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
