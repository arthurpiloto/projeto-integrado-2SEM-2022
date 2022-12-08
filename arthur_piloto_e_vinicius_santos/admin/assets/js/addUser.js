'use strict'

// Import do fetch
import { postUser } from "./fetch's/usersFetch.js";

// Função para adicionar usuário
const userButtonAdd = document.getElementById(`button-save-add-user`)
userButtonAdd.addEventListener(`click`, async () => {
    const userNameInputInfo = document.getElementById(`user-name`).value
    const userPasswordInputInfo = document.getElementById(`user-password`).value
    const userRgInputInfo = document.getElementById(`user-rg`).value
    const userCpfInputInfo = document.getElementById(`user-cpf`).value
    const userPhoneInputInfo = document.getElementById(`user-phone`).value
    const userEmailInputInfo = document.getElementById(`user-email`).value
    let jsonInfoUser = {
        nome: userNameInputInfo,
        senha: userPasswordInputInfo,
        rg: userRgInputInfo,
        cpf: userCpfInputInfo,
        celular: userPhoneInputInfo,
        email: userEmailInputInfo
    }
    const info = await postUser(jsonInfoUser)
    alert(info)
    location.reload(true)
})

// Função para voltar para a página anterior
const userButtonExit = document.getElementById('button-exit-add-user')
userButtonExit.addEventListener('click', () => {
    history.back()
})