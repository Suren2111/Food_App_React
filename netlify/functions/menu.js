// netlify/functions/menu.js

const fetch = require("node-fetch");

exports.handler = async (event) => {
  const url = event.queryStringParameters.url;

  if (!url) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing 'url' parameter" }),
    };
  }

  const decodedUrl = decodeURIComponent(url);

  // ✅ Security: Allow only Swiggy URLs
  if (!decodedUrl.startsWith("https://www.swiggy.com/")) {
    return {
      statusCode: 403,
      body: JSON.stringify({ error: "Forbidden: Invalid URL" }),
    };
  }

  try {
    const response = await fetch(decodedUrl);

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: `API Error: ${response.statusText}` }),
      };
    }

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    };
  } catch (error) {
    console.error("Serverless function error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
