export async function handler(event) {
    const url = decodeURIComponent(event.queryStringParameters.url);
  
    try {
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0',
        },
      });
  
      const data = await response.text(); // text to preserve content-type
      return {
        statusCode: response.status,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': response.headers.get('content-type'),
        },
        body: data,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Fetch failed', message: error.message }),
      };
    }
  }
  