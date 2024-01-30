import { toast } from "sonner"

const apiDashboardCreateCC = async (callCenterName: string, callCenterEmail: string, callCenterPhone: string, callCenterAddress: { callCenterStreet: string, callCenterCity:string, callCenterZip:string }) => {
    if (!callCenterName.trim() || !callCenterEmail.trim() || !callCenterPhone.trim()) {
        toast("Veuillez remplir tous les champs.", {
            action: {
              label: "Cacher",
              onClick: () => console.log("Hiden"),
            },
          });
        return;
      }
      console.log("Données envoyées :", {callCenterName, callCenterEmail, callCenterPhone, callCenterAddress});
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/call-center/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // Token
            },
            body: JSON.stringify({
                callCenterName,
                callCenterEmail,
                callCenterPhone,
                callCenterAddress
            })
        });

        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const result = await response.json();
        console.log("Réponse de l'API :", result);
    } catch (error) {
        console.error("Erreur lors de la création du Call Center:", error);
    }
}

export default apiDashboardCreateCC;
