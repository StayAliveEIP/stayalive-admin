const apiDashBoardRescuerStatus = async (rescuerID: string, rescuerStatus: string) => {
    if (!rescuerID.trim()) {
        alert("L'ID du sauveteur est requis.");
        return;
      }
      console.log("Données envoyées :", {rescuerID});
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/rescuer/document/status`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // Token
            },
            body: JSON.stringify({
                rescuerID: rescuerID,
                rescuerStatus: rescuerStatus,
            })
        });

        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        console.log(response);
        const result = await response.json();
        console.log("Réponse de l'API :", result);
    } catch (error) {
        console.error("Erreur lors de la mise à jour du statut du document:", error);
    }
      
}

export default apiDashBoardRescuerStatus;
