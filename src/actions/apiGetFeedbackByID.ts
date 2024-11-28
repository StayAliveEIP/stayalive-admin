import { Feedback } from "@/app/feedback/columns";

async function apiGetFeedbackByID(id: string): Promise<Feedback> {
    const bearerToken = localStorage.getItem('bearerToken');

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/report/feedback/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${bearerToken}`
        },
    });

    if (!response.ok) {
        throw new Error(`Erreur lors de la récupération du feedback : ${response.statusText}`);
    }

    return response.json();
}

export default apiGetFeedbackByID;
