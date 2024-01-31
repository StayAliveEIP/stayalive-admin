"use server"

import {toast} from "sonner";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

export const deleteCallCenter = async (id: string, token: string) => {
    console.log(token);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/call-center/delete?id=${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    if (!response.ok) {
       return {error: true, message: "Une erreur inattendue est survenue."}
    }
    return {error: false, message: "Le Call Center a bien été supprimé."}
}
