"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from 'next/link';
import React, { useState } from 'react';

const CreateAdminAccountPage: React.FC = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async () => {
    const response = await fetch(`${process.env.API_URL}/admin/account/new`, {
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
    alert(data.message); // Afficher message API ou gérer
  };

return (
  <Card className="w-[333px]">
    <CardHeader>
      <CardTitle>Création de compte Administrateur</CardTitle>
    </CardHeader>
    <CardContent>
    <Input
      type="Nom"
      placeholder="Entrez votre nom"
      value={lastname}
      onChange={(e) => setLastname(e.target.value)}
    />
    <Input
      type="Prénom"
      placeholder="Entrez votre prénom"
      value={firstname}
      onChange={(e) => setFirstname(e.target.value)}
    />
    <Input
      type="Mail"
      placeholder="Entrez votre adresse e-mail"
      value={email}
          onChange={(e) => setEmail(e.target.value)}
    />
    <Input
      type="Mot de passe"
      placeholder="Entrez votre mot de passe"
    />
    <Input
      type="Confirmation du mot de passe"
      placeholder="Confirmez votre mot de passe"
    />
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button onClick={() => {/* Redirection vers la HomePage */}}>Annuler</Button>
      <Button variant="outline" onClick={handleSubmit}>Créer un compte</Button>
    </CardFooter>
    <Link href="/login">
      <Button variant="link">Déjà un compte ? Se connecter !</Button>
    </Link>
  </Card>
);
};

export default CreateAdminAccountPage;