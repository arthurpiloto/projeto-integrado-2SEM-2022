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

const createUl = (className, id = "") => {
    const ul = document.createElement(`ul`)
    ul.classList.add(className)
    ul.id = id

    return ul
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

const createLabel = (className, textContent, htmlFor) => {
    const label = document.createElement(`label`)
    label.classList.add(className)
    label.textContent = textContent
    label.htmlFor = htmlFor

    return label
}

const createInput = (className, type, htmlName, value, id = "") => {
    const input = document.createElement(`input`)
    input.classList.add(className)
    input.type = type
    input.name = htmlName
    input.value = value
    input.id = id

    return input
}

export {
    createDiv,
    createImg,
    createUl,
    createLi,
    createSpan,
    createOption,
    createLabel,
    createInput
}