"use client";

import { Defibrillator } from "@/app/defibrillator/columns";
import { toast } from "sonner";

async function apiGetDefibrillatorById(id: string | undefined): Promise<Defibrillator | undefined> {
    const bearerToken = localStorage.getItem('bearerToken');

    if (!id || !id.trim()) {
        toast("Veuillez ajouter l'ID du défibrillateur", {
            action: {
                label: "Cacher",
                onClick: () => console.log("Hiden"),
            },
        });
        return;
    }

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/defibrillator/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${bearerToken}`,
            },
        });

        if (!response.ok) {
            toast("L'ID est invalide ou inéxistante", {
                action: {
                    label: "Cacher",
                    onClick: () => console.log("Hiden"),
                },
            });
            return;
        }
        
        return response.json();
    } catch (error) {
        console.error("Erreur lors de la requête API", error);
        toast("Une erreur est survenue lors de la récupération du défibrillateur", {
            action: {
                label: "Cacher",
                onClick: () => console.log("Hiden"),
            },
        });
    }
}

export default apiGetDefibrillatorById;
