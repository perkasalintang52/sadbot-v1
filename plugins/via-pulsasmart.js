let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} DANA ${htka}

Hay👋‹, ingin Donasi?

💌 *Pembayaran*
💳 Via: Dana 
📞 Nomor: 081322577123
👤 A/n: Jocey lintang
📝 Mitra: Sad Botz
💰 Metode pembayaran: Online ( ~Cod~ )


®KLIK *SUDAH BAYAR* JIKA SUDAH TRANSFER 
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Saweria', url: 'https://saweria.co/joceylintangg'}},
    {index: 4, quickReplyButton: {displayText: 'Sudah membayar', id: '.sudahbayar'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['smart']
handler.tags = ['info']
handler.command = /^(donasismartften)$/i
handler.private = true

export default handler
