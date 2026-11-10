  const dadosCores = {
    vermelho: { nome: 'VERMELHO', hex: '#ff0055', onda: '700 NM', freq: '428 THz', ev: '1.77 eV', desc: 'Maior comprimento de onda e menor energia da luz visível. É a primeira frequência perceptível após o limite da radiação infravermelha.' },
    laranja: { nome: 'LARANJA', hex: '#ff7700', onda: '620 NM', freq: '484 THz', desc: '1.99 eV', desc: 'Frequência intermediária de tom quente e alta visibilidade, emitida intensamente por corpos incandescentes e estrelas médias.' },
    amarelo: { nome: 'AMARELO', hex: '#ffdd00', onda: '580 NM', freq: '517 THz', ev: '2.14 eV', desc: 'Região central do espectro visível onde a retina humana possui o pico máximo de sensibilidade diurna.' },
    verde: { nome: 'VERDE', hex: '#00ff66', onda: '530 NM', freq: '566 THz', ev: '2.34 eV', desc: 'Frequência de equilíbrio espectral. Fortemente refletida pela clorofila das plantas no processo de fotossíntese.' },
    azul: { nome: 'AZUL', hex: '#00ccff', onda: '470 NM', freq: '638 THz', ev: '2.64 eV', desc: 'Comprimento de onda curto e elevada energia. Espalha-se com facilidade na atmosfera pelo fenómeno de Espalhamento Rayleigh.' },
    anil: { nome: 'INDIGO (ANIL)', hex: '#6b00ff', onda: '435 NM', freq: '689 THz', ev: '2.85 eV', desc: 'Tom azul-violeta profundo de transição energética alta. Nomeado por Isaac Newton ao decompor a luz solar.' },
    violeta: { nome: 'VIOLETA', hex: '#d400ff', onda: '400 NM', freq: '750 THz', ev: '3.10 eV', desc: 'Maior frequência e energia do espectro visível. Marca o limite físico antes da radiação ionizante ultravioleta.' }
  };

  function mudarCor(corKey) {
    const c = dadosCores[corKey];

    // Atualiza os conteúdos de texto
    document.getElementById('nome-cor').innerText = c.nome;
    document.getElementById('tag-onda').innerText = c.onda;
    document.getElementById('freq-val').innerText = c.freq;
    document.getElementById('energy-val').innerText = c.ev;
    document.getElementById('desc-texto').innerText = c.desc;

    // Atualiza a esfera brilhante
    const esfera = document.getElementById('esfera-luz');
    esfera.style.background = c.hex;
    esfera.style.boxShadow = `
      0 0 30px ${c.hex}, 
      0 0 60px ${c.hex}66,
      inset -5px -5px 12px rgba(0,0,0,0.6),
      inset 5px 5px 12px rgba(255,255,255,0.8)`;

    // Atualiza o contorno do display
    const display = document.getElementById('painel-display');
    display.style.borderColor = c.hex;
    display.style.boxShadow = `inset 0 0 25px ${c.hex}22, 0 0 15px ${c.hex}33`;
  }
