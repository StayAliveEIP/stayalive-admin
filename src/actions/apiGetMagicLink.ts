import { toast } from "sonner"

const apiGetMagicLink = async () => {
  const bearerToken = localStorage.getItem('bearerToken');

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/auth/magic-link`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${bearerToken}`
      },
      body: JSON.stringify({
        email: 'felix.buisson@epitech.eu'
      })
    });

    if (!response.ok) {
      toast("Une erreur innatendue est survenue", {
        action: {
          label: "Cacher",
          onClick: () => console.log("Hiden"),
        },
      });
      throw new Error(`Erreur lors de la requête à l\'API :  ${response.status}`);
    } else {
      toast("Un email contenant votre Magic Link vous a été envoyé.", {
        action: {
        label: "Cacher",
        onClick: () => console.log("Hiden"),
        },
      });
    }

    const data = await response.json();
  } catch (error) {
    console.error('Une erreur s\'est produite :', error);
    return null;
  }
}

export default apiGetMagicLink;