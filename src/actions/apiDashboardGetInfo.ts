import { toast } from "sonner"

const apiDashboardGetInfo = async (callCenterID: string, token: string) => {
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
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/call-center/info?id=${callCenterID}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });

        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        console.log(response);
        const data = await response.json();
        console.log("Information du call center:", data);
       return data;
    } catch (error) {
        console.error("Erreur lors de la récupération des informations:", error);
    }
}

export default apiDashboardGetInfo;
