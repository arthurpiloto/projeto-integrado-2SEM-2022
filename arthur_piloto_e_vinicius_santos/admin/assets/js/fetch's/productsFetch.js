'use strict'

const getProducts = async () => {
    const url = `http://localhost:3030/v1/products`
    const response = await fetch(url)
    const productsData = await response.json()
    return productsData
}

const getProductsByCategoryName = async (productCategory) => {
    const url = `http://localhost:3030/v1/products/category/${productCategory}`
    const response = await fetch(url)
    const productsData = await response.json()
    return productsData
}

const postProduct = async (json) => {
    const url = `http://localhost:3030/v1/product`
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(json)
    })
    const productData = await response.json()
    return productData
}

export {
    getProducts,
    getProductsByCategoryName,
    postProduct
}