"use client"

import { Rescuers, columns } from "@/app/dashboard/rescuers/columns";

async function apiGetRescuers(): Promise<Rescuers[]> {
    const bearerToken = localStorage.getItem('bearerToken');
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/rescuer/all`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${bearerToken}`
      },
  });
    return response.json();
}

export default apiGetRescuers;