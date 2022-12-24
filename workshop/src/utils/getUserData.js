
export const getUserData = (url) => {
    return fetch(url).then(checkResponse);
  };

  const checkResponse = (response) => {
    if (!response.ok) throw new Error(`Network error: ${response.status}`);
    return response.json();
  };
  




