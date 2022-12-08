'use strict'

const postUser = async (json) => {
    const url = `http://localhost:3030/v1/user`
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(json)
    })
    const userData = await response.json()
    return userData
}

export {
    postUser
}