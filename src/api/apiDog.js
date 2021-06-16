const BASE_URL = process.env.REACT_APP_API_BASE_URL

const fecthDogList = async () => {
    const url = `${BASE_URL}breeds/list/all`
    try {
        const response = await fetch(url)
        const { status, message } = await response.json()
        if (status !== 'success') {
            throw new Error(`Error: ${status}`)
        }
        const arrDog = Object.keys(message)
        return arrDog
    } catch (error) {
        throw new Error(
            `Error al obtener la lista de perritos: ${error.message}`
        )
    }
}

const fecthDogImage = async (raza) => {
    const url = `${BASE_URL}breed/${raza}/images`
    try {
        const response = await fetch(url)
        const { status, message } = await response.json()

        if (status !== 'success') {
            throw new Error(`No se puede encontrar la raza de perro ${raza}`)
        }
        return message
    } catch (error) {
        throw new Error(`Error al obtener la raza : ${raza}: ${error.message}`)
    }
}

export { fecthDogImage, fecthDogList }
