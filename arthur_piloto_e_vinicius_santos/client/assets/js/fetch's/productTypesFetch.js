'use strict'

const getProductTypes = async () => {
    const url = `http://localhost:3030/v1/product-types`
    const response = await fetch(url)
    const typesData = await response.json()
    return typesData
}

export {
    getProductTypes
}