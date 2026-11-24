// ==========================================
// 1. CATÁLOGO OFICIAL ACSA DESIGN (PRODUTOS REAIS)
// ==========================================
const CATALOGO_VERSAO = "v3.4";

const produtosIniciais = [
    {
        id: "papel-xadrez-marrom",
        nome: "Papel de Parede Vinílico Xadrez Marrom Claro",
        linha: "home",
        categoria: "Papel de Parede",
        subcategoria: "Xadrez",
        preco: 331.80,
        precoAntigo: 389.90,
        tipoVenda: "rolo",
        coberturaRolo: 4.3,
        imagemPrincipal: "img/papel-xadrez-marrom.webp",
        imagens: [
            "img/papel-xadrez-marrom.webp",
            "img/papel-xadrez-marrom.webp",
            "img/papel-xadrez-marrom.webp"
        ],
        descricao: "Um modelo importado que agrega estilo e sofisticação. A cola já está inclusa no valor do rolo. Indicado para ambientes residenciais e comerciais.",
        fichaTecnica: {
            "Coleção": "Biarritz",
            "Padrão": "Decorativo",
            "Cor": "Marrom Claro",
            "Acabamento": "Vinílico, lavável, em alto relevo",
            "Rolo": "9,5 m × 0,53 m (cobertura de 4,3 m²)",
            "Incluso": "Cola para aplicação inclusa no valor",
            "Garantia": "2 anos contra defeitos de fabricação"
        },
        destaque: true
    },
    {
        id: "papel-cimento-queimado-cinza-verde",
        nome: "Papel de Parede Vinílico Cimento Queimado Cinza com Verde",
        linha: "home",
        categoria: "Papel de Parede",
        subcategoria: "Cimento Queimado",
        preco: 331.80,
        precoAntigo: 389.90,
        tipoVenda: "rolo",
        coberturaRolo: 4.3,
        imagemPrincipal: "img/papel-cimento-queimado.webp",
        imagens: [
            "img/papel-cimento-queimado.webp",
            "img/papel-cimento-queimado.webp",
            "img/papel-cimento-queimado.webp"
        ],
        descricao: "O efeito cimento queimado traz um visual industrial e contemporâneo. A cola já está inclusa no valor do rolo. Indicado para salas, lofts e ambientes comerciais.",
        fichaTecnica: {
            "Coleção": "Biarritz",
            "Padrão": "Cimento queimado",
            "Cor": "Cinza e Verde",
            "Acabamento": "Vinílico, lavável, em alto relevo",
            "Rolo": "9,5 m × 0,53 m (cobertura de 4,3 m²)",
            "Incluso": "Cola para aplicação inclusa no valor",
            "Garantia": "2 anos contra defeitos de fabricação"
        },
        destaque: true
    },
    {
        id: "papel-folhas-floral-verde",
        nome: "Papel de Parede Folhas Floral Verde c/ Off White e Brilho",
        linha: "home",
        categoria: "Papel de Parede",
        subcategoria: "Floral",
        preco: 331.80,
        precoAntigo: 389.90,
        tipoVenda: "rolo",
        coberturaRolo: 4.3,
        imagemPrincipal: "img/papel-floral-verde.webp",
        imagens: [
            "img/papel-floral-verde.webp",
            "img/papel-floral-verde.webp",
            "img/papel-floral-verde.webp"
        ],
        descricao: "O padrão floral traz leveza, natureza e delicadeza. A cola já está inclusa no valor do rolo. Indicado para quartos, salas e áreas de estar.",
        fichaTecnica: {
            "Coleção": "Valence",
            "Padrão": "Floral",
            "Cor": "Verde e Off White",
            "Acabamento": "Vinílico, lavável, com brilho, em alto relevo",
            "Rolo": "9,5 m × 0,53 m (cobertura de 4,3 m²)",
            "Incluso": "Cola para aplicação inclusa no valor",
            "Garantia": "2 anos contra defeitos de fabricação"
        },
        destaque: true
    },
    {
        id: "papel-floral-damask-rosa",
        nome: "Papel de Parede Floral Damask Rosa c/ Flores",
        linha: "home",
        categoria: "Papel de Parede",
        subcategoria: "Arabesco/Damask",
        preco: 331.80,
        precoAntigo: 389.90,
        tipoVenda: "rolo",
        coberturaRolo: 4.3,
        imagemPrincipal: "img/papel-damask-rosa.webp",
        imagens: [
            "img/papel-damask-rosa.webp",
            "img/papel-damask-rosa.webp",
            "img/papel-damask-rosa.webp"
        ],
        descricao: "O padrão arabesco damask traz sofisticação clássica e imponência. A cola já está inclusa no valor do rolo. Indicado para salas e ambientes sofisticados.",
        fichaTecnica: {
            "Coleção": "Valence",
            "Padrão": "Arabesco/Damask",
            "Cor": "Rosa",
            "Acabamento": "Vinílico, lavável, em alto relevo",
            "Rolo": "9,5 m × 0,53 m (cobertura de 4,3 m²)",
            "Incluso": "Cola para aplicação inclusa no valor",
            "Garantia": "2 anos contra defeitos de fabricação"
        },
        destaque: true
    },
    {
        id: "piso-vinilico-carvalho",
        nome: "Piso Vinílico Autocolante Régua - Carvalho",
        linha: "home",
        categoria: "Piso Vinílico",
        subcategoria: "Autocolante Régua",
        preco: 144.69,
        precoAntigo: 179.90,
        tipoVenda: "caixa",
        coberturaRolo: 2.09,
        imagemPrincipal: "img/piso-carvalho.webp",
        imagens: [
            "img/piso-carvalho.webp",
            "img/piso-carvalho.webp",
            "img/piso-carvalho.webp"
        ],
        descricao: "Cobre o piso existente imitando tábuas de madeira natural no padrão Carvalho, com instalação rápida e limpa.",
        fichaTecnica: {
            "Material": "Vinílico",
            "Cor / Padrão": "Carvalho",
            "Dimensões da Régua": "91,44 × 15,24 × 0,15",
            "Venda": "Caixa fechada",
            "Instalação": "Autocolante, rápida e limpa"
        },
        destaque: true
    },
    {
        id: "piso-vinilico-madeira-demolicao",
        nome: "Piso Vinílico Autocolante Régua - Madeira de Demolição",
        linha: "home",
        categoria: "Piso Vinílico",
        subcategoria: "Autocolante Régua",
        preco: 144.69,
        precoAntigo: 179.90,
        tipoVenda: "caixa",
        coberturaRolo: 2.09,
        imagemPrincipal: "img/piso-demolicao.webp",
        imagens: [
            "img/piso-demolicao.webp",
            "img/piso-demolicao.webp",
            "img/piso-demolicao.webp"
        ],
        descricao: "Cobre o piso existente imitando tábuas de madeira de demolição, com instalação rápida e limpa.",
        fichaTecnica: {
            "Material": "Vinílico",
            "Cor / Padrão": "Madeira de Demolição",
            "Dimensões da Régua": "91,44 × 15,24 × 0,15",
            "Venda": "Caixa fechada",
            "Instalação": "Autocolante, rápida e limpa"
        },
        destaque: false
    },
    {
        id: "ripado-interno-preto-amadeirado",
        nome: "Painel Ripado Interno WPC - Preto Amadeirado - 2,90m x 0,16m",
        linha: "home",
        categoria: "Painel Ripado",
        subcategoria: "Interno",
        preco: 269.80,
        precoAntigo: 319.90,
        tipoVenda: "placa",
        coberturaRolo: 0.464,
        imagemPrincipal: "img/ripado-interno-preto.webp",
        imagens: [
            "img/ripado-interno-preto.webp",
            "img/ripado-interno-preto.webp",
            "img/ripado-interno-preto.webp"
        ],
        descricao: "Transforma painel de TV, cabeceira e paredes internas com efeito ripado moderno.",
        fichaTecnica: {
            "Uso": "Interno (Painel de TV, cabeceiras e paredes)",
            "Material": "WPC (Wood Plastic Composite)",
            "Cor": "Preto Amadeirado",
            "Medida": "2,90m x 0,16m (0,464 m² por placa)"
        },
        destaque: false
    },
    {
        id: "ripado-interno-meia-grade-cedro",
        nome: "Painel Ripado Interno WPC Meia Grade - Cedro - 1,40m x 0,16m",
        linha: "home",
        categoria: "Painel Ripado",
        subcategoria: "Interno",
        preco: 269.80,
        precoAntigo: 319.90,
        tipoVenda: "placa",
        coberturaRolo: 0.224,
        imagemPrincipal: "img/ripado-interno-cedro.webp",
        imagens: [
            "img/ripado-interno-cedro.webp",
            "img/ripado-interno-cedro.webp",
            "img/ripado-interno-cedro.webp"
        ],
        descricao: "Transforma painel de TV, cabeceira e paredes internas com efeito ripado moderno.",
        fichaTecnica: {
            "Uso": "Interno (Meia parede, cabeceiras e detalhes)",
            "Material": "WPC (Wood Plastic Composite)",
            "Cor": "Cedro",
            "Medida": "1,40m x 0,16m (0,224 m² por placa)"
        },
        destaque: false
    },
    {
        id: "ripado-externo-preto",
        nome: "Painel Ripado Externo WPC - Preto 2,90m x 22cm",
        linha: "home",
        categoria: "Painel Ripado",
        subcategoria: "Externo",
        preco: 269.80,
        precoAntigo: 319.90,
        tipoVenda: "placa",
        coberturaRolo: 0.638,
        imagemPrincipal: "img/ripado-externo-preto.webp",
        imagens: [
            "img/ripado-externo-preto.webp",
            "img/ripado-externo-preto.webp",
            "img/ripado-externo-preto.webp"
        ],
        descricao: "Reveste fachadas, áreas gourmet, muros e varandas com resistência às intempéries.",
        fichaTecnica: {
            "Uso": "Externo (Fachadas, áreas gourmet, muros e varandas)",
            "Material": "WPC de alta resistência às intempéries",
            "Cor": "Preto",
            "Medida": "2,90m x 22cm (0,638 m² por placa)"
        },
        destaque: false
    },
    {
        id: "ripado-externo-marrom",
        nome: "Painel Ripado Externo WPC - Marrom 2,90m x 22cm",
        linha: "home",
        categoria: "Painel Ripado",
        subcategoria: "Externo",
        preco: 269.80,
        precoAntigo: 319.90,
        tipoVenda: "placa",
        coberturaRolo: 0.638,
        imagemPrincipal: "img/ripado-externo-marrom.webp",
        imagens: [
            "img/ripado-externo-marrom.webp",
            "img/ripado-externo-marrom.webp",
            "img/ripado-externo-marrom.webp"
        ],
        descricao: "Reveste fachadas, áreas gourmet, muros e varandas com resistência às intempéries.",
        fichaTecnica: {
            "Uso": "Externo (Fachadas, áreas gourmet, muros e varandas)",
            "Material": "WPC de alta resistência às intempéries",
            "Cor": "Marrom",
            "Medida": "2,90m x 22cm (0,638 m² por placa)"
        },
        destaque: false
    },
    {
        id: "jardim-artificial-palma",
        nome: "Jardim Artificial Palma - Placa 40x60cm",
        linha: "home",
        categoria: "Jardim Artificial",
        subcategoria: "Placas 40x60cm",
        preco: 199.80,
        precoAntigo: 239.90,
        tipoVenda: "placa",
        coberturaRolo: 0.24,
        imagemPrincipal: "img/jardim-palma.webp",
        imagens: [
            "img/jardim-palma.webp",
            "img/jardim-palma.webp",
            "img/jardim-palma.webp"
        ],
        descricao: "Cria paredes verdes e muros ingleses em áreas internas e externas, sem rega.",
        fichaTecnica: {
            "Modelo": "Palma",
            "Aplicação": "Áreas internas e externas (sem necessidade de rega)",
            "Medida": "Placa 40x60cm (cobertura de 0,24 m²)"
        },
        destaque: false
    },
    {
        id: "jardim-artificial-lume",
        nome: "Jardim Artificial Lume - Placa 40x60cm",
        linha: "home",
        categoria: "Jardim Artificial",
        subcategoria: "Placas 40x60cm",
        preco: 199.80,
        precoAntigo: 239.90,
        tipoVenda: "placa",
        coberturaRolo: 0.24,
        imagemPrincipal: "img/jardim-lume.webp",
        imagens: [
            "img/jardim-lume.webp",
            "img/jardim-lume.webp",
            "img/jardim-lume.webp"
        ],
        descricao: "Cria paredes verdes e muros ingleses em áreas internas e externas, sem rega.",
        fichaTecnica: {
            "Modelo": "Lume",
            "Aplicação": "Áreas internas e externas (sem necessidade de rega)",
            "Medida": "Placa 40x60cm (cobertura de 0,24 m²)"
        },
        destaque: false
    },
    {
        id: "jardim-artificial-serena",
        nome: "Jardim Artificial Serena - Placa 40x60cm",
        linha: "home",
        categoria: "Jardim Artificial",
        subcategoria: "Placas 40x60cm",
        preco: 199.80,
        precoAntigo: 239.90,
        tipoVenda: "placa",
        coberturaRolo: 0.24,
        imagemPrincipal: "img/jardim-serena.webp",
        imagens: [
            "img/jardim-serena.webp",
            "img/jardim-serena.webp",
            "img/jardim-serena.webp"
        ],
        descricao: "Cria paredes verdes e muros ingleses em áreas internas e externas, sem rega.",
        fichaTecnica: {
            "Modelo": "Serena",
            "Aplicação": "Áreas internas e externas (sem necessidade de rega)",
            "Medida": "Placa 40x60cm (cobertura de 0,24 m²)"
        },
        destaque: false
    },
    // --- PRODUTOS LINHA ACSA BABY ---
    {
        id: "baby-nuvens-azul",
        nome: "Papel de Parede Vinílico Nuvens Suaves Azul Céu",
        linha: "baby",
        categoria: "Papel de Parede",
        subcategoria: "Nuvens & Céu",
        preco: 331.80,
        precoAntigo: 389.90,
        tipoVenda: "rolo",
        coberturaRolo: 4.3,
        estoque: 25,
        imagemPrincipal: "",
        imagens: [],
        descricao: "Estampa delicada de nuvens em aquarela sobre fundo azul pastel, ideal para quartos de recém-nascidos e ambientes serenos. Cola inclusa no valor.",
        fichaTecnica: {
            "Coleção": "Acsa Baby Dreams",
            "Padrão": "Infantil / Lúdico",
            "Cor": "Azul Céu e Branco",
            "Acabamento": "Vinílico fosco, lavável e atóxico (sem cheiro)",
            "Medida / Rolo": "9,5 m × 0,53 m (cobertura de 4,3 m²)",
            "Incluso": "Cola para aplicação inclusa no valor",
            "Garantia": "2 anos contra defeitos de fabricação"
        },
        destaque: false
    },
    {
        id: "baby-safari-aquarela",
        nome: "Papel de Parede Vinílico Safári Aquarela Bege",
        linha: "baby",
        categoria: "Papel de Parede",
        subcategoria: "Safári & Animais",
        preco: 331.80,
        precoAntigo: 389.90,
        tipoVenda: "rolo",
        coberturaRolo: 4.3,
        estoque: 20,
        imagemPrincipal: "",
        imagens: [],
        descricao: "Ilustrações suaves de animais do safári em tons terrosos e neutros, perfeito para composições montessorianas unissex. Cola inclusa no valor.",
        fichaTecnica: {
            "Coleção": "Acsa Baby Nature",
            "Padrão": "Infantil / Safári",
            "Cor": "Bege Areia e Verde Sálvia",
            "Acabamento": "Vinílico texturizado, lavável e sem odor",
            "Medida / Rolo": "9,5 m × 0,53 m (cobertura de 4,3 m²)",
            "Incluso": "Cola para aplicação inclusa no valor",
            "Garantia": "2 anos contra defeitos de fabricação"
        },
        destaque: false
    },
    {
        id: "baby-poa-rose",
        nome: "Papel de Parede Vinílico Poá Delicado Rosé",
        linha: "baby",
        categoria: "Papel de Parede",
        subcategoria: "Poá & Geométrico",
        preco: 331.80,
        precoAntigo: 389.90,
        tipoVenda: "rolo",
        coberturaRolo: 4.3,
        estoque: 30,
        imagemPrincipal: "",
        imagens: [],
        descricao: "Bolinhas minimalistas em tom rosé suave sobre base off-white, trazendo leveza e elegância atemporal ao quarto infantil. Cola inclusa no valor.",
        fichaTecnica: {
            "Coleção": "Acsa Baby Classic",
            "Padrão": "Poá Minimalista",
            "Cor": "Off-White e Rosé",
            "Acabamento": "Vinílico fosco lavável",
            "Medida / Rolo": "9,5 m × 0,53 m (cobertura de 4,3 m²)",
            "Incluso": "Cola para aplicação inclusa no valor",
            "Garantia": "2 anos contra defeitos de fabricação"
        },
        destaque: false
    },
    {
        id: "baby-boiserie-verde",
        nome: "Boiserie Autoadesivo em EVA para Quarto Infantil (Barra 2,5m)",
        linha: "baby",
        categoria: "Molduras & Boiserie",
        subcategoria: "Acabamento Clássico",
        preco: 49.90,
        precoAntigo: 64.90,
        tipoVenda: "unidade",
        coberturaRolo: 1,
        estoque: 40,
        imagemPrincipal: "",
        imagens: [],
        descricao: "Moldura flexível de fácil aplicação sem sujeira, ideal para criar meia-parede ou quadros decorativos combinando com papel de parede.",
        fichaTecnica: {
            "Coleção": "Acsa Baby Arquitetura",
            "Material": "EVA de alta densidade (aceita pintura)",
            "Dimensões": "2,50 m de comprimento × 4 cm de largura",
            "Instalação": "Autoadesiva de alta fixação",
            "Garantia": "2 anos contra defeitos de fabricação"
        },
        destaque: false
    }
];

