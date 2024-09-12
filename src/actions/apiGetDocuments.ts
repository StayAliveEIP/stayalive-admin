import { Documents, columns } from "@/app/document/columns";

async function apiGetDocuments(): Promise<Documents[]> {
    const bearerToken = localStorage.getItem('bearerToken');
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/rescuer/document/all`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${bearerToken}`
      },
  });
    return response.json();
}

export default apiGetDocuments;