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

const createLabel = (className, forCamp, textContent) => {
    const label = document.createElement(`label`)
    label.classList.add(className)
    label.htmlFor = forCamp
    label.textContent = textContent

    return label
}

const createSelect = (className, id = "", htmlName = "") => {
    const select = document.createElement(`select`)
    select.classList.add(className)
    select.id = id
    select.name = htmlName

    return select
}

const createOption = (className, value) => {
    const option = document.createElement(`option`)
    option.classList.add(className)
    option.value = value

    return option
}