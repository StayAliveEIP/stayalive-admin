import type { NextApiRequest, NextApiResponse } from 'next'
const apiLogin = async (email: string, password: string) => {

  if (!email.trim() || !password.trim()) {
    alert("Veuillez remplir tous les champs.");
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
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    console.log(response);
    const data = await response.json();
    console.log("Réponse reçue :", data);

    if (data.token) {
      const d = new Date();
      d.setTime(d.getTime() + (1*24*60*1000));
      const expires = "expires=" + d.toUTCString();
      document.cookie = "token=" + data.token + ";" + expires + ";/path=/";
    }

  } catch (error) {
    console.error("Erreur lors de la connexion à l'API :", error);
  }
}

export default apiLogin;