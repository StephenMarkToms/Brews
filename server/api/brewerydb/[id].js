import { $fetch } from 'ofetch'

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    const apiUrl = `https://api.openbrewerydb.org/v1/breweries/${id}`

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