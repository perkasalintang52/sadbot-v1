let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} MOTION PAY ${htka}

👋‘‹, ingin melanjutkan pembayaran?

💌 *Pembayaran*
💳 Via: Motion Pay
📞 Nomor: 081322577123
👤 A/n: Jocey Lintang
📦 Mitra: Sad Botz
💰 Metode pembayaran: Online ( ~Cod~ )


✏️ _Informasi Pembayaran_

Pembayaran Sewa hanya dapat menggunakan saldo.
Pastikan saldo kamu mencukupi untuk bertransaksi!


❗KLIK *SUDAH BAYAR* JIKA SUDAH MEMBAYAR!
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'QRIS', url: 'https://telegra.ph/file/ff71853efeb006d635a90.jpg'}},
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
handler.command = /^motionpay$/i
handler.private = true

export default handler
