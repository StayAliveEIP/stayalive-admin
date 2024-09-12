"use server"

import {toast} from "sonner";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

const apiDefebrillatorRefused = async (_id: string, token: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/defibrillator/update-status`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            id: _id,
            status: "REFUSED"
        })
    });
    if (!response.ok) {
        return {error: true, message: "Une erreur inattendue est survenue."}
     }
     return {error: false, message: "Status mis à jour !"}
}

export default apiDefebrillatorRefused;