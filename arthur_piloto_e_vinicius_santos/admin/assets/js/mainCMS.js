'use strict'

// Import dos fetch's e das funções da pasta utils 
import { createDiv, createImg, createUl, createLi, createSpan, createOption } from "./utils/createElements.js"
import { getCategories } from "./fetch's/categoriesFetch.js"
import { getProductsByCategoryName } from "./fetch's/productsFetch.js"
import { getTypes } from "./fetch's/typesFetch.js"
import { getUsers } from "./fetch's/usersFetch.js";

const categoriesJSON = await getCategories()
const typesJSON = await getTypes()
const usersJSON = await getUsers()

// Configuração do Modal
const modal = document.getElementById("modalCms")
const buttonOpenModal = document.getElementById("open-modal")
const buttonCloseModal = document.getElementById("close-modal")

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
const createCategoriesOption = () => {
    const container = document.querySelector('.category-filter')
    categoriesJSON.categories.forEach(element => {
        const optionName = element.nome
        const option = createOption(optionName, optionName)
        container.appendChild(option)
    })
}
createCategoriesOption()

// Criando dinamicamete as opções que aparecem no select de tipo
const createTypesOption = () => {
    const container = document.querySelector(`.type-filter`)
    typesJSON.types.forEach(element => {
        const optionTipo = element.tipo
        const option = createOption(optionTipo, optionTipo)
        container.appendChild(option)
    })
}
createTypesOption()

// Criando dinamicamente os produtos
const createProductsList = async () => {
    const container = document.getElementById(`menu-container`)

    categoriesJSON.categories.forEach(async element => {
        const divContainer = createDiv(`product-container`)
        const spanTitle = createSpan(`product-title`, element.nome)
        const ul = createUl(`product-list`)

        const categoryJSON = await getProductsByCategoryName(element.nome)

        categoryJSON.products.forEach(element => {
            const li = createLi("item-container")
            const infoDiv = createDiv("item-card")
            const img = createImg("product-image", element.foto, element.descricao)
            const spanName = createSpan("product-info", element.nome_produto)
            const spanPrice = createSpan("product-info", `R$${element.preco.toFixed(2)}`)

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

// Criando dinamicamente os usuários
const createUsersList = () => {
    const container = document.querySelector(`.users-list`)
    usersJSON.users.forEach(element => {
        const li = createLi("item-container")
        const div = createDiv("item-card")
        const img = createImg("user-image", "https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png")
        const infoDiv = createDiv("user-info-container")
        const spanName = createSpan("user-info", element.nome)
        const spanEmail = createSpan("user-info", element.email)

        infoDiv.appendChild(spanName)
        infoDiv.appendChild(spanEmail)
        div.appendChild(img)
        div.appendChild(infoDiv)
        li.appendChild(div)
        container.appendChild(li)
    })
}
createUsersList()

const clearProductsCards = () => {
    const cards = document.querySelectorAll('.product-container')
    cards.forEach((card) => card.remove())
}

// Criando dinamicamente os produtos de acordo com o filtro de categoria
const createProductsByCategoryName = () => {
    const select = document.querySelector('.category-filter')
    select.addEventListener('change', async () => {
        const selectValue = document.querySelector('.category-filter').value
        const productsByCategory = await getProductsByCategoryName(selectValue)

        if(selectValue != 'Todos') {
            clearProductsCards()
    
            
            const divContainer = createDiv(`product-container`)
            const spanTitle = createSpan(`product-title`, selectValue)
            const ul = createUl(`product-list`)
            
            productsByCategory.products.forEach(async element => {
                const container = document.getElementById(`menu-container`)
    
                
                const li = createLi("item-container")
                const infoDiv = createDiv("item-card")
                const img = createImg("product-image", element.foto, element.descricao)
                const spanName = createSpan("product-info", element.nome_produto)
                const spanPrice = createSpan("product-info", `R$${element.preco.toFixed(2)}`)
    
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