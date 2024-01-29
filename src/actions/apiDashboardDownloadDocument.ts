const apiDashboardDownloadDocument = async (documentId: string) => {
    if (!documentId.trim()) {
        alert("L'ID du sauveteur est requis.");
        return;
      }
      console.log("Données envoyées :", {documentId});
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/rescuer/document/download/${documentId}`, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }

        // Gère la réponse en tant que blob
        const blob = await response.blob();
        // Crée un URL pour le blob
        const downloadUrl = window.URL.createObjectURL(blob);
        // Crée un lien pour le téléchargement
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = 'document.pdf'; // Nomme le fichier téléchargé
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(downloadUrl); // Nettoie l'URL temporaire
    } catch (error) {
        console.error("Erreur lors du téléchargement du document:", error);
    }

}

export default apiDashboardDownloadDocument;
