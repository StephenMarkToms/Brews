import { $fetch } from 'ofetch'

export default defineEventHandler(async (event) => {
    const { size, name } = getQuery(event)
    const apiUrl = `https://api.openbrewerydb.org/v1/breweries?by_name=${name}&per_page=${size ? size : 9}`

    try {
        const breweryData = await $fetch(apiUrl)
        console.log(breweryData)
        return breweryData
    } catch (error) {
        console.error('Error fetching brewery data:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Error fetching brewery data'
        })
    }
})