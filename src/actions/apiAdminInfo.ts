const apiAdminInfo = async () => {
    const bearerToken = localStorage.getItem('bearerToken');
  
      console.log("Token :", bearerToken);
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/account/info`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${bearerToken}`
            },
        });
  
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
  
        console.log(response);
        const data = await response.json();
        console.log("Information du compte admin:", data);
  
        return data;
  
    } catch (error) {
        console.error("Erreur lors de la récupération des informations:", error);
        return undefined;
    }
}

export default apiAdminInfo;