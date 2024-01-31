import { Admin, columns } from "@/app/admin/columns";

async function apiGetAdminData(): Promise<Admin[]> {
    const bearerToken = localStorage.getItem('bearerToken');
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/account/all`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${bearerToken}`
      },
  });
    return response.json();
}

export default apiGetAdminData;