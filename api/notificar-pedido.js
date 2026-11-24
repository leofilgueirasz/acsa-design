export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ erro: 'Método não permitido' });
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
        return res.status(200).json({ aviso: 'RESEND_API_KEY não configurada; notificação registrada localmente.' });
    }

    try {
        const { pedido, tipoEvento } = req.body;
        if (!pedido || !pedido.email) {
            return res.status(400).json({ erro: 'Dados do pedido ou e-mail do cliente ausentes.' });
        }

        const isNovo = tipoEvento === 'criacao';
        const assunto = isNovo
            ? `Pedido ${pedido.id} Confirmado | Acsa Design`
            : `Atualização do Pedido ${pedido.id}: ${pedido.status} | Acsa Design`;

        const tituloEmail = isNovo
            ? 'Recebemos o seu pedido!'
            : `Status atualizado: ${pedido.status}`;

        const mensagemIntro = isNovo
            ? `Olá, <strong>${pedido.cliente}</strong>! Seu pedido na <strong>Acsa Design</strong> foi registrado com sucesso e já está em processamento.`
            : `Olá, <strong>${pedido.cliente}</strong>! O andamento do seu pedido <strong>${pedido.id}</strong> foi atualizado pela nossa equipe.`;

        const htmlEmail = `
            <div style="font-family: 'Montserrat', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #CFCFCF; background: #FFFFFF; color: #545454;">
                <div style="background: #1a1816; padding: 24px; text-align: center; border-bottom: 3px solid #E6C068;">
                    <span style="font-size: 22px; letter-spacing: 4px; color: #FFFFFF; font-weight: 600;">ACSA <span style="color: #E6C068; font-weight: 300;">DESIGN</span></span>
                </div>
                <div style="padding: 32px 28px;">
                    <span style="font-size: 11px; letter-spacing: 2px; color: #E6C068; font-weight: 700; text-transform: uppercase;">ACOMPANHAMENTO DE PEDIDO</span>
                    <h2 style="margin: 8px 0 16px 0; color: #1a1816; font-size: 22px;">${tituloEmail}</h2>
                    <p style="font-size: 14px; line-height: 1.6; margin-bottom: 20px;">${mensagemIntro}</p>

                    <div style="background: #F9F9F9; border: 1px solid #CFCFCF; padding: 18px; margin-bottom: 24px; font-size: 13px;">
                        <p style="margin: 0 0 8px 0;"><strong>Código do Pedido:</strong> ${pedido.id}</p>
                        <p style="margin: 0 0 8px 0;"><strong>Status Atual:</strong> <span style="color: #b88b28; font-weight: 700;">${pedido.status || 'Confirmado'}</span></p>
                        <p style="margin: 0 0 8px 0;"><strong>Itens / Entrega:</strong> ${pedido.itemResumo}</p>
                        <p style="margin: 0;"><strong>Valor Total:</strong> R$ ${Number(pedido.valorTotal).toFixed(2).replace('.', ',')} (${pedido.pagamento})</p>
                    </div>

                    <p style="font-size: 13px; line-height: 1.6; color: #666;">
                        Você pode acompanhar cada etapa a qualquer momento acessando a área <strong>Minha Conta</strong> em nosso site com seu e-mail e senha.
                    </p>
                </div>
                <div style="background: #F9F9F9; padding: 18px; text-align: center; font-size: 11px; color: #888; border-top: 1px solid #CFCFCF;">
                    Acsa Design • Home & Baby • São Gonçalo / Niterói - RJ<br>
                    Dúvidas? Fale conosco pelo WhatsApp: (21) 97684-6510
                </div>
            </div>
        `;

        const resposta = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${resendKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: 'Acsa Design <onboarding@resend.dev>',
                to: [pedido.email],
                subject: assunto,
                html: htmlEmail
            })
        });

        const data = await resposta.json();
        return res.status(200).json({ enviado: true, id: data.id || null });
    } catch (error) {
        return res.status(500).json({ erro: 'Falha ao disparar e-mail de notificação.' });
    }
}