function getCatalogo() {
    const versaoSalva = localStorage.getItem('acsaCatalogoVersao');
    const salvo = localStorage.getItem('acsaCatalogo');
    if (!salvo || versaoSalva !== CATALOGO_VERSAO) {
        const comEstoque = produtosIniciais.map(p => ({
            ...p,
            estoque: p.estoque !== undefined ? p.estoque : 25
        }));
        localStorage.setItem('acsaCatalogo', JSON.stringify(comEstoque));
        localStorage.setItem('acsaCatalogoVersao', CATALOGO_VERSAO);
        return comEstoque;
    }
    return JSON.parse(salvo);
}

function saveCatalogo(lista) {
    localStorage.setItem('acsaCatalogo', JSON.stringify(lista));
}

function getSufixoVenda(tipoVenda) {
    if (tipoVenda === 'rolo') return ' / rolo';
    if (tipoVenda === 'barra') return ' / barra';
    if (tipoVenda === 'placa') return ' / placa';
    if (tipoVenda === 'caixa') return ' / caixa';
    if (tipoVenda === 'm2') return ' / m²';
    return '';
}

// ==========================================
// 2. BARRA DE BUSCA GLOBAL EM TEMPO REAL
// ==========================================
function toggleSearch() {
    const searchBar = document.getElementById('search-overlay');
    const searchInput = document.getElementById('global-search-input');
    if (!searchBar) return;
    
    searchBar.classList.toggle('open');
    if (searchBar.classList.contains('open') && searchInput) {
        searchInput.value = '';
        renderSearchResults('');
        searchInput.focus();
    }
}

