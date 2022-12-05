'use strict'

const getTypes = async () => {
    const url = `http://localhost:3030/v1/types`
    const response = await fetch(url)
    const typesData = await response.json()
    return typesData
}