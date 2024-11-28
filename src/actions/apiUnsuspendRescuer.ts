"use client";

const apiUnsuspendRescuer = async (id: string) => {
  const bearerToken = localStorage.getItem('bearerToken');
  
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/rescuer/unsuspend/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${bearerToken}`
      }
    });

    if (response.ok) {
      const data = await response.json();
      console.log({
        message: "Your request was successfully performed!",
        response: data
      });
    } else {
      console.error("Failed to unsuspend rescuer:", response.statusText);
    }
  } catch (error) {
    console.error("Erreur lors de la désuspension du sauveteur", error);
  }
}

export default apiUnsuspendRescuer;