function executeSearch(event) {
    if (event) event.preventDefault();
    const query = document.getElementById('global-search-input').value.trim();
    renderSearchResults(query);
}

function renderSearchResults(termo) {
    let resultsBox = document.getElementById('search-results-dropdown');
    const searchBar = document.getElementById('search-overlay');
    
    if (!resultsBox && searchBar) {
        resultsBox = document.createElement('div');
        resultsBox.id = 'search-results-dropdown';
        resultsBox.className = 'search-results-dropdown';
        searchBar.appendChild(resultsBox);
    }
    if (!resultsBox) return;

    const filtro = termo.toLowerCase();
    if (!filtro) {
        resultsBox.style.display = 'none';
        return;
    }

    const catalogo = getCatalogo();
    const encontrados = catalogo.filter(p => 
        p.nome.toLowerCase().includes(filtro) || 
        p.categoria.toLowerCase().includes(filtro) ||
        p.subcategoria.toLowerCase().includes(filtro) ||
        (p.descricao && p.descricao.toLowerCase().includes(filtro))
    );

    resultsBox.style.display = 'block';

    if (encontrados.length === 0) {
        resultsBox.innerHTML = `<div class="search-empty">Nenhum produto encontrado para "${termo}".</div>`;
        return;
    }

    resultsBox.innerHTML = encontrados.map(p => {
        const imgUrl = p.imagemPrincipal || (p.imagens && p.imagens[0]) || '';
        const sufixo = getSufixoVenda(p.tipoVenda);
        return `
            <div class="search-result-item" onclick="abrirProdutoPorId('${p.id}')">
                <div style="display: flex; align-items: center; gap: 14px;">
                    ${imgUrl ? `<img src="${imgUrl}" style="width: 48px; height: 48px; object-fit: cover; border: 1px solid var(--border-gray);">` : ''}
                    <div>
                        <span class="search-item-cat">${p.categoria.toUpperCase()} • ${p.subcategoria.toUpperCase()}</span>
                        <strong>${p.nome}</strong>
                    </div>
                </div>
                <span class="search-item-price">R$ ${Number(p.preco).toFixed(2).replace('.', ',')}${sufixo}</span>
            </div>
        `;
    }).join('');
}

// ==========================================
// 3. REDIRECIONAMENTO PARA PÁGINA DO PRODUTO
// ==========================================
function abrirProdutoPorId(id) {
    const catalogo = getCatalogo();
    const produto = catalogo.find(p => p.id === id) || catalogo[0];
    localStorage.setItem('produtoSelecionado', JSON.stringify(produto));
    window.location.href = 'detalhe-produto.html';
}

function abrirProduto(nome, categoria, preco, precoAntigo, precisaMetragem) {
    const catalogo = getCatalogo();
    const encontrado = catalogo.find(p => p.nome === nome);
    if (encontrado) {
        abrirProdutoPorId(encontrado.id);
        return;
    }
    const dados = {
        nome: nome,
        categoria: categoria,
        subcategoria: "",
        preco: preco,
        precoAntigo: precoAntigo,
        tipoVenda: precisaMetragem ? "m2" : "unidade",
        imagemPrincipal: "",
        imagens: [],
        descricao: "Peça exclusiva com curadoria Acsa Design.",
        fichaTecnica: {}
    };
    localStorage.setItem('produtoSelecionado', JSON.stringify(dados));
    window.location.href = 'detalhe-produto.html';
}

// ==========================================
// 4. CARDS, VITRINE E FILTROS DE CATEGORIA / SUBCATEGORIA
// ==========================================
const HEART_SVG = `
<svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
</svg>`;

function criarCardProdutoHTML(p) {
    const sufixo = getSufixoVenda(p.tipoVenda);
    const imgUrl = p.imagemPrincipal || (p.imagens && p.imagens[0]) || '';
    const semEstoque = Number(p.estoque ?? 0) <= 0;
    const badgeTexto = semEstoque 
        ? 'ESGOTADO' 
        : ((p.fichaTecnica && p.fichaTecnica['Coleção']) ? p.fichaTecnica['Coleção'].toUpperCase() : p.subcategoria.toUpperCase());
    const favoritado = isProductFavorited(p.id);

    return `
        <article class="product-card" data-id="${p.id}" style="${semEstoque ? 'opacity: 0.78;' : ''}">
            <div class="product-img" style="cursor:pointer; overflow: hidden;" onclick="abrirProdutoPorId('${p.id}')">
                <span class="badge" style="${semEstoque ? 'background: #8b2626; color: #fff;' : ''}">${badgeTexto}</span>
                <button type="button" class="fav-card-btn ${favoritado ? 'active' : ''}" data-fav-id="${p.id}" onclick="toggleFavorite(event, '${p.id}')" title="Salvar nos Favoritos">
                    ${HEART_SVG}
                </button>
                ${imgUrl 
                    ? `<img src="${imgUrl}" alt="${p.nome}" style="width: 100%; height: 100%; object-fit: cover;">` 
                    : `<span>[ Foto ${p.categoria} ]</span>`}
            </div>
            <div class="product-details">
                <span style="font-size: 11px; color: #888; text-transform: uppercase;">${p.categoria} • ${p.subcategoria}</span>
                <h3>${p.nome}</h3>
                <span class="price">R$ ${Number(p.preco).toFixed(2).replace('.', ',')}${sufixo}</span>
                <button type="button" class="btn-outline" style="width:100%;" onclick="abrirProdutoPorId('${p.id}')">
                    ${semEstoque ? 'Indisponível' : 'Ver Produto'}
                </button>
            </div>
        </article>
    `;
}

