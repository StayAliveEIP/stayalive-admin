import { Feedback, columns } from "@/app/feedback/columns";

async function apiGetFeedback(): Promise<Feedback[]> {
    const bearerToken = localStorage.getItem('bearerToken');
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/report/feedback`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${bearerToken}`
      },
  });
    return response.json();
}

export default apiGetFeedback;