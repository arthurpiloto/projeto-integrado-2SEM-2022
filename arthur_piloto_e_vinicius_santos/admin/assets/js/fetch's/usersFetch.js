'use strict'

const getUsers = async () => {
    const url = `http://localhost:3030/v1/users`
    const response = await fetch(url)
    const usersData = await response.json()
    return usersData
}


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
    getUsers,
    postUser
}