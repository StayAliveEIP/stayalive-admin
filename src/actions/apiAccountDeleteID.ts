const apiAccountDeleteID = async (accountID: string) => {
    if (!accountID.trim()) {
        alert("L'ID du compte admin est requis.");
        return;
      }
    console.log("Données envoyées :", {accountID});
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/account/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
                // Token
            },
            body: JSON.stringify({ id: accountID })
        });

        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        console.log(response);
        const result = await response.json();
        console.log("Réponse de l'API :", result);
    } catch (error) {
        console.error("Erreur lors de la suppression du compte admin:", error);
    }
}

export default apiAccountDeleteID;