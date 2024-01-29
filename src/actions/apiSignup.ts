const apiSignup = async (firstname: string, lastname: string, email: string) => {
    if (!firstname.trim() || !lastname.trim() || !email.trim()) {
        alert("Veuillez remplir tous les champs.");
        return 0;
    }

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/account/new`, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                email: email,
            }),
        });
        
        const data = await response.json();

        alert(data.message);
    } catch (error) {
    console.error("Erreur lors de l'envoi des données", error);
  }
    return;
}

export default apiSignup;