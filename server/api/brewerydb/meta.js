export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { by_name } = query;

  try {
    const url = new URL('https://api.openbrewerydb.org/v1/breweries/meta');
    
    // Only append by_name if it's provided
    if (by_name) {
      url.searchParams.append('by_name', by_name);
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching brewery metadata:', error);
    throw createError({
      statusCode: error.response?.status || 500,
      statusMessage: error.message,
    });
  }
});
