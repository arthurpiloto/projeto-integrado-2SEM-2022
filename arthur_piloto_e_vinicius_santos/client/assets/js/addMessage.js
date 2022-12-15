'use strict'

// Import do fetch
import { createOption } from "./utils/createElements.js"
import { postMessage } from "./fetch's/messagesFetch.js"
import { getMessageTypes, getMessageTypeIdByName } from "./fetch's/messageTypesFetch.js"

// Criando dinamicamente as opções que aparecem no select de tipo de mensagem
const messageTypesJSON = await getMessageTypes()
const createMessageTypesOption = () => {
    const container = document.querySelector('.select-message-type')
    messageTypesJSON.types.forEach(element => {
        let optionName = element.nome
        const option = createOption(optionName, optionName)
        container.appendChild(option)
    })
}
createMessageTypesOption()

// Insert da mensagem
const messageAddButton = document.querySelector('.send-message-button')
let infoMessageJson
messageAddButton.addEventListener('click', async () => {
    const selectValue = document.querySelector('.select-message-type').value

    const userName = document.querySelector('.input-name').value
    const userEmail = document.querySelector('.input-email').value
    const userPhone = document.querySelector('.input-cellphone').value
    const date = Date.now()
    const currentDate = new Date(date).toISOString().split('T')[0]
    const userMessage = document.querySelector('.input-message').value
    const idTypeMessage = await getMessageTypeIdByName(selectValue)
    
    infoMessageJson = {
        nome: userName,
        email: userEmail,
        celular: userPhone,
        data_envio: currentDate,
        mensagem: userMessage,
        id_tipo_mensagem: idTypeMessage[0].id
    }

    const insertedMessage = await postMessage(infoMessageJson)
    alert(insertedMessage)
})