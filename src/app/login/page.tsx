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
import apiLogin from "@/actions/apiLogin";
import { Checkbox } from "@/components/ui/checkbox"
  
  const LoginAdminAccountPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
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
        <Link href="/dashboard">
          <Button variant="outline" onClick={() => apiLogin( email, password )}>Se connecter</Button>
        </Link>
      </CardFooter>
      <CardFooter>
      <div className="items-top flex space-x-2">
      <Checkbox id="connect" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Rester connecter
        </label>
      </div>
    </div>
      </CardFooter>
      <Link href="/signup">
        <Button variant="link">Pas de compte ? Créer un compte !</Button>
      </Link>
    </Card>
  );
};
  
  export default LoginAdminAccountPage;