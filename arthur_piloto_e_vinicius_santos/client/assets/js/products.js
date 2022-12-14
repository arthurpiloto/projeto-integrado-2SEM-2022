'use strict'

// Import dos fetch's e das funções da pasta utils 
import { createDiv, createImg, createUl, createLi, createSpan, createOption } from "./utils/createElements.js"
import { getCategories } from "./fetch's/categoriesFetch.js"
import { getProductsByCategoryName } from "./fetch's/productsFetch.js"
import { getTypes } from "./fetch's/typesFetch.js"

const categoriesJSON = await getCategories()
const typesJSON = await getTypes()

// Criando dinamicamete as opções que aparecem no select de categoria
const createCategoriesOption = () => {
    const container = document.querySelector('.select-category')
    categoriesJSON.categories.forEach(element => {
        const optionName = element.nome
        const option = createOption(optionName, optionName)
        container.appendChild(option)
    })
}
createCategoriesOption()

// Criando dinamicamete as opções que aparecem no select de tipo
const createTypesOption = () => {
    const container = document.querySelector(`.select-type`)
    typesJSON.types.forEach(element => {
        const optionTipo = element.tipo
        const option = createOption(optionTipo, optionTipo)
        container.appendChild(option)
    })
}
createTypesOption()