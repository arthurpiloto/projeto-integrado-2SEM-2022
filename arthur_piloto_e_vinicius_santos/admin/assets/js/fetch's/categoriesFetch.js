'use strict'

const getCategories = async () => {
    const url = `http://localhost:3030/v1/categories`
    const response = await fetch(url)
    const categoriesData = await response.json()
    return categoriesData
}

const getCategoryIDByName = async (categoryName) => {
    const url = `http://localhost:3030/v1/category-id/${categoryName}`
    const response = await fetch(url)
    const categoriesData = await response.json()
    return categoriesData
}

const postCategory = async (json) => {
    const url = `http://localhost:3030/v1/category`
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(json)
    })
    const categoryData = await response.json()
    return categoryData
}

export {
    getCategories,
    getCategoryIDByName,
    postCategory
}