import { toast } from "sonner"

const apiDashboardCreateCC = async (callCenterName: string, callCenterEmail: string, callCenterPhone: string, callCenterAddress: { callCenterStreet: string, callCenterCity:string, callCenterZip:string }) => {
    const bearerToken = localStorage.getItem('bearerToken');
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
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${bearerToken}`
            },
            body: JSON.stringify({
                name: callCenterName,
                email: callCenterEmail,
                phone: callCenterPhone,
                address: {
                    street: callCenterAddress.callCenterStreet,
                    city: callCenterAddress.callCenterCity,
                    zip: callCenterAddress.callCenterZip,
                }
            })
        });

        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const result = await response.json();
        console.log("Réponse de l'API :", result);
        toast("Le Call Center a été créé avec succès", {
            action: {
              label: "Cacher",
              onClick: () => console.log("Hiden"),
            },
          });
        return result;
    } catch (error) {
        console.error("Erreur lors de la création du Call Center:", error);
        toast("Erreur lors de la création du Call Center", {
            action: {
              label: "Cacher",
              onClick: () => console.log("Hiden"),
            },
          });
    }
}

export default apiDashboardCreateCC;
