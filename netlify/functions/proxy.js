export async function handler(event) {
    const targetUrl = event.queryStringParameters.url;
  
    if (!targetUrl) {
      return {
        statusCode: 400,
        body: 'Missing "url" query parameter',
      };
    }
  
    try {
      const response = await fetch(targetUrl);
      const data = await response.text();
  
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': response.headers.get('content-type') || 'text/plain',
        },
        body: data,
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: `Fetch error: ${err.message}`,
      };
    }
  }
  