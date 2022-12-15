'use strict'

const getMessageTypes = async () => {
    const url = `http://localhost:3030/v1/message-types`
    const response = await fetch(url)
    const typesData = await response.json()
    return typesData
}

const getMessageTypeIdByName = async (messageTypeName) => {
    const url = `http://localhost:3030/v1/message-type-id/${messageTypeName}`
    const response = await fetch(url)
    const typesData = await response.json()
    return typesData
}

export {
    getMessageTypes,
    getMessageTypeIdByName
}