"use client"

import { Documents, columns } from "@/app/document/columns"; 
import { toast } from "sonner"

const apiRescuerGetDocument = async (rescuerId: string): Promise<Documents[]> => {
  const bearerToken = localStorage.getItem('bearerToken');
  console.log("Données envoyées :", { rescuerId });
  
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/rescuer/document/all?rescuerId=${rescuerId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${bearerToken}`
      },
    });

    if (response.ok) {
      const responseBody: Documents[] = await response.json();
      console.log("Réponse reçue :", responseBody);
      return responseBody;
    } else {
      console.error("Erreur: ", response.status, response.statusText);
      throw new Error(`Erreur: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des documents du sauveteur:", error);
    throw new Error("Erreur lors de la récupération des documents");
  }
}

export default apiRescuerGetDocument;