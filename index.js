const venom = require('venom-bot');
const messagesTemplate = require('./messages')

venom
    .create({
    session: 'testnew',
    multidevice: true,
    headless: false,
    logQR: true

})
    .then((client) => start(client))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });


function start(client) {

    client.onMessage(async (message) => {
        const messages = await client.loadAndGetAllMessagesInChat(message.from)
        if (messages.length <= 2) {
            await messagesTemplate.firstMessage(client, message);
        }



   });
};