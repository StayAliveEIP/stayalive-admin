import { Bugs } from "@/app/bugs/columns";

async function apiGetBugByID(id: string): Promise<Bugs> {
    if (!id) {
        throw new Error("L'ID est requis pour récupérer un rapport de bug.");
    }

    const bearerToken = localStorage.getItem('bearerToken');
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/report/bug/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${bearerToken}`
        },
    });

    if (!response.ok) {
        throw new Error(`Erreur lors de la récupération du rapport de bug : ${response.statusText}`);
    }

    return response.json();
}

export default apiGetBugByID;
