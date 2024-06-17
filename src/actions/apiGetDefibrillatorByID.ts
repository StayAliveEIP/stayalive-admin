import { Defibrillator, columns } from "@/app/defibrillator/columns";
import { toast } from "sonner"

async function apiGetDefibrillatorById(id: string): Promise<Defibrillator> {
    const bearerToken = localStorage.getItem('bearerToken');
    if (!id.trim()) {
      toast("Veuillez ajouter l'ID du défibrillateur", {
          action: {
            label: "Cacher",
            onClick: () => console.log("Hiden"),
          },
        });
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/defibrillator/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${bearerToken}`
        },
    });
    if (!response.ok) {
      toast("L'ID est invalide ou inéxistante", {
        action: {
          label: "Cacher",
          onClick: () => console.log("Hiden"),
        },
      });
    }
    return response.json();
}

export default apiGetDefibrillatorById;
