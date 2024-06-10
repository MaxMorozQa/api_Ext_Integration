const fetchWrapper = async ({baseUrl, url, method = 'get', headers, body, token}) => {
    try {
      let response = await fetch(`${baseUrl}${url}`,{
      method,
      headers: {...headers, Authorization: token, 'Content-Type':'application/json'},
      body: JSON.stringify(body)
    });
    let result = await response.json();
    if (response.ok) {
      return result
    } else {
      let error = `${response.status}: ${result?.result?.message || 'Неизвестная ошибка'}`;
      throw new Error(error);
     }
    } catch (error) {
      throw error;
     }
    };

    module.exports = fetchWrapper;