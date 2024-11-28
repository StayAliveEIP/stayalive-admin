"use client";

const apiSuspendRescuer = async (rescuerId: string) => {
  const bearerToken = localStorage.getItem('bearerToken');
  console.log("Données envoyées :", { rescuerId });

  const reason = "Suspension"

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/rescuer/suspend`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${bearerToken}`
      },
      body: JSON.stringify({
        rescuerId,
        reason
      })
    });

    if (!response.ok) {
      throw new Error(`Erreur lors de la suspension du sauveteur: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Réponse du serveur :", data);
    return data;

  } catch (error) {
    console.error("Erreur lors de la suspension du sauveteur", error);
  }
}

export default apiSuspendRescuer;
