'use strict'

import { createDiv, createImg, createLi, createSpan, createOption } from "./utils/createElements.js"
import { getCategories } from "./categoriesFetch.js"
import { getProducts } from "./productsFetch.js"
import { getTypes } from "./typesFetch.js"

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

const categoriesJSON = await getCategories()
const createCategoriesOption = () => {
    const container = document.querySelector('.category-filter')
    categoriesJSON.categories.forEach(element => {
        let optionName = element.nome

        const option = createOption("teste", optionName, optionName)

        container.appendChild(option)
    })
}
createCategoriesOption()