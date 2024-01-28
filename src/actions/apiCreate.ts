const apiCreate = async (firstname: string, lastname: string, email: string) => {
    if (!firstname.trim() || !lastname.trim() || !email.trim()) {
        alert("Veuillez remplir tous les champs.");
        return 0;
    }

    console.log("Données envoyées :", {firstname, lastname, email});

    try {
        const response = await fetch(`${process.env.API_URL}admin/account/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstname,
                lastname,
                email,
            }),
        });
        const data = await response.json();

        console.log("Réponse reçue :", data);

        alert(data.message);
    } catch (error) {
    console.error("Erreur lors de l'envoi des données", error);
  }
    return;
}

export default apiCreate;