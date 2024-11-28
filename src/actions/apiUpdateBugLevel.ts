"use server";

const apiUpdateBugLevel = async (id: string, level: number): Promise<{ error: boolean; message: string }> => {
    if (!id) {
        throw new Error("L'ID est requis pour mettre à jour le niveau du bug.");
    }
    if (typeof level !== 'number') {
        throw new Error("Le niveau (level) doit être un nombre.");
    }

    const bearerToken = localStorage.getItem('bearerToken');
    if (!bearerToken) {
        throw new Error("Token d'authentification manquant.");
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/report/bug/${id}/level`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${bearerToken}`
        },
        body: JSON.stringify({ level }),
    });

    if (!response.ok) {
        return { error: true, message: `Erreur : ${response.statusText}` };
    }

    return { error: false, message: "Le niveau du bug a été mis à jour avec succès." };
};

export default apiUpdateBugLevel;
