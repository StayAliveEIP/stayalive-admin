import { toast } from "sonner"

const apiGetMagicLink = async () => {

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/auth/magic-link`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'felix.buisson@epitech.eu'
      })
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la requête à l\'API');
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