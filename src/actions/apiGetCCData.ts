import { CallCenter, columns } from "@/app/dashboard/columns";

async function apiGetCCData(): Promise<CallCenter[]> {
    const bearerToken = localStorage.getItem('bearerToken');
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/call-center/all`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${bearerToken}`
      },
  });
    return response.json();
  }

  export default apiGetCCData;