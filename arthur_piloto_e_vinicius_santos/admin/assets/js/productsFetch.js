'use strict'

const getProducts = async () => {
    const url = `http://localhost:3030/v1/products`
    const response = await fetch(url)
    const productsData = await response.json()
    return productsData
}

export {
    getProducts
}