function renderVitrineDestaques() {
    const grid = document.getElementById('vitrine-destaques-grid');
    if (!grid) return;

    const catalogo = getCatalogo();
    const ordenados = [
        ...catalogo.filter(p => p.destaque),
        ...catalogo.filter(p => !p.destaque)
    ];

    grid.innerHTML = ordenados.map(p => criarCardProdutoHTML(p)).join('');
}

let categoriaAtiva = 'Todas';
let subcategoriaAtiva = 'Todas';

function filtrarProdutosPagina(linhaDesejada, categoria, subcategoria) {
    if (categoria !== null) {
        categoriaAtiva = categoria;
        subcategoriaAtiva = 'Todas';
    }
    if (subcategoria !== null) {
        subcategoriaAtiva = subcategoria;
    }

    const grid = document.getElementById('dynamic-product-grid');
    const subFilterBar = document.getElementById('subcategory-bar');
    if (!grid) return;

    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.cat === categoriaAtiva);
    });

    const catalogo = getCatalogo();
    const produtosDaLinha = catalogo.filter(p => !linhaDesejada || p.linha === linhaDesejada);
    
    if (subFilterBar) {
        if (categoriaAtiva === 'Todas') {
            subFilterBar.style.display = 'none';
        } else {
            const subcategoriasUnicas = ['Todas', ...new Set(
                produtosDaLinha
                    .filter(p => p.categoria === categoriaAtiva)
                    .map(p => p.subcategoria)
            )];

            if (subcategoriasUnicas.length > 1) {
                subFilterBar.style.display = 'flex';
                subFilterBar.innerHTML = `<span class="sub-label">Estilo / Padrão:</span>` + subcategoriasUnicas.map(sub => `
                    <button type="button" class="sub-btn ${sub === subcategoriaAtiva ? 'active' : ''}" 
                        onclick="filtrarProdutosPagina('${linhaDesejada}', null, '${sub}')">
                        ${sub}
                    </button>
                `).join('');
            } else {
                subFilterBar.style.display = 'none';
            }
        }
    }

    const filtrados = produtosDaLinha.filter(p => {
        const matchCat = (categoriaAtiva === 'Todas') || (p.categoria === categoriaAtiva);
        const matchSub = (subcategoriaAtiva === 'Todas') || (p.subcategoria === subcategoriaAtiva);
        return matchCat && matchSub;
    });

    if (filtrados.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #888; padding: 40px 0;">Nenhum produto cadastrado nesta categoria ainda.</p>`;
        return;
    }

    grid.innerHTML = filtrados.map(p => criarCardProdutoHTML(p)).join('');
}

// ==========================================
// 5. SACOLA (CARRINHO) GLOBAL PERSISTENTE
// ==========================================
function getCart() {
    return JSON.parse(localStorage.getItem('acsaCart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('acsaCart', JSON.stringify(cart));
    renderCartUI();
}

function addItemToGlobalCart(nome, detalhe, precoTotal) {
    const cart = getCart();
    cart.push({
        id: Date.now(),
        nome: nome,
        detalhe: detalhe,
        preco: precoTotal
    });
    saveCart(cart);
    
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer && !drawer.classList.contains('open')) {
        drawer.classList.add('open');
        if (overlay) overlay.classList.add('open');
    }
}

function removeFromCart(id) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== id);
    saveCart(cart);
}

function toggleCart() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer) drawer.classList.toggle('open');
    if (overlay) overlay.classList.toggle('open');
}

function renderCartUI() {
    const cart = getCart();
    const countEl = document.getElementById('cart-count');
    if (countEl) countEl.innerText = cart.length;

    const itemsContainer = document.getElementById('cart-items');
    const subtotalEl = document.getElementById('cart-subtotal');
    if (!itemsContainer || !subtotalEl) return;

    if (cart.length === 0) {
        itemsContainer.innerHTML = '<p class="empty-cart-msg" style="color: #888; font-size: 14px;">Sua sacola está vazia.</p>';
        subtotalEl.innerText = 'R$ 0,00';
        return;
    }

    let subtotal = 0;
    itemsContainer.innerHTML = '';

    cart.forEach(item => {
        subtotal += item.preco;
        itemsContainer.innerHTML += `
            <div class="cart-item-row" style="display: flex; justify-content: space-between; align-items: flex-start; padding-bottom: 14px; margin-bottom: 14px; border-bottom: 1px solid var(--border-gray);">
                <div style="padding-right: 12px;">
                    <strong style="font-size: 14px; display: block;">${item.nome}</strong>
                    <span style="font-size: 12px; color: #777; display: block; margin-top: 2px;">${item.detalhe}</span>
                    <button type="button" onclick="removeFromCart(${item.id})" style="background: none; border: none; color: #b54b4b; font-size: 11px; text-decoration: underline; cursor: pointer; margin-top: 6px; padding: 0;">Remover</button>
                </div>
                <span style="font-weight: 600; font-size: 14px; white-space: nowrap;">R$ ${item.preco.toFixed(2).replace('.', ',')}</span>
            </div>
        `;
    });

    subtotalEl.innerText = 'R$ ' + subtotal.toFixed(2).replace('.', ',');
}

// ==========================================
// INICIALIZAÇÃO AUTOMÁTICA
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    renderCartUI();
    renderVitrineDestaques();
    atualizarHeaderUsuario();
    const searchInput = document.getElementById('global-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => renderSearchResults(e.target.value));
    }
});

// ==========================================
// 6. CONTROLE DE ACESSO (ADM / PARCEIRO / CLIENTE) & PEDIDOS
// ==========================================
const contasSistema = [
    { 
        email: "admin@acsadesign.com.br",
        senha: "Lagl141318@",
        nome: "Administrador Acsa", 
        perfil: "admin" 
    },
    { email: "parceiro@acsadesign.com.br", senha: "123", nome: "Arquiteto Parceiro", perfil: "parceiro" },
    { email: "cliente@acsadesign.com.br", senha: "123", nome: "Cliente Acsa", perfil: "cliente" }
];

function getUsuarioLogado() {
    return JSON.parse(localStorage.getItem('acsaUsuarioLogado')) || null;
}

function fazerLoginSistema(email, senha) {
    const contasSalvas = JSON.parse(localStorage.getItem('acsaContasExtras')) || [];
    const todasContas = [...contasSistema, ...contasSalvas];
    
    const user = todasContas.find(u => u.email.toLowerCase() === email.toLowerCase().trim() && u.senha === senha);
    if (!user) return null;

    localStorage.setItem('acsaUsuarioLogado', JSON.stringify(user));
    return user;
}

function cadastrarNovoCliente(nome, email, senha, perfil = "cliente") {
    const contasSalvas = JSON.parse(localStorage.getItem('acsaContasExtras')) || [];
    const novo = { nome, email: email.trim(), senha, perfil };
    contasSalvas.push(novo);
    localStorage.setItem('acsaContasExtras', JSON.stringify(contasSalvas));
    localStorage.setItem('acsaUsuarioLogado', JSON.stringify(novo));
    return novo;
}

function sairDaConta() {
    localStorage.removeItem('acsaUsuarioLogado');
    window.location.href = 'login.html';
}

function cadastrarUsuarioEquipe(dadosVendedor) {
    const contasSalvas = JSON.parse(localStorage.getItem('acsaContasExtras')) || [];
    
    const todas = [...contasSistema, ...contasSalvas];
    if (todas.some(u => u.email.toLowerCase() === dadosVendedor.email.toLowerCase().trim())) {
        return { erro: "Este e-mail já está cadastrado no sistema." };
    }

    const novo = {
        nome: dadosVendedor.nome.trim(),
        cpf: dadosVendedor.cpf.trim(),
        email: dadosVendedor.email.toLowerCase().trim(),
        senha: dadosVendedor.senha,
        comissao: parseFloat(dadosVendedor.comissao) || 0,
        perfil: "vendedor"
    };

    contasSalvas.push(novo);
    localStorage.setItem('acsaContasExtras', JSON.stringify(contasSalvas));
    return novo;
}

function getEquipeCadastrada() {
    const contasSalvas = JSON.parse(localStorage.getItem('acsaContasExtras')) || [];
    return contasSalvas.filter(u => u.perfil === 'vendedor');
}

function removerMembroEquipe(email) {
    let contasSalvas = JSON.parse(localStorage.getItem('acsaContasExtras')) || [];
    contasSalvas = contasSalvas.filter(u => u.email.toLowerCase() !== email.toLowerCase());
    localStorage.setItem('acsaContasExtras', JSON.stringify(contasSalvas));
}

