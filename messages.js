
const messagesTemplate = {

    async firstMessage(client, message){

        setTimeout( () => {
            client
                .sendText(message.from, 'Olá! Prazer, meu nome é William, salvei seu contato aqui.\n' +
                    'Se quiser já salva o meu também 🥰')
                .then()
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });

        }, 4000)
    },

    async secondMessage(client, message){
        setTimeout( () => {
            client
                .sendText(message.from, '')
                .then()
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });

        }, 4000)
    }

}

module.exports = messagesTemplate