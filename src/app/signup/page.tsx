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
import { cookies } from 'next/headers'
import apiSignup from "@/actions/apiSignup";

const SignupAdminAccountPage: React.FC = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');

return (
  <Card className="flex-col items-center justify-between w-[333px]">
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
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button onClick={() => {/* Redirection vers la HomePage */}}>Annuler</Button>
      <Link href="/login">
        <Button variant="outline" onClick={() => apiSignup( firstname, lastname, email )}>Créer un compte</Button>
      </Link>
    </CardFooter>
    <Link href="/login">
      <Button variant="link">Déjà un compte ? Se connecter !</Button>
    </Link>
  </Card>
);
};

export default SignupAdminAccountPage;