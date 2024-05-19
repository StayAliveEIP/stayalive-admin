import { toast } from "sonner"

const apiRescuerDownloadDocument = async (documentId: string) => {
    if (!documentId.trim()) {
        toast("L'ID du sauveteur est requis.", {
            action: {
              label: "Cacher",
              onClick: () => console.log("Hiden"),
            },
          });
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
        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = 'rescuer document.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
        console.error("Erreur lors du téléchargement du document:", error);
    }

}

export default apiRescuerDownloadDocument;
