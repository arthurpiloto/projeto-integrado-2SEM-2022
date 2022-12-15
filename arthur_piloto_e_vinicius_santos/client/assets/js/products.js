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
const createMenuProductsList = async () => {
    const container = document.querySelector(`.menu-products-container`)

    categoriesJSON.categories.forEach(async element => {
        const divContainer = createDiv(`menu-product-container`)
        const spanTitle = createSpan(`menu-subtitle`, element.nome)
        const ul = createUl(`menu-products-list`)

        const categoryJSON = await getProductsByCategoryName(element.nome)

        categoryJSON.products.forEach(element => {
            const li = createLi("menu-item-container")
            const infoDiv = createDiv("menu-card-product")
            const img = createImg("menu-product-image", element.foto, element.descricao)
            const spanName = createSpan("menu-product-name", element.nome_produto)
            const spanPrice = createSpan("menu-product-price", `R$${element.preco.toFixed(2)}`)

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
createMenuProductsList()

const clearProductsCards = () => {
    const cards = document.querySelectorAll('.product-container')
    cards.forEach((card) => card.remove())
}

// Criando dinamicamente os produtos de acordo com o filtro de categoria
const createProductsByCategoryName = () => {
    const select = document.querySelector('.select-category')
    select.addEventListener('change', async () => {
        const selectValue = document.querySelector('.select-category').value
        const productsByCategory = await getProductsByCategoryName(selectValue)

        if(selectValue != 'Todos') {
            clearProductsCards()
    
            
            const divContainer = createDiv(`product-container`)
            const spanTitle = createSpan(`subtitle`, selectValue)
            const ul = createUl(`products-list`)
            
            productsByCategory.products.forEach(async element => {
                const container = document.querySelector(`.products-container`)
    
                
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
        } else {
            clearProductsCards()
            createProductsList()
        }

    })
}
createProductsByCategoryName()