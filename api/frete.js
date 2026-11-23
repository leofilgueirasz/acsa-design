export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ erro: 'Método não permitido' });
    }

    const token = process.env.MELHOR_ENVIO_TOKEN;
    if (!token) {
        return res.status(503).json({ erro: 'Token do Melhor Envio não configurado nas variáveis da Vercel.' });
    }

    try {
        const { cepDestino, produtos, subtotal } = req.body;
        const cepLimpo = (cepDestino || '').replace(/\D/g, '');

        if (cepLimpo.length !== 8) {
            return res.status(400).json({ erro: 'CEP de destino inválido.' });
        }

        // Ambiente Oficial de Produção do Melhor Envio
        const baseUrl = process.env.MELHOR_ENVIO_SANDBOX === 'true'
            ? 'https://sandbox.melhorenvio.com.br'
            : 'https://www.melhorenvio.com.br';

        // Dimensões padrão de embalagem para rolos / revestimentos Acsa Design
        const listaProdutos = (produtos && produtos.length > 0 ? produtos : [{ quantidade: 1, preco: 189.90 }]).map((item, idx) => ({
            id: String(item.id || idx + 1),
            width: 12,
            height: 12,
            length: 58,
            weight: 1.3,
            insurance_value: Number(item.preco) || 189.90,
            quantity: Number(item.quantidade) || 1
        }));

        const resposta = await fetch(`${baseUrl}/api/v2/me/shipment/calculate`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'User-Agent': 'Acsa Design (contato@acsadesign.com.br)'
            },
            body: JSON.stringify({
                from: { postal_code: '24455340' },
                to: { postal_code: cepLimpo },
                products: listaProdutos
            })
        });

        const dados = await resposta.json();

        if (!Array.isArray(dados)) {
            return res.status(400).json({ erro: 'Resposta inválida do Melhor Envio.', detalhes: dados });
        }

        // Filtra apenas modalidades válidas e ordena da mais econômica para a mais rápida
        const opcoesValidas = dados
            .filter(op => !op.error && op.price)
            .map(op => ({
                id: String(op.id),
                transportadora: op.company?.name || 'Transportadora',
                servico: op.name,
                preco: Number(op.custom_price || op.price),
                prazoDias: Number(op.custom_delivery_time || op.delivery_time || 5)
            }))
            .sort((a, b) => a.preco - b.preco);

        // Regra Comercial Acsa Design: Frete Grátis na modalidade mais econômica acima de R$ 299,00
        if (Number(subtotal) >= 299 && opcoesValidas.length > 0) {
            opcoesValidas[0].preco = 0;
        }

        return res.status(200).json({ opcoes: opcoesValidas });
    } catch (error) {
        return res.status(500).json({ erro: 'Erro interno ao consultar o Melhor Envio.' });
    }
}