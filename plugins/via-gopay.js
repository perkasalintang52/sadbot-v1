let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} GOPAY ${htka}

Hay👋‹, ingin Donasi?

💌 *Pembayaran*
💳 Via: Gopay
📞 Nomor: 081322577123
👤 A/n: Jocey lintang
📝 Mitra: Sad Botz
💰 Metode pembayaran: Online ( ~Cod~ )


®KLIK *SUDAH BAYAR* JIKA SUDAH TRANSFER 
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Tiktok', url: 'https://tiktok.com/@joceylintangg'}},
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
handler.help = ['gopay']
handler.tags = ['info']
handler.command = /^(donasidana)$/i
handler.private = true

export default handler
