'use strict'

const getIngredients = async () => {
    const url = `http://localhost:3030/v1/ingredients`
    const response = await fetch(url)
    const ingredientsData = await response.json()
    return ingredientsData
}

const postIngredient = async (json) => {
    const url = `http://localhost:3030/v1/ingredient`
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(json)
    })
    const ingredientData = await response.status()
    return ingredientData
}

// const deleteIngredient = async (id) => {
//     const url = `http://localhost:3030/v1/ingredient/delete/${id}`
//     const response = await fetch(url, {
//         method: 'put',
//         headers: {
//             'Content-type' : 'application/json'
//         },
//         body: JSON.stringify(json) 
//     })
//     const ingredientData = await response.json()
    
// }

export {
    getIngredients,
    postIngredient
}