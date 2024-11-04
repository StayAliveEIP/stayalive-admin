import { toast } from "sonner"

const apiAccountDelete = async (accountPassword: string) => {
  const bearerToken = localStorage.getItem('bearerToken');
    if (!accountPassword.trim()) {
        toast("Le mot de passe du compte admin est requis.", {
            action: {
              label: "Cacher",
              onClick: () => console.log("Hiden"),
            },
          });
        return;
      }
      console.log("Donne envoye :", accountPassword);
      console.log("Token :", bearerToken);
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/account/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${bearerToken}`
            },
            body: JSON.stringify({
                password: accountPassword,
            })
        });
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        console.log(response);
        const result = await response.json();
        console.log("Réponse de l'API :", result);
    } catch (error) {
        toast("Erreur lors de la suppression du compte admin:",{
            action: {
              label: "Cacher",
              onClick: () => console.log("Hiden"),
            },
          });
        console.error("Erreur lors de la suppression du compte admin:", error);
    }
}

export default apiAccountDelete;
