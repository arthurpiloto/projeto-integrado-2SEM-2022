'use strict'

const getTypes = async () => {
    const url = `http://localhost:3030/v1/product-types`
    const response = await fetch(url)
    const typesData = await response.json()
    return typesData
}

const getTypeIDByName = async (typeName) => {
    const url = `http://localhost:3030/v1/product-type/${typeName}`
    const response = await fetch(url)
    const typesData = await response.json()
    return typesData
}

export {
    getTypes,
    getTypeIDByName
}