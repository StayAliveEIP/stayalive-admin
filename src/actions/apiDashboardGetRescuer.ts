const apiDashboardGetRescuer = async (rescuerID: string) => {
    if (!rescuerID.trim()) {
        alert("L'ID du sauveteur est requis.");
        return;
      }
      console.log("Données envoyées :", {rescuerID});
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/rescuer/document/all`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
                // Token
            },
        });

        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        console.log(response);
        const documents = await response.json();
        console.log("Documents du sauveteur:", documents);
        // Traitement des données reçues pour les afficher dans l'interface
    } catch (error) {
        console.error("Erreur lors de la récupération des documents du sauveteur:", error);
    }
}

export default apiDashboardGetRescuer;
