'use strict'

const createDiv = (className, id = "") => {
    const div = document.createElement(`div`)
    div.classList.add(className)
    div.id = id

    return div
}

const createImg = (className, src, alt = "") => {
    const img = document.createElement(`img`)
    img.classList.add(className)
    img.src = src
    img.alt = alt

    return img
}

const createLi = (className, id = "") => {
    const li = document.createElement(`li`)
    li.classList.add(className)
    li.id = id

    return li
}

const createSpan = (className, textContent) => {
    const span = document.createElement(`span`)
    span.classList.add(className)
    span.textContent = textContent

    return span
}

const createOption = (value, textContent) => {
    const option = document.createElement(`option`)
    option.value = value
    option.textContent = textContent

    return option
}

export {
    createDiv,
    createImg,
    createLi,
    createSpan,
    createOption
}