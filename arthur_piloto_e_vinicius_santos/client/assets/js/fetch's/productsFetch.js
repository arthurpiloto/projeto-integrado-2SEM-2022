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

const getProductsByTypeName = async (productType) => {
    const url = `http://localhost:3030/v1/products/type/${productType}`
    const response = await fetch(url)
    const productsData = await response.json()
    return productsData
}

export {
    getProducts,
    getProductsByCategoryName,
    getProductsByTypeName
}