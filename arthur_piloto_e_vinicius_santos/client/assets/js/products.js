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

// Criando dinamicamente os produtos
const createProductsList = async () => {
    const container = document.querySelector(`.products-container`)

    categoriesJSON.categories.forEach(async element => {
        const divContainer = createDiv(`product-container`)
        const spanTitle = createSpan(`subtitle`, element.nome)
        const ul = createUl(`products-list`)

        const categoryJSON = await getProductsByCategoryName(element.nome)

        categoryJSON.products.forEach(element => {
            const li = createLi("item-container")
            const infoDiv = createDiv("card-product")
            const img = createImg("product-image", element.foto, element.descricao)
            const spanName = createSpan("product-name", element.nome_produto)
            const spanPrice = createSpan("product-price", `R$${element.preco.toFixed(2)}`)

            infoDiv.appendChild(img)
            infoDiv.appendChild(spanName)
            infoDiv.appendChild(spanPrice)
            li.appendChild(infoDiv)
            ul.appendChild(li)
            divContainer.appendChild(spanTitle)
            divContainer.appendChild(ul)
            container.appendChild(divContainer)
        })
    })
}
createProductsList()