'use strict'

// Import dos fetch's e das funções da pasta utils 
import { createDiv, createImg, createUl, createLi, createSpan, createOption } from "./utils/createElements.js"
import { getCategories } from "./categoriesFetch.js"
import { getProducts } from "./productsFetch.js"
import { getTypes } from "./typesFetch.js"

// Configuração do Modal
var modal = document.getElementById("modalCms")
var buttonOpenModal = document.getElementById("open-modal")
var buttonCloseModal = document.getElementById("close-modal")

buttonOpenModal.onclick = () => {
    modal.style.display = "block"
}

buttonCloseModal.onclick = () => {
    modal.style.display = "none"
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}

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

// Criando dinamicamente os produtos
const productsJSON = await getProducts()
const createPizzaMenu = () => {
    const container = document.querySelectorAll(`.product-list`)
    for (let index = 0; index < container.length; index++) {
        productsJSON.products.forEach(element => {
            const li = createLi("item-container")
            const div = createDiv("item-card")
            const img = createImg("product-image", element.foto, element.descricao)
            const spanName = createSpan("product-info", element.nome)
            const spanPrice = createSpan("product-info", `R$${element.preco.toFixed(2)}`)
    
            div.appendChild(img)
            div.appendChild(spanName)
            div.appendChild(spanPrice)
            li.appendChild(div)
            
            container[index].appendChild(li)
        })
    }
}
createPizzaMenu()