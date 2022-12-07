'use strict'

// Import dos fetch's e das funções da pasta utils 
import { createOption, createLabel, createInput, createDiv } from "./utils/createElements.js"
import { getCategories } from "./categoriesFetch.js"
import { getTypes } from "./typesFetch.js"
import { getIngredients, postIngredient } from "./ingredientsFetch.js"

const input = document.getElementById("product-photo")
const imageName = document.getElementById("imageName")
input.addEventListener("change", () => {
    let inputImage = document.querySelector("input[type=file]").files[0]
    imageName.innerText = inputImage.name
})

// Criando dinamicamete as opções que aparecem no select de categoria
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

// Criando dinamicamete as opções que aparecem no select de tipo
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

const ingredientButtonAdd = document.getElementById(`ingredient-button-add`)
let jsonInfo
ingredientButtonAdd.addEventListener(`click`, async () => {
    const ingredientInputInfo = document.getElementById(`product-ingredient`).value
    jsonInfo = {
        nome: ingredientInputInfo
    }
    const info = await postIngredient(jsonInfo)
    alert(info)
    location.reload(true)
})