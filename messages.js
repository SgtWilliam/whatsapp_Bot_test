
const messagesTemplate = {

    async firstMessage(client, message){

        client.startTyping(message.from).then().catch();
        setTimeout( async () => {
            client
                .sendText(message.from, 'Olá! Prazer, meu nome é William, salvei seu contato aqui.\n' +
                    'Se quiser já salva o meu também 🥰')
                .then()
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
            client.stopTyping(message.from).then().catch();
            //messagesTemplate.secondMessage(client, message).then().catch()
            setTimeout(()=>messagesTemplate.secondMessage(client, message).then().catch(),1000)
        }, 7000)
    },

    async secondMessage(client, message){

        client.startTyping(message.from).then().catch();
        setTimeout( async () => {
            client
                .sendText(message.from, 'Vou mostrar como funciona a nosso produto, e já te digo o preço!')
                .then()
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
            client.stopTyping(message.from).then().catch()
            setTimeout(()=>messagesTemplate.treeMessage(client, message).then().catch(),3000)


        }, 2000)
    },

    async treeMessage(client, message){
        client.startTyping(message.from).then().catch();
        setTimeout( () => {
            client
                .sendText(message.from, `Nossa máquina possuí uma qualidade incrível e um excelente acabamento com lâminas de aço carbono em um perfeito corte afiado e durável, além do material ser super seguro que não machuca a pele.
                
É completamente indicado para uso profissional de última geração com altíssimo desempenho, além é claro do seu maravilhoso design, com sua estética pequena e seu peso projetado na medida certa para facilitar os cortes, e realizar desenhos e acabamentos mais precisos. ✅
                ` )
                .then()
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
            client.stopTyping(message.from).then().catch();
            setTimeout(()=>messagesTemplate.fourMessage(client, message).then().catch(),1000)

        }, 9000)
    },

    async fourMessage(client, message){

        client.startTyping(message.from).then().catch();
        setTimeout( () => {
            client
                .sendText(message.from, 'Nossa maquina pode ser usada para:\n' +
                    '– Aparar a barba ♂\n' +
                    '– Cortar o cabelo 💇‍\n' +
                    '– Fazer o pezinho e marcações ✅\n' +
                    '– Acabamentos e disfarces 🎯\n' +
                    '– Desenhos 📝')
                .then()
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
            client.stopTyping(message.from).then().catch()
            setTimeout(()=>messagesTemplate.fiveMessage(client, message).then().catch(),1000)

        }, 20000)
    },

    async fiveMessage(client, message){

        setTimeout( () => {
            client
                .sendVideoAsGif(
                    message.from,
                    './files/video.mp4',
                    'video.mp4',
                    ''
                )

            setTimeout(()=>messagesTemplate.sixMessage(client, message).then().catch(),5000)
        }, 2000)
    },

    async sixMessage(client, message){
        client.startTyping(message.from).then().catch();
        setTimeout( () => {
            client
                .sendText(message.from, 'Ficou alguma dúvida ou posso te mandar o preço?')
                .then()
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });


        }, 1000)
    },



}

module.exports = messagesTemplate