function getPedidosRegistrados() {
    return JSON.parse(localStorage.getItem('acsaPedidos')) || [];
}

function salvarPedidoSistema(pedido) {
    const pedidos = getPedidosRegistrados();
    pedidos.unshift(pedido);
    localStorage.setItem('acsaPedidos', JSON.stringify(pedidos));
}

function darBaixaEstoque(produtoId, quantidadeBaixar) {
    if (!produtoId) return;
    const catalogo = getCatalogo();
    const index = catalogo.findIndex(p => p.id === produtoId);
    if (index === -1) return;

    const estoqueAtual = Number(catalogo[index].estoque ?? 0);
    catalogo[index].estoque = Math.max(0, estoqueAtual - Number(quantidadeBaixar || 1));
    saveCatalogo(catalogo);
}

function atualizarEstoqueManual(produtoId, novoSaldo) {
    const catalogo = getCatalogo();
    const index = catalogo.findIndex(p => p.id === produtoId);
    if (index === -1) return;

    catalogo[index].estoque = Math.max(0, parseInt(novoSaldo) || 0);
    saveCatalogo(catalogo);
}

function atualizarHeaderUsuario() {
    const user = getUsuarioLogado();
    const loginLinks = document.querySelectorAll('a[href="login.html"]');
    
    loginLinks.forEach(link => {
        if (user) {
            if (user.perfil === 'admin') {
                link.innerText = 'Minha Conta';
                link.href = 'admin.html';
            } else if (user.perfil === 'vendedor') {
                const primeiroNome = user.nome.split(' ')[0];
                link.innerText = `Olá, ${primeiroNome}`;
                link.href = 'vendedor.html';
            } else {
                const primeiroNome = user.nome.split(' ')[0];
                link.innerText = `Olá, ${primeiroNome}`;
                link.href = 'minha-conta.html';
            }
        }
    });
}

// ==========================================
// 7. COTAÇÃO MULTI-TRANSPORTADORAS (ORIGEM: 24455-340)
// ==========================================
const CEP_ORIGEM_ACSA = "24455340";

async function cotarFreteMultiTransportadoras(cepDestino, listaItens, subtotalValor = 0) {
    const cepLimpo = (cepDestino || '').replace(/\D/g, '');
    if (cepLimpo.length !== 8) {
        throw new Error('Digite um CEP válido com 8 números.');
    }

    try {
        const resposta = await fetch('/api/frete', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cepDestino: cepLimpo, produtos: listaItens, subtotal: subtotalValor })
        });

        if (resposta.ok) {
            const data = await resposta.json();
            if (data.opcoes && data.opcoes.length > 0) {
                return data.opcoes;
            }
        }
    } catch (e) {
        // Segue para simulação local
    }

    const prefixo = parseInt(cepLimpo.substring(0, 2), 10);
    let fatorDistancia = 1.0;
    let prazoBase = 3;

    if (prefixo >= 20 && prefixo <= 28) {
        fatorDistancia = 0.85;
        prazoBase = 2;
    } else if (prefixo >= 1 && prefixo <= 39) {
        fatorDistancia = 1.15;
        prazoBase = 4;
    } else if (prefixo >= 80 && prefixo <= 99) {
        fatorDistancia = 1.45;
        prazoBase = 6;
    } else if (prefixo >= 70 && prefixo <= 79) {
        fatorDistancia = 1.55;
        prazoBase = 7;
    } else {
        fatorDistancia = 1.95;
        prazoBase = 9;
    }

    const totalPecas = listaItens.reduce((acc, i) => acc + (Number(i.quantidade) || 1), 0);
    const adicionalPeso = Math.max(0, totalPecas - 1) * 4.50;
    const freteGratisAtivo = subtotalValor >= 299;

    return [
        {
            id: 'jadlog-package',
            transportadora: 'Jadlog',
            servico: '.Package',
            preco: freteGratisAtivo ? 0 : Number(((21.90 * fatorDistancia) + adicionalPeso).toFixed(2)),
            prazoDias: prazoBase + 1
        },
        {
            id: 'correios-pac',
            transportadora: 'Correios',
            servico: 'PAC',
            preco: freteGratisAtivo ? 0 : Number(((24.50 * fatorDistancia) + adicionalPeso).toFixed(2)),
            prazoDias: prazoBase + 2
        },
        {
            id: 'jet-standard',
            transportadora: 'JeT Express',
            servico: 'Standard',
            preco: Number(((26.80 * fatorDistancia) + adicionalPeso).toFixed(2)),
            prazoDias: prazoBase
        },
        {
            id: 'correios-sedex',
            transportadora: 'Correios',
            servico: 'SEDEX',
            preco: Number(((38.90 * fatorDistancia) + adicionalPeso * 1.4).toFixed(2)),
            prazoDias: Math.max(1, prazoBase - 1)
        }
    ];
}

// ==========================================
// 8. CARROSSEL ROTATIVO DA PÁGINA INICIAL + SWIPE
// ==========================================
let slideAtualIndex = 0;
let intervaloCarrossel = null;

function atualizarPosicaoCarrossel() {
    const track = document.getElementById('hero-slides-track');
    const dots = document.querySelectorAll('#carousel-dots .carousel-dot');
    if (!track) return;

    track.style.transform = `translateX(-${slideAtualIndex * 100}%)`;
    dots.forEach((dot, idx) => dot.classList.toggle('active', idx === slideAtualIndex));
}

function mudarSlide(direcao) {
    const totalSlides = document.querySelectorAll('#hero-slides-track .hero-slide').length;
    if (totalSlides === 0) return;
    slideAtualIndex = (slideAtualIndex + direcao + totalSlides) % totalSlides;
    atualizarPosicaoCarrossel();
}

function irParaSlide(index) {
    slideAtualIndex = index;
    atualizarPosicaoCarrossel();
}

function iniciarCarrossel() {
    if (!document.getElementById('hero-slides-track')) return;
    clearInterval(intervaloCarrossel);
    intervaloCarrossel = setInterval(() => mudarSlide(1), 5000);
}

function pausarCarrossel() {
    clearInterval(intervaloCarrossel);
}

function ativarSwipeCarrossel() {
    const carousel = document.getElementById('hero-carousel');
    if (!carousel) return;

    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        pausarCarrossel();
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diferenca = touchStartX - touchEndX;
        if (Math.abs(diferenca) > 45) {
            mudarSlide(diferenca > 0 ? 1 : -1);
        }
        iniciarCarrossel();
    }, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
    iniciarCarrossel();
    ativarSwipeCarrossel();
});

// ==========================================
// 9. BOTÃO FLUTUANTE WHATSAPP CONSULTIVO (GLOBAL)
// ==========================================
function inicializarBotaoWhatsApp() {
    const paginaAtual = window.location.pathname.toLowerCase();
    if (paginaAtual.includes('admin.html') || paginaAtual.includes('vendedor.html')) return;
    if (document.getElementById('acsa-whatsapp-float')) return;

    const numeroWhatsApp = '5521976846510';
    let mensagem = 'Olá! Vim pelo site da Acsa Design e gostaria de tirar uma dúvida sobre revestimentos e medidas.';

    if (paginaAtual.includes('detalhe-produto.html')) {
        const prod = JSON.parse(localStorage.getItem('produtoSelecionado') || 'null');
        if (prod && prod.nome) {
            mensagem = `Olá! Estou vendo o produto "${prod.nome}" no site da Acsa Design e gostaria de ajuda com medidas/orçamento.`;
        }
    }

    const link = document.createElement('a');
    link.id = 'acsa-whatsapp-float';
    link.className = 'whatsapp-float-btn';
    link.href = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', 'Falar no WhatsApp com a Acsa Design');

    link.innerHTML = `
        <svg class="whatsapp-float-icon" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.256.59 4.458 1.71 6.398L3.09 29.04l6.814-1.788A12.74 12.74 0 0 0 16.004 28.8c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8zm0 23.434a10.6 10.6 0 0 1-5.406-1.48l-.388-.23-4.044 1.06 1.08-3.942-.252-.404a10.58 10.58 0 0 1-1.624-5.638c0-5.864 4.772-10.634 10.634-10.634 2.84 0 5.51 1.106 7.518 3.116a10.56 10.56 0 0 1 3.116 7.518c0 5.864-4.77 10.634-10.634 10.634zm5.834-7.966c-.32-.16-1.892-.934-2.186-1.04-.292-.106-.506-.16-.72.16-.214.32-.826 1.04-1.012 1.254-.186.214-.374.24-.694.08-.32-.16-1.35-.498-2.572-1.588-.95-.848-1.592-1.894-1.778-2.214-.186-.32-.02-.494.14-.654.144-.144.32-.374.48-.56.16-.186.214-.32.32-.534.106-.214.054-.4-.026-.56-.08-.16-.72-1.734-.986-2.374-.26-.624-.524-.54-.72-.55l-.614-.01c-.214 0-.56.08-.854.4-.294.32-1.12 1.094-1.12 2.668s1.146 3.094 1.306 3.308c.16.214 2.256 3.444 5.466 4.83.764.33 1.36.526 1.824.674.766.244 1.464.21 2.016.128.614-.092 1.892-.774 2.158-1.52.266-.746.266-1.386.186-1.52-.08-.134-.294-.214-.614-.374z"/>
        </svg>
        <span class="whatsapp-float-text">Consultoria WhatsApp</span>
    `;

    document.body.appendChild(link);
}

