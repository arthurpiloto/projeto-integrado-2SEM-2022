'use strict'

const getCategories = async () => {
    const url = `http://localhost:3030/v1/categories`
    const response = await fetch(url)
    const categoriesData = await response.json()
    return categoriesData
}

export {
    getCategories
}