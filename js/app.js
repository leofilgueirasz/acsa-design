// ==========================================
// 1. CATÁLOGO OFICIAL ACSA DESIGN (PRODUTOS REAIS)
// ==========================================
const CATALOGO_VERSAO = "v3.2";

const produtosIniciais = [
    {
        id: "papel-xadrez-marrom",
        nome: "Papel de Parede Vinílico Xadrez Marrom Claro",
        linha: "home",
        categoria: "Papel de Parede",
        subcategoria: "Xadrez",
        preco: 189.90,
        precoAntigo: 229.90,
        tipoVenda: "rolo",
        coberturaRolo: 4.3,
        imagemPrincipal: "img/papel-xadrez-marrom.webp",
        imagens: [
            "img/papel-xadrez-marrom.webp",
            "img/papel-xadrez-marrom.webp",
            "img/papel-xadrez-marrom.webp"
        ],
        descricao: "Um modelo importado que agrega estilo e sofisticação. Indicado para ambientes residenciais e comerciais.",
        fichaTecnica: {
            "Coleção": "Biarritz",
            "Padrão": "Decorativo",
            "Cor": "Marrom Claro",
            "Acabamento": "Vinílico, lavável, em alto relevo",
            "Rolo": "9,5 m × 0,53 m (cobertura de 4,3 m²)",
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
        preco: 189.90,
        precoAntigo: 229.90,
        tipoVenda: "rolo",
        coberturaRolo: 4.3,
        imagemPrincipal: "img/papel-cimento-queimado.webp",
        imagens: [
            "img/papel-cimento-queimado.webp",
            "img/papel-cimento-queimado.webp",
            "img/papel-cimento-queimado.webp"
        ],
        descricao: "O efeito cimento queimado traz um visual industrial e contemporâneo. Indicado para salas, lofts e ambientes comerciais.",
        fichaTecnica: {
            "Coleção": "Biarritz",
            "Padrão": "Cimento queimado",
            "Cor": "Cinza e Verde",
            "Acabamento": "Vinílico, lavável, em alto relevo",
            "Rolo": "9,5 m × 0,53 m (cobertura de 4,3 m²)",
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
        preco: 199.90,
        precoAntigo: 239.90,
        tipoVenda: "rolo",
        coberturaRolo: 4.3,
        imagemPrincipal: "img/papel-floral-verde.webp",
        imagens: [
            "img/papel-floral-verde.webp",
            "img/papel-floral-verde.webp",
            "img/papel-floral-verde.webp"
        ],
        descricao: "O padrão floral traz leveza, natureza e delicadeza. Indicado para quartos, salas e áreas de estar.",
        fichaTecnica: {
            "Coleção": "Valence",
            "Padrão": "Floral",
            "Cor": "Verde e Off White",
            "Acabamento": "Vinílico, lavável, com brilho, em alto relevo",
            "Rolo": "9,5 m × 0,53 m (cobertura de 4,3 m²)",
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
        preco: 199.90,
        precoAntigo: 239.90,
        tipoVenda: "rolo",
        coberturaRolo: 4.3,
        imagemPrincipal: "img/papel-damask-rosa.webp",
        imagens: [
            "img/papel-damask-rosa.webp",
            "img/papel-damask-rosa.webp",
            "img/papel-damask-rosa.webp"
        ],
        descricao: "O padrão arabesco damask traz sofisticação clássica e imponência. Indicado para salas e ambientes sofisticados.",
        fichaTecnica: {
            "Coleção": "Valence",
            "Padrão": "Arabesco/Damask",
            "Cor": "Rosa",
            "Acabamento": "Vinílico, lavável, em alto relevo",
            "Rolo": "9,5 m × 0,53 m (cobertura de 4,3 m²)",
            "Garantia": "2 anos contra defeitos de fabricação"
        },
        destaque: true
    },
    {
        id: "ripado-interno-preto-amadeirado",
        nome: "Painel Ripado Interno WPC - Preto Amadeirado - 2,90m x 0,16m",
        linha: "home",
        categoria: "Painel Ripado",
        subcategoria: "Interno",
        preco: 89.90,
        precoAntigo: 109.90,
        tipoVenda: "barra",
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
            "Medida": "2,90m x 0,16m (0,464 m² por barra)"
        },
        destaque: false
    },
    {
        id: "ripado-interno-meia-grade-cedro",
        nome: "Painel Ripado Interno WPC Meia Grade - Cedro - 1,40m x 0,16m",
        linha: "home",
        categoria: "Painel Ripado",
        subcategoria: "Interno",
        preco: 49.90,
        precoAntigo: 64.90,
        tipoVenda: "barra",
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
            "Medida": "1,40m x 0,16m (0,224 m² por barra)"
        },
        destaque: false
    },
    {
        id: "ripado-externo-preto",
        nome: "Painel Ripado Externo WPC - Preto 2,90m x 22cm",
        linha: "home",
        categoria: "Painel Ripado",
        subcategoria: "Externo",
        preco: 139.90,
        precoAntigo: 169.90,
        tipoVenda: "barra",
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
            "Medida": "2,90m x 22cm (0,638 m² por barra)"
        },
        destaque: false
    },
    {
        id: "ripado-externo-marrom",
        nome: "Painel Ripado Externo WPC - Marrom 2,90m x 22cm",
        linha: "home",
        categoria: "Painel Ripado",
        subcategoria: "Externo",
        preco: 139.90,
        precoAntigo: 169.90,
        tipoVenda: "barra",
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
            "Medida": "2,90m x 22cm (0,638 m² por barra)"
        },
        destaque: false
    },
    {
        id: "jardim-artificial-palma",
        nome: "Jardim Artificial Palma - Placa 40x60cm",
        linha: "home",
        categoria: "Jardim Artificial",
        subcategoria: "Placas 40x60cm",
        preco: 34.90,
        precoAntigo: 44.90,
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
        preco: 34.90,
        precoAntigo: 44.90,
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
        preco: 34.90,
        precoAntigo: 44.90,
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
        preco: 179.90,
        precoAntigo: 215.00,
        tipoVenda: "rolo",
        coberturaRolo: 4.3,
        estoque: 25,
        imagemPrincipal: "",
        imagens: [],
        descricao: "Estampa delicada de nuvens em aquarela sobre fundo azul pastel, ideal para quartos de recém-nascidos e ambientes serenos.",
        fichaTecnica: {
            "Coleção": "Acsa Baby Dreams",
            "Padrão": "Infantil / Lúdico",
            "Cor": "Azul Céu e Branco",
            "Acabamento": "Vinílico fosco, lavável e atóxico (sem cheiro)",
            "Medida / Rolo": "9,5 m × 0,53 m (cobertura de 4,3 m²)",
            "Garantia": "2 anos contra defeitos de fabricação"
        },
        destaque: true
    },
    {
        id: "baby-safari-aquarela",
        nome: "Papel de Parede Vinílico Safári Aquarela Bege",
        linha: "baby",
        categoria: "Papel de Parede",
        subcategoria: "Safári & Animais",
        preco: 194.90,
        precoAntigo: 235.00,
        tipoVenda: "rolo",
        coberturaRolo: 4.3,
        estoque: 20,
        imagemPrincipal: "",
        imagens: [],
        descricao: "Ilustrações suaves de animais do safári em tons terrosos e neutros, perfeito para composições montessorianas unissex.",
        fichaTecnica: {
            "Coleção": "Acsa Baby Nature",
            "Padrão": "Infantil / Safári",
            "Cor": "Bege Areia e Verde Sálvia",
            "Acabamento": "Vinílico texturizado, lavável e sem odor",
            "Medida / Rolo": "9,5 m × 0,53 m (cobertura de 4,3 m²)",
            "Garantia": "2 anos contra defeitos de fabricação"
        },
        destaque: true
    },
    {
        id: "baby-poa-rose",
        nome: "Papel de Parede Vinílico Poá Delicado Rosé",
        linha: "baby",
        categoria: "Papel de Parede",
        subcategoria: "Poá & Geométrico",
        preco: 169.90,
        precoAntigo: 199.90,
        tipoVenda: "rolo",
        coberturaRolo: 4.3,
        estoque: 30,
        imagemPrincipal: "",
        imagens: [],
        descricao: "Bolinhas minimalistas em tom rosé suave sobre base off-white, trazendo leveza e elegância atemporal ao quarto infantil.",
        fichaTecnica: {
            "Coleção": "Acsa Baby Classic",
            "Padrão": "Poá Minimalista",
            "Cor": "Off-White e Rosé",
            "Acabamento": "Vinílico fosco lavável",
            "Medida / Rolo": "9,5 m × 0,53 m (cobertura de 4,3 m²)",
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
        const sufixo = p.tipoVenda === 'rolo' ? ' / rolo' : (p.tipoVenda === 'barra' ? ' / barra' : (p.tipoVenda === 'placa' ? ' / placa' : (p.tipoVenda === 'm2' ? ' / m²' : '')));
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
function criarCardProdutoHTML(p) {
    const sufixo = p.tipoVenda === 'rolo' ? ' / rolo' : (p.tipoVenda === 'barra' ? ' / barra' : (p.tipoVenda === 'placa' ? ' / placa' : (p.tipoVenda === 'm2' ? ' / m²' : '')));
    const imgUrl = p.imagemPrincipal || (p.imagens && p.imagens[0]) || '';
    const semEstoque = Number(p.estoque ?? 0) <= 0;
    const badgeTexto = semEstoque 
        ? 'ESGOTADO' 
        : ((p.fichaTecnica && p.fichaTecnica['Coleção']) ? p.fichaTecnica['Coleção'].toUpperCase() : p.subcategoria.toUpperCase());

    return `
        <article class="product-card" style="${semEstoque ? 'opacity: 0.78;' : ''}">
            <div class="product-img" style="cursor:pointer; overflow: hidden;" onclick="abrirProdutoPorId('${p.id}')">
                <span class="badge" style="${semEstoque ? 'background: #8b2626; color: #fff;' : ''}">${badgeTexto}</span>
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
    const destaques = catalogo.filter(p => p.destaque);
    const listaExibir = destaques.length > 0 ? destaques : catalogo;

    grid.innerHTML = listaExibir.map(p => criarCardProdutoHTML(p)).join('');
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

    // 1. Tenta buscar cotação real na API (/api/frete)
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
        // Segue para simulação local caso ainda não esteja publicado na Vercel/Servidor
    }

    // 2. Fallback inteligente por faixa de CEP (enquanto testa localmente no VS Code)
    const prefixo = parseInt(cepLimpo.substring(0, 2), 10);
    let fatorDistancia = 1.0; // RJ / Sudeste próximo
    let prazoBase = 3;

    if (prefixo >= 20 && prefixo <= 28) {
        fatorDistancia = 0.85; // Estado do Rio de Janeiro
        prazoBase = 2;
    } else if (prefixo >= 1 && prefixo <= 39) {
        fatorDistancia = 1.15; // SP, ES, MG
        prazoBase = 4;
    } else if (prefixo >= 80 && prefixo <= 99) {
        fatorDistancia = 1.45; // Região Sul
        prazoBase = 6;
    } else if (prefixo >= 70 && prefixo <= 79) {
        fatorDistancia = 1.55; // Centro-Oeste
        prazoBase = 7;
    } else {
        fatorDistancia = 1.95; // Norte / Nordeste
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