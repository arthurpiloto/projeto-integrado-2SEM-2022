'use strict'

const getTypes = async () => {
    const url = `http://localhost:3030/v1/product-types`
    const response = await fetch(url)
    const typesData = await response.json()
    return typesData
}

const getTypeIDByName = async (typeName) => {
    const url = `http://localhost:3030/v1/product-type-id/${typeName}`
    const response = await fetch(url)
    const typesData = await response.json()
    return typesData
}

const postType = async (json) => {
    const url = `http://localhost:3030/v1/product-type`
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(json)
    })
    const typeData = await response.json()
    return typeData
}

export {
    getTypes,
    getTypeIDByName,
    postType
}