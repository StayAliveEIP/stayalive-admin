import { Defibrillator } from "@/app/defibrillator/columns";

async function apiGetDefibrillatorByStatus(status: 'PENDING' | 'VALIDATED' | 'REFUSED'): Promise<Defibrillator[]> {
    const bearerToken = localStorage.getItem('bearerToken');
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/defibrillator/status?status=${status}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${bearerToken}`
        },
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

export default apiGetDefibrillatorByStatus;
