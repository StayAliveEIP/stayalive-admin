"use client"

import { toast } from "sonner";

const apiRescuerDownloadDocument = async (id: string) => {
  const bearerToken = localStorage.getItem('bearerToken');

  if (!id.trim()) {
    toast.error("L'ID du sauveteur est requis.", {
      action: {
        label: "Cacher",
        onClick: () => console.log("Caché"),
      },
    });
    return;
  }

  if (!bearerToken) {
    toast.error("Le jeton d'authentification est manquant. Veuillez vous reconnecter.", {
      action: {
        label: "Reconnexion",
        onClick: () => console.log("Rediriger vers la page de connexion"),
      },
    });
    return;
  }

  console.log("Données envoyées :", { id });

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/rescuer/document/download/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${bearerToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status} ${response.statusText}`);
    }

    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = 'rescuer_document.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(downloadUrl);

    toast.success("Le document a été téléchargé avec succès.");
    
  } catch (error) {
    console.error("Erreur lors du téléchargement du document:", error);
    toast.error("Échec du téléchargement. Veuillez réessayer.");
  }
};

export default apiRescuerDownloadDocument;
