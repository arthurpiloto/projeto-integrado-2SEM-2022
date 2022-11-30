'use strict'

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