document.addEventListener('DOMContentLoaded', inicializarBotaoWhatsApp);

// ==========================================
// 10. MENU MOBILE AUTOMÁTICO (TODAS AS PÁGINAS)
// ==========================================
function inicializarMenuMobile() {
    const headerContent = document.querySelector('.header-content');
    const navLinks = headerContent ? headerContent.querySelector('.nav-links') : null;
    if (!headerContent || !navLinks) return;
    if (document.getElementById('acsa-mobile-menu-btn')) return;

    const btn = document.createElement('button');
    btn.id = 'acsa-mobile-menu-btn';
    btn.type = 'button';
    btn.className = 'mobile-menu-btn';
    btn.setAttribute('aria-label', 'Abrir menu de navegação');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '&#9776;';

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const aberto = navLinks.classList.toggle('mobile-open');
        btn.innerHTML = aberto ? '&times;' : '&#9776;';
        btn.setAttribute('aria-expanded', String(aberto));
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('mobile-open');
            btn.innerHTML = '&#9776;';
            btn.setAttribute('aria-expanded', 'false');
        });
    });

    document.addEventListener('click', (e) => {
        if (!headerContent.contains(e.target) && navLinks.classList.contains('mobile-open')) {
            navLinks.classList.remove('mobile-open');
            btn.innerHTML = '&#9776;';
            btn.setAttribute('aria-expanded', 'false');
        }
    });

    headerContent.insertBefore(btn, navLinks);
}

document.addEventListener('DOMContentLoaded', inicializarMenuMobile);

// ==========================================
// 11. CALCULADORA DE MÃO DE OBRA (EXCLUSIVA ADM & VENDEDOR)
// ==========================================
const TABELA_MAO_DE_OBRA_PADRAO = {
    papel_parede: { nome: 'Instalação de Papel de Parede', unidade: 'm²', valorUnit: 45.00, minimo: 180.00 },
    piso_vinilico: { nome: 'Instalação de Piso Vinílico', unidade: 'm²', valorUnit: 55.00, minimo: 250.00 },
    jardim_artificial: { nome: 'Instalação de Jardim Artificial (Placas)', unidade: 'm²', valorUnit: 65.00, minimo: 200.00 },
    painel_ripado: { nome: 'Instalação de Painel Ripado WPC', unidade: 'm²', valorUnit: 75.00, minimo: 220.00 },
    boiserie: { nome: 'Instalação de Moldura / Boiserie', unidade: 'm linear', valorUnit: 25.00, minimo: 150.00 }
};

function getTabelaMaoDeObra() {
    const salva = JSON.parse(localStorage.getItem('acsaTabelaMaoDeObra'));
    return salva ? { ...TABELA_MAO_DE_OBRA_PADRAO, ...salva } : TABELA_MAO_DE_OBRA_PADRAO;
}

