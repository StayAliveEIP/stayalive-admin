import { toast } from "sonner"

const apiAdminChangeEmail = async (email: string) => {
    const bearerToken = localStorage.getItem('bearerToken');
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/account/change-email`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${bearerToken}`
        },
        body: JSON.stringify({ email: email })
    });

    if (!response.ok) {
        toast("Une erreur innatendue est survenue", {
            action: {
              label: "Cacher",
              onClick: () => console.log("Hiden"),
            },
          });
        throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
        toast("Votre email a été modifié avec succès", {
          action: {
          label: "Cacher",
          onClick: () => console.log("Hiden"),
          },
        });
      }
      
      const data = await response.json();
      return data.message;
}
  
export default apiAdminChangeEmail;