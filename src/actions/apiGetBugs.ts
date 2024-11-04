import { Bugs } from "@/app/bugs/columns";

async function apiGetBugs(): Promise<Bugs[]> {
    const bearerToken = localStorage.getItem('bearerToken');
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/report/bug`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${bearerToken}`
      },
  });
    return response.json();
}

export default apiGetBugs;