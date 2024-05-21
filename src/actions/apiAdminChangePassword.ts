import { toast } from "sonner"

const apiAdminChangePassword = async (oldPassword: string, newPassword: string) => {
    const bearerToken = localStorage.getItem('bearerToken');
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/account/password/change-password`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${bearerToken}`
        },
        body: JSON.stringify({
            oldPassword: oldPassword,
            newPassword: newPassword
        })
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
        toast("Votre mot de passe a été modifié avec succès", {
          action: {
          label: "Cacher",
          onClick: () => console.log("Hiden"),
          },
        });
      }

    const data = await response.json();
    return data.message;
}
  
export default apiAdminChangePassword;