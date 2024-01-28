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
  
  const LoginAdminAccountPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const response = await fetch(`${process.env.API_URL}/admin/auth/login`, {
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
          // Stocker le token
          localStorage.setItem('token', data.token);
          alert('Connexion réussie!');
          // Rediriger utilisateur ou mettre à jour l'état
        } else {
          // Gérer les erreurs
          alert('Erreur lors de la connexion. Veuillez vérifier vos identifiants.');
        }
      };
  
  return (
    <Card className="w-[333px]">
      <CardHeader>
        <CardTitle>Connection à un compte Administrateur</CardTitle>
      </CardHeader>
      <CardContent>
      <Input
        type="Mail"
        placeholder="Entrez votre adresse e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="Mot de passe"
        placeholder="Entrez votre mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={() => {/* Redirection vers la HomePage */}}>Annuler</Button>
        <Button variant="outline" onClick={handleLogin}>Se connecter</Button>
      </CardFooter>
      <Link href="/create">
        <Button variant="link">Pas de compte ? Créer un compte !</Button>
      </Link>
    </Card>
  );
  };
  
  export default LoginAdminAccountPage;