function inicializarCalculadoraMaoDeObra() {
    const user = typeof getUsuarioLogado === 'function' ? getUsuarioLogado() : null;
    if (!user || (user.perfil !== 'admin' && user.perfil !== 'vendedor')) return;
    if (document.getElementById('acsa-calc-mo-btn')) return;

    const btn = document.createElement('button');
    btn.id = 'acsa-calc-mo-btn';
    btn.type = 'button';
    btn.innerHTML = '&#9874; Calculadora Mão de Obra';
    btn.style.cssText = `
        position: fixed; bottom: 22px; left: 22px; z-index: 995;
        background: #1a1816; color: #E6C068; border: 1px solid #E6C068;
        padding: 11px 18px; border-radius: 50px; font-family: inherit;
        font-size: 12px; font-weight: 600; letter-spacing: 0.5px;
        cursor: pointer; box-shadow: 0 8px 24px rgba(0,0,0,0.25);
    `;
    btn.onclick = abrirModalMaoDeObra;
    document.body.appendChild(btn);

    const modal = document.createElement('div');
    modal.id = 'acsa-modal-mao-obra';
    modal.style.cssText = `
        position: fixed; inset: 0; background: rgba(18,16,14,0.6);
        z-index: 1200; display: none; align-items: center; justify-content: center; padding: 16px;
    `;

    const isAdminUser = user.perfil === 'admin';

    modal.innerHTML = `
        <div style="background: #FFFFFF; border: 1px solid #CFCFCF; max-width: 520px; width: 100%; padding: 28px; position: relative; max-height: 92vh; overflow-y: auto;">
            <button type="button" onclick="fecharModalMaoDeObra()" style="position: absolute; top: 12px; right: 16px; background: none; border: none; font-size: 26px; cursor: pointer; color: #777;">&times;</button>
            <span class="subtitle">USO INTERNO • EQUIPE ACSA DESIGN</span>
            <h2 style="font-size: 24px; margin-bottom: 6px;">Calculadora de Mão de Obra</h2>
            <p style="font-size: 12px; color: #777; margin-bottom: 18px;">Simule o valor exato de instalação por metragem para passar ao cliente.</p>

            <div class="form-group" style="margin-bottom: 12px;">
                <label>Tipo de Serviço *</label>
                <select id="mo-servico-select" onchange="atualizarCamposMaoDeObra()" style="padding: 11px; border: 1px solid #CFCFCF; font-family: inherit; font-size: 13px; background: #FFF;">
                    <option value="papel_parede">Instalação de Papel de Parede (por m²)</option>
                    <option value="piso_vinilico">Instalação de Piso Vinílico (por m²)</option>
                    <option value="jardim_artificial">Instalação de Jardim Artificial / Placas (por m²)</option>
                    <option value="painel_ripado">Instalação de Painel Ripado WPC (por m²)</option>
                    <option value="boiserie">Instalação de Moldura / Boiserie (metro linear)</option>
                </select>
            </div>

            <div id="mo-medidas-area" class="form-row-2" style="margin-bottom: 12px;">
                <div class="form-group">
                    <label>Largura (m)</label>
                    <input type="number" id="mo-largura" value="3.00" min="0.1" step="0.1" oninput="calcularMaoDeObraInterna()">
                </div>
                <div class="form-group">
                    <label>Altura / Comprimento (m)</label>
                    <input type="number" id="mo-altura" value="4.00" min="0.1" step="0.1" oninput="calcularMaoDeObraInterna()">
                </div>
            </div>

            <div id="mo-medida-linear-box" class="form-group" style="display: none; margin-bottom: 12px;">
                <label>Metragem Linear Total (m)</label>
                <input type="number" id="mo-linear" value="10.00" min="0.5" step="0.5" oninput="calcularMaoDeObraInterna()">
            </div>

            <div class="form-row-2" style="margin-bottom: 16px;">
                <div class="form-group">
                    <label>Valor Base / m² ou m (R$)</label>
                    <input type="number" id="mo-valor-unit" step="0.50" ${isAdminUser ? '' : 'readonly'} oninput="calcularMaoDeObraInterna()" style="${isAdminUser ? '' : 'background: #F4F4F4;'}">
                </div>
                <div class="form-group">
                    <label>Taxa Mínima de Visita (R$)</label>
                    <input type="number" id="mo-valor-minimo" step="1.00" ${isAdminUser ? '' : 'readonly'} oninput="calcularMaoDeObraInterna()" style="${isAdminUser ? '' : 'background: #F4F4F4;'}">
                </div>
            </div>

            <div style="margin-bottom: 16px;">
                <label style="display: flex; align-items: center; gap: 8px; font-size: 12px; cursor: pointer;">
                    <input type="checkbox" id="mo-adicional-altura" onchange="calcularMaoDeObraInterna()">
                    Pé-direito duplo / andaime (+20% de complexidade)
                </label>
            </div>

            <div id="mo-resultado-box" style="background: #F9F9F9; border: 1px solid #E6C068; padding: 18px; margin-bottom: 16px;"></div>

            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                <button type="button" class="btn-primary" style="flex: 1; border: none; cursor: pointer; padding: 12px;" onclick="copiarOrcamentoMaoDeObra()">Copiar Resumo p/ WhatsApp</button>
                ${isAdminUser ? `<button type="button" class="btn-outline" style="padding: 12px 14px; font-size: 11px;" onclick="salvarTabelaMaoDeObraADM()">Salvar Tabela Base</button>` : ''}
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    atualizarCamposMaoDeObra();
}

function abrirModalMaoDeObra() {
    const modal = document.getElementById('acsa-modal-mao-obra');
    if (modal) {
        modal.style.display = 'flex';
        atualizarCamposMaoDeObra();
    }
}

function fecharModalMaoDeObra() {
    const modal = document.getElementById('acsa-modal-mao-obra');
    if (modal) modal.style.display = 'none';
}

function atualizarCamposMaoDeObra() {
    const tipo = document.getElementById('mo-servico-select').value;
    const tabela = getTabelaMaoDeObra();
    const item = tabela[tipo];

    document.getElementById('mo-medidas-area').style.display = (tipo === 'boiserie') ? 'none' : 'grid';
    document.getElementById('mo-medida-linear-box').style.display = (tipo === 'boiserie') ? 'block' : 'none';

    document.getElementById('mo-valor-unit').value = item.valorUnit.toFixed(2);
    document.getElementById('mo-valor-minimo').value = item.minimo.toFixed(2);
    calcularMaoDeObraInterna();
}

function calcularMaoDeObraInterna() {
    const tipo = document.getElementById('mo-servico-select').value;
    const tabela = getTabelaMaoDeObra();
    const item = tabela[tipo];

    let metragem = 0;
    if (tipo === 'boiserie') {
        metragem = Math.max(0.1, parseFloat(document.getElementById('mo-linear').value) || 0);
    } else {
        const l = Math.max(0.1, parseFloat(document.getElementById('mo-largura').value) || 0);
        const a = Math.max(0.1, parseFloat(document.getElementById('mo-altura').value) || 0);
        metragem = l * a;
    }

    const valorUnit = parseFloat(document.getElementById('mo-valor-unit').value) || 0;
    const valorMinimo = parseFloat(document.getElementById('mo-valor-minimo').value) || 0;
    const extraAltura = document.getElementById('mo-adicional-altura').checked ? 1.20 : 1.00;

    const bruto = metragem * valorUnit * extraAltura;
    const finalCobrar = Math.max(valorMinimo, bruto);
    const aplicouMinimo = bruto < valorMinimo;

    const box = document.getElementById('mo-resultado-box');
    box.dataset.resumoCopiar = `*Orçamento Mão de Obra — Acsa Design*\nServiço: ${item.nome}\nÁrea/Medida: ${metragem.toFixed(2).replace('.', ',')} ${item.unidade}\nValor da Instalação: *R$ ${finalCobrar.toFixed(2).replace('.', ',')}*`;

    box.innerHTML = `
        <div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 6px;">
            <span>Área / Medida Total:</span>
            <strong>${metragem.toFixed(2).replace('.', ',')} ${item.unidade}</strong>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 8px;">
            <span>Cálculo por metragem:</span>
            <span>R$ ${bruto.toFixed(2).replace('.', ',')} ${aplicouMinimo ? '(ajustado p/ taxa mínima)' : ''}</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 10px; border-top: 1px dashed #CFCFCF;">
            <strong style="font-size: 14px;">Valor a Cobrar do Cliente:</strong>
            <strong style="font-size: 22px; color: #1a1816;">R$ ${finalCobrar.toFixed(2).replace('.', ',')}</strong>
        </div>
    `;
}

function copiarOrcamentoMaoDeObra() {
    const texto = document.getElementById('mo-resultado-box')?.dataset?.resumoCopiar || '';
    navigator.clipboard.writeText(texto).then(() => {
        alert('Orçamento de mão de obra copiado! Cole direto no WhatsApp do cliente.');
    });
}

function salvarTabelaMaoDeObraADM() {
    const tipo = document.getElementById('mo-servico-select').value;
    const tabela = getTabelaMaoDeObra();
    tabela[tipo].valorUnit = parseFloat(document.getElementById('mo-valor-unit').value) || tabela[tipo].valorUnit;
    tabela[tipo].minimo = parseFloat(document.getElementById('mo-valor-minimo').value) || tabela[tipo].minimo;
    localStorage.setItem('acsaTabelaMaoDeObra', JSON.stringify(tabela));
    alert('Valores base atualizados para toda a equipe!');
}

document.addEventListener('DOMContentLoaded', inicializarCalculadoraMaoDeObra);

// ==========================================
// 12. OFERTAS RELÂMPAGO COM CRONÔMETRO & ROTAÇÃO REAL
// ==========================================
const CICLO_OFERTA_MS = 8 * 60 * 60 * 1000;
let indiceLoteFlashAtual = -1;

function renderOfertasRelampagoLote(indiceCiclo) {
    const grid = document.getElementById('flash-deals-grid');
    if (!grid) return;

    const catalogo = getCatalogo().filter(p => (p.imagemPrincipal || (p.imagens && p.imagens[0])));
    if (catalogo.length === 0) return;

    const tamanhoLote = 4;
    const totalLotes = Math.max(1, Math.ceil(catalogo.length / tamanhoLote));
    const loteIndex = indiceCiclo % totalLotes;

    const selecionados = [];
    for (let i = 0; i < Math.min(tamanhoLote, catalogo.length); i++) {
        const pos = (loteIndex * tamanhoLote + i) % catalogo.length;
        selecionados.push(catalogo[pos]);
    }

    const descontosCiclo = [15, 20, 18, 25];

    grid.innerHTML = selecionados.map((p, idx) => {
        const percOff = descontosCiclo[idx % descontosCiclo.length];
        const precoBase = Number(p.preco);
        const precoPromo = Number((precoBase * (1 - percOff / 100)).toFixed(2));
        const imgUrl = p.imagemPrincipal || p.imagens[0];
        const favoritado = isProductFavorited(p.id);

        return `
            <article class="flash-card" data-id="${p.id}">
                <div class="flash-card-img" onclick="abrirProdutoPorId('${p.id}')">
                    <button type="button" class="fav-card-btn ${favoritado ? 'active' : ''}" data-fav-id="${p.id}" onclick="toggleFavorite(event, '${p.id}')" title="Salvar nos Favoritos">
                        ${HEART_SVG}
                    </button>
                    <img src="${imgUrl}" alt="${p.nome}">
                </div>
                <div class="flash-tag-bar">
                    <span>OFERTA</span>
                    <span>-${percOff}%</span>
                </div>
                <div class="flash-card-body">
                    <h3>${p.nome}</h3>
                    <span class="flash-old-price">R$ ${precoBase.toFixed(2).replace('.', ',')}</span>
                    <span class="flash-new-price">R$ ${precoPromo.toFixed(2).replace('.', ',')}</span>
                    <button type="button" class="flash-buy-btn" onclick="addItemToGlobalCart('${p.nome.replace(/'/g, "\\'")} (Oferta Relâmpago -${percOff}%)', '1 un. promocional', ${precoPromo})">
                        Adicionar à Sacola
                    </button>
                </div>
            </article>
        `;
    }).join('');
}

function iniciarCronometroOfertasRelampago() {
    const hEl = document.getElementById('flash-hours');
    const mEl = document.getElementById('flash-minutes');
    const sEl = document.getElementById('flash-seconds');
    if (!hEl || !mEl || !sEl) return;

    function atualizarRelogio() {
        const agora = Date.now();
        const indiceCiclo = Math.floor(agora / CICLO_OFERTA_MS);
        const restanteMs = CICLO_OFERTA_MS - (agora % CICLO_OFERTA_MS);

        if (indiceCiclo !== indiceLoteFlashAtual) {
            indiceLoteFlashAtual = indiceCiclo;
            renderOfertasRelampagoLote(indiceCiclo);
        }

        const totalSegundos = Math.floor(restanteMs / 1000);
        const horas = Math.floor(totalSegundos / 3600);
        const minutos = Math.floor((totalSegundos % 3600) / 60);
        const segundos = totalSegundos % 60;

        hEl.innerText = String(horas).padStart(2, '0');
        mEl.innerText = String(minutos).padStart(2, '0');
        sEl.innerText = String(segundos).padStart(2, '0');
    }

    atualizarRelogio();
    setInterval(atualizarRelogio, 1000);
}

document.addEventListener('DOMContentLoaded', iniciarCronometroOfertasRelampago);

// ==========================================
// 13. SISTEMA DE FAVORITOS & MINHAS LISTAS (COM LOGIN)
// ==========================================
function getUserFavoritesData() {
    const user = getUsuarioLogado();
    if (!user) return { activeList: 'Meus Favoritos', lists: { 'Meus Favoritos': [] } };
    const key = 'acsa_favorites_' + (user.email || user.nome || 'cliente');
    const saved = JSON.parse(localStorage.getItem(key) || 'null');
    if (!saved || !saved.lists) {
        return { activeList: 'Meus Favoritos', lists: { 'Meus Favoritos': [] } };
    }
    return saved;
}

function saveUserFavoritesData(data) {
    const user = getUsuarioLogado();
    if (!user) return;
    const key = 'acsa_favorites_' + (user.email || user.nome || 'cliente');
    localStorage.setItem(key, JSON.stringify(data));
}

function isProductFavorited(productId) {
    const user = getUsuarioLogado();
    if (!user) return false;
    const data = getUserFavoritesData();
    return Object.values(data.lists).some(arr => arr.includes(String(productId)));
}

function toggleFavorite(event, productId) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    const user = getUsuarioLogado();
    if (!user) {
        alert('Faça login ou cadastre-se para salvar produtos em suas Listas de Favoritos.');
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        window.location.href = 'login.html?redirect=' + encodeURIComponent(currentPage);
        return;
    }

    const idStr = String(productId);
    const data = getUserFavoritesData();
    const targetList = data.activeList || 'Meus Favoritos';
    if (!data.lists[targetList]) data.lists[targetList] = [];

    let removed = false;
    Object.keys(data.lists).forEach(listName => {
        const idx = data.lists[listName].indexOf(idStr);
        if (idx > -1) {
            data.lists[listName].splice(idx, 1);
            removed = true;
        }
    });

    if (!removed) {
        data.lists[targetList].push(idStr);
    }

    saveUserFavoritesData(data);

    document.querySelectorAll(`.fav-card-btn[data-fav-id="${idStr}"]`).forEach(btn => {
        btn.classList.toggle('active', !removed);
    });

    if (document.getElementById('favorites-page-root')) {
        renderFavoritesPage();
    }
}

function injectFavoriteButtonsOnCards() {
    document.querySelectorAll('.product-card, .flash-card').forEach(card => {
        const imgBox = card.querySelector('.product-img, .flash-card-img');
        if (!imgBox || imgBox.querySelector('.fav-card-btn')) return;

        let prodId = card.getAttribute('data-id') || '';
        if (!prodId) {
            const titleEl = card.querySelector('h3');
            if (titleEl) {
                const found = getCatalogo().find(p => p.nome.trim() === titleEl.textContent.trim());
                if (found) prodId = found.id;
            }
        }
        if (!prodId) return;

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'fav-card-btn' + (isProductFavorited(prodId) ? ' active' : '');
        btn.setAttribute('data-fav-id', prodId);
        btn.setAttribute('title', 'Salvar nos Favoritos');
        btn.innerHTML = HEART_SVG;
        btn.addEventListener('click', (e) => toggleFavorite(e, prodId));

        imgBox.appendChild(btn);
    });
}

function createFavoriteList(event) {
    event.preventDefault();
    const input = document.getElementById('new-fav-list-name');
    const name = (input.value || '').trim();
    if (!name) return;

    const data = getUserFavoritesData();
    if (!data.lists[name]) {
        data.lists[name] = [];
    }
    data.activeList = name;
    saveUserFavoritesData(data);
    input.value = '';
    renderFavoritesPage();
}

function selectFavoriteList(listName) {
    const data = getUserFavoritesData();
    data.activeList = listName;
    saveUserFavoritesData(data);
    renderFavoritesPage();
}

function renderFavoritesPage() {
    const root = document.getElementById('favorites-page-root');
    if (!root) return;

    const user = getUsuarioLogado();
    if (!user) {
        root.innerHTML = `
            <div class="fav-login-gate">
                <span class="subtitle">ACESSO RESTRITO A CLIENTES</span>
                <h2>Entre na sua conta para acessar suas listas</h2>
                <p>Para visualizar, criar listas personalizadas por ambiente e salvar seus produtos favoritos da ACSA DESIGN, faça login ou crie seu cadastro gratuito.</p>
                <a href="login.html?redirect=favoritos.html" class="btn-primary">Entrar ou Cadastrar-se</a>
            </div>
        `;
        return;
    }

    const data = getUserFavoritesData();
    const listNames = Object.keys(data.lists);
    const activeList = data.lists[data.activeList] ? data.activeList : listNames[0];
    const savedIds = data.lists[activeList] || [];

    const catalogo = getCatalogo();
    const listProducts = catalogo.filter(p => savedIds.includes(String(p.id)));

    const tabsHtml = listNames.map(name => `
        <button type="button" class="filter-btn ${name === activeList ? 'active' : ''}" onclick="selectFavoriteList('${name.replace(/'/g, "\\'")}')">
            ${name} (${data.lists[name].length})
        </button>
    `).join('');

    const cardsHtml = listProducts.length > 0
        ? `<div class="product-grid">${listProducts.map(p => criarCardProdutoHTML(p)).join('')}</div>`
        : `<div class="fav-login-gate" style="max-width: 100%;">
            <h3>Nenhum produto salvo na lista "${activeList}"</h3>
            <p>Clique no coração no canto superior direito de qualquer produto do catálogo para salvá-lo aqui.</p>
            <a href="index.html#catalogo" class="btn-primary">Explorar Catálogo</a>
           </div>`;

    root.innerHTML = `
        <div class="fav-toolbar">
            <div class="fav-lists-tabs">${tabsHtml}</div>
            <form class="fav-new-list-form" onsubmit="createFavoriteList(event)">
                <input type="text" id="new-fav-list-name" placeholder="Nova lista (ex: Quarto Bebê)" required>
                <button type="submit" class="btn-outline" style="margin-top:0;">+ Criar Lista</button>
            </form>
        </div>
        ${cardsHtml}
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    injectFavoriteButtonsOnCards();
    renderFavoritesPage();

    const observer = new MutationObserver(() => {
        injectFavoriteButtonsOnCards();
    });
    observer.observe(document.body, { childList: true, subtree: true });
});

