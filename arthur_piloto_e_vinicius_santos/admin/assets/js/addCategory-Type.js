'use strict'

import { postCategory } from "./fetch's/categoriesFetch.js";
import { postType } from "./fetch's/typesFetch.js";

const postCategoryIngredient = async () => {
    const categoryInput = document.getElementById(`category`).value
    const typeInput = document.getElementById(`type`).value

    const categoryJson = {
        nome: categoryInput
    }
    const typeJson = {
        tipo: typeInput
    }

    if (categoryInput != '' && typeInput == '') {
        postCategory(categoryJson)
    } else if (categoryInput == '' && typeInput != '') {
        postType(typeJson)
    } else if (categoryInput != '' && typeInput != '') {
        postCategory(categoryJson)
        postType(typeJson)
    } else {
        alert(`É necessário inserir conteúdo`)
    }
}
const productButtonAdd = document.getElementById('button-save-add')
productButtonAdd.addEventListener('click', () => {
    postCategoryIngredient()
})

const productButtonExit = document.getElementById('button-exit-add')
productButtonExit.addEventListener('click', () => {
    history.back()
})