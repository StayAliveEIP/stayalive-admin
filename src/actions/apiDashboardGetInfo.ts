const apiDashboardGetInfo = async (callCenterID: string) => {
    if (!callCenterID.trim()) {
        alert("L'ID du call center est requis.");
        return;
      }
      console.log("Données envoyées :", {callCenterID});
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/call-center/info/${callCenterID}`, {
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
        const data = await response.json();
        console.log("Information du call center:", data);
        // Traitement des données reçues pour les afficher dans l'interface
    } catch (error) {
        console.error("Erreur lors de la récupération des informations:", error);
    }
}

export default apiDashboardGetInfo;