// ==========================================
// 14. PÁGINA DO CATÁLOGO COMPLETO (5 POR LINHA + TOTAL À DIREITA)
// ==========================================
let filtroPaginaCatalogoAtual = 'todos';

function redirecionarLinksCatalogo() {
    document.querySelectorAll('a[href="#catalogo"], a[href="index.html#catalogo"]').forEach(link => {
        link.setAttribute('href', 'catalogo.html');
    });
}

function filtrarPaginaCatalogo(filtro) {
    filtroPaginaCatalogoAtual = filtro || 'todos';

    document.querySelectorAll('#catalogo-filtros .filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filtro === filtroPaginaCatalogoAtual);
    });

    renderPaginaCatalogoCompleto();
}

function renderPaginaCatalogoCompleto() {
    const grid = document.getElementById('pagina-catalogo-grid');
    const totalEl = document.getElementById('catalogo-total-count');
    if (!grid) return;

    const catalogo = getCatalogo();
    const filtrados = catalogo.filter(p => {
        if (!filtroPaginaCatalogoAtual || filtroPaginaCatalogoAtual === 'todos') return true;
        return p.linha === filtroPaginaCatalogoAtual || p.categoria === filtroPaginaCatalogoAtual;
    });

    if (totalEl) {
        totalEl.innerText = `${filtrados.length} ${filtrados.length === 1 ? 'produto' : 'produtos'}`;
    }

    if (filtrados.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #888; padding: 40px 0;">Nenhum produto encontrado neste filtro.</p>`;
        return;
    }

    grid.innerHTML = filtrados.map(p => criarCardProdutoHTML(p)).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    redirecionarLinksCatalogo();
    renderPaginaCatalogoCompleto();
});