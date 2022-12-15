'use strict'

const postMessage = async (json) => {
    const url = 'http://localhost:3030/v1/message'
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(json)
    })
    const messageData = await response.json()
    return messageData
}

export {
    postMessage
}