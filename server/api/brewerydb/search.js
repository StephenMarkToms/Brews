import { $fetch } from 'ofetch'

export default defineEventHandler(async (event) => {
    const { size, page, name } = getQuery(event)
    const apiUrl = `https://api.openbrewerydb.org/v1/breweries?per_page=${size ? size : 9}&page=${page ? page : 1}&by_name=${name}`

    try {
        const breweryData = await $fetch(apiUrl)
        return breweryData
    } catch (error) {
        console.error('Error fetching brewery data:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Error fetching brewery data'
        })
    }
})