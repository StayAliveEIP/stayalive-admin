import { toast } from "sonner"

const apiDashboardDeleteCC = async (callCenterID: string) => {
    const bearerToken = localStorage.getItem('bearerToken');
    if (!callCenterID.trim()) {
        toast("L'ID du call center est requis.", {
            action: {
              label: "Cacher",
              onClick: () => console.log("Hiden"),
            },
          });
        return;
      }
      console.log("Données envoyées :", {callCenterID});
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/call-center/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${bearerToken}`
            },
            body: JSON.stringify({
                id: callCenterID
            })
        });

        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        console.log(response);
        const result = await response.json();
        console.log("Réponse de l'API :", result);
    } catch (error) {
        console.error("Erreur lors de la suppression du Call Center:", error);
    }
}

export default apiDashboardDeleteCC;