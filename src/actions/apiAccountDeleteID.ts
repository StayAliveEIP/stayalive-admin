"use client";

import { toast } from "sonner";

const apiAccountDeleteID = async (id: string) => {
    const bearerToken = localStorage.getItem('bearerToken');
    
    if (!id.trim()) {
        toast("L'ID du compte admin est requis.", {
            action: {
                label: "Cacher",
                onClick: () => console.log("Caché"),
            },
        });
        return;
    }

    console.log("Données envoyées :", { id });

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/account/delete`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${bearerToken}`,
            },
            body: JSON.stringify({ id })
        });

        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }

        const result = await response.json();
        console.log("Réponse de l'API :", result);

        toast(result.message || "Compte supprimé avec succès.", {
            action: {
                label: "Ok",
                onClick: () => console.log("Message caché"),
            },
        });
    } catch (error) {
        console.error("Erreur lors de la suppression du compte admin:", error);
        toast("Échec de la suppression du compte admin.", {
            action: {
                label: "Réessayer",
                onClick: () => console.log("Réessayer"),
            },
        });
    }
};

export default apiAccountDeleteID;
