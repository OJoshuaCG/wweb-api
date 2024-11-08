const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth()
});


client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    console.log('QR RECEIVED', qr);
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

// client.on('message', msg => {
//     console.log("Origen:  ", msg.from);
//     console.log("Mensaje: ", msg.body);
//     console.log("Mensaje: ", msg.getInfo());
//     if (msg.body == '!ping') {
//         // send back "pong" to the chat the message was sent in
// 		client.sendMessage(msg.from, 'pong');

//         // reply back "pong" directly to the message
//         // msg.reply('pong');
//     }
// });


client.on('message', async (msg) => {
    console.log(await msg.getInfo());
    if (msg.hasMedia) {
        const media = await msg.downloadMedia();
        // do something with the media data here
    }
});

// client.on('message_create', message => {
// 	console.log(message.body);
// });

client.initialize();