const api = {
    get: (endpoint) => {
      return fetch(`https://localhost:5000${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na response');
        }
        return response.json();
      });
    },
  };
  
  export default api;
  