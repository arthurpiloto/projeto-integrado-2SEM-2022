'use strict'

import { createDiv, createLabel, createInput } from "./utils/createElements.js";
import { getProducts, getProductByName } from "./fetch's/productsFetch.js";

const productsList = await getProducts()
const createProductsList = async () => {
    const container = document.getElementById(`div-container`)

    productsList.products.forEach(element => {
        const div = createDiv(`product`)
        const input = createInput(`product-radio`, "radio", "radio", element.nome_produto, element.nome_produto)
        const label = createLabel(`product-name`, element.nome_produto, element.nome_produto)

        div.appendChild(input)
        div.appendChild(label)
        container.appendChild(div)
    })
}
createProductsList()

// const getPromotionPrice = async () => {
//     const input = document.querySelector(`input[name="radio"]`)
//     // const inputSelected = await document.querySelector(`input[name="radio"]:checked`).value
// }