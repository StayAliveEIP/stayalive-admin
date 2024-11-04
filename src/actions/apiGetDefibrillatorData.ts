import { Defibrillator } from "@/app/defibrillator/columns";

async function apiGetDefibrillatorData(): Promise<Defibrillator[]> {
    const bearerToken = localStorage.getItem('bearerToken');
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/defibrillator/all`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${bearerToken}`
      },
  });
    return response.json();
  }

  export default apiGetDefibrillatorData;