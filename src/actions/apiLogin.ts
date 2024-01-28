const apiLogin = async (email: string, password: string) => {
    if (!email.trim() || !password.trim()) {
        alert("Veuillez remplir tous les champs.");
        return 0;
    }

    console.log("Données envoyées :", {email, password});

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              password,
            }),
          });

        if (response.ok) {
            const data = await response.json();
            console.log("Réponse reçue :", data);
            // Stocker le token
            localStorage.setItem('token', data.token);
            alert('Connexion réussie!');
            // Rediriger utilisateur ou mettre à jour l'état
          } else {
            alert('Erreur lors de la connexion. Veuillez vérifier vos identifiants.');
        }
    } catch (error) {
        console.error("Erreur lors de l'envoi des données", error);
    }
}

export default apiLogin;