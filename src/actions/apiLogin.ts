
import { toast } from "sonner"

const apiLogin = async (email: string, password: string) => {

  if (!email.trim() || !password.trim()) {
    toast("Veuillez remplir tout les champs.", {
      action: {
        label: "Cacher",
        onClick: () => console.log("Hiden"),
      },
    });
    return;
  }
  console.log("Données envoyées :", {email, password});

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
      })
    });

    if (!response.ok) {
      if (response.status == 404) {
        toast("L'administrateur n'a pas pu être trouvé.", {
          action: {
          label: "Cacher",
          onClick: () => console.log("Hiden"),
          },
        });
      } else {
        toast("Une erreur inattendue est survenue.", {
          action: {
          label: "Cacher",
          onClick: () => console.log("Hiden"),
          },
        });
      }
      //throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();
    console.log("Réponse reçue :", data);
    localStorage.setItem('bearerToken', data.token);

    if (data.token) {
      const d = new Date();
      d.setTime(d.getTime() + (1*24*60*1000));
      const expires = "expires=" + d.toUTCString();
      document.cookie = "token=" + data.token + ";" + expires + ";/path=/";
    }

    return data;

  } catch (error) {
    console.error("Erreur lors de la connexion à l'API :", error);
  }
}

export default apiLogin;
