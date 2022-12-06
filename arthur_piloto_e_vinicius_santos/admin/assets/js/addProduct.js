'use strict'

// Import dos fetch's e das funções da pasta utils 
import { createOption } from "./utils/createElements.js"
import { getCategories } from "./categoriesFetch.js"
import { getTypes } from "./typesFetch.js"

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