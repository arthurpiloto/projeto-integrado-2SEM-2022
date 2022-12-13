'use strict'

// Import dos fetch's e das funções da pasta utils 
import { createOption, createLabel, createInput, createDiv } from "./utils/createElements.js"
import { getCategories, getCategoryIDByName } from "./fetch's/categoriesFetch.js"
import { getTypes, getTypeIDByName } from "./fetch's/typesFetch.js"
import { getIngredients, getIngredientIDByName, postIngredient } from "./fetch's/ingredientsFetch.js"

const input = document.getElementById("product-photo")
const imageName = document.getElementById("imageName")
input.addEventListener("change", () => {
    let inputImage = document.querySelector("input[type=file]").files[0]
    imageName.innerText = inputImage.name
})

// Criando dinamicamente as opções que aparecem no select de categoria
const categoriesJSON = await getCategories()
const createCategoriesOption = () => {
    const container = document.querySelector('.category-filter')
    categoriesJSON.categories.forEach(element => {
        let optionName = element.nome
        const option = createOption(optionName, optionName)
        container.appendChild(option)
    })
}
createCategoriesOption()

// Criando dinamicamente as opções que aparecem no select de tipo
const typesJSON = await getTypes()
const createTypesOption = () => {
    const container = document.querySelector(`.type-filter`)
    typesJSON.types.forEach(element => {
        let optionTipo = element.tipo
        const option = createOption(optionTipo, optionTipo)
        container.appendChild(option)
    })
}
createTypesOption()

// Criando dinamicamente as opções que aparecem nos ingredientes
const ingredientsJSON = await getIngredients()
const createIngredientsList = () => {
    const container = document.querySelector(`.ingredient-options-container`)
    ingredientsJSON.ingredients.forEach(element => {
        if (element.status_ingrediente == 1) {
            const optionContainer = createDiv("ingredient-option")
            let inputName = element.nome
            const input = createInput("product-ingredient-checkbox-input", "checkbox", inputName, inputName, inputName)
            const label = createLabel("product-ingredient-checkbox-label", inputName, inputName)
            optionContainer.appendChild(input)
            optionContainer.appendChild(label)
            container.appendChild(optionContainer)
        }
    })
}
createIngredientsList()

// Insert de ingrediente
const ingredientButtonAdd = document.getElementById(`ingredient-button-add`)
let jsonInfoIngredient
ingredientButtonAdd.addEventListener(`click`, async () => {
    const ingredientInputInfo = document.getElementById(`product-ingredient-input`).value
    jsonInfoIngredient = {
        nome: ingredientInputInfo
    }
    await postIngredient(jsonInfoIngredient)
    location.reload(true)
})

// Insert do produto
const productButtonAdd = document.getElementById('button-save-add-product')
let jsonInfoProduct
productButtonAdd.addEventListener('click', async () => {
    const productName = document.getElementById('product-name').value
    const productPrice = document.getElementById('product-price').value
    // const productPhoto = document.getElementById('product-photo').value
    const productCategory = await getCategoryIDByName(document.getElementById(`product-category`).value)
    const productType = await getTypeIDByName(document.getElementById(`product-type`).value)
    const productDescription = document.getElementById(`product-description`).value
    const productIngredientsCheckBoxes = document.querySelectorAll(`.product-ingredient-checkbox-input:checked`)

    let checkedItems = []
    productIngredientsCheckBoxes.forEach(element => {
        checkedItems.push(element.value)
    })

    const productIngredients = []
    checkedItems.forEach(async element => {
        let ingredientJSON = {}
        const data = await getIngredientIDByName(element)
        ingredientJSON.id_ingrediente = data[0].id
        productIngredients.push(ingredientJSON)
    })
    
    jsonInfoProduct = {
        nome: productName,
        preco: productPrice,
        // foto: "https://storage.googleapis.com/senai-pizzaria.appspot.com/1669297933575.jpeg",
        id_categoria: productCategory[0].id,
        id_tipo: productType[0].id,
        descricao: productDescription,
        ingrediente: productIngredients
    }
})

const productButtonExit = document.getElementById('button-exit-add-product')
productButtonExit.addEventListener('click', () => {
    history.back()
})