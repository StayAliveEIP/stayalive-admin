"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useState } from 'react';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import Link from 'next/link';
import {Navbar} from "@/components/navbar";
import apiSignup from "@/actions/apiSignup";

const SignupAdminAccountPage: React.FC = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');

return (
  <div>
    <Navbar/>
  <Card className="w-[333px]  m-auto mt-20">
    <Avatar className="m-auto mt-5">
        <AvatarImage src="https://media.discordapp.net/attachments/1130401857890697285/1190320898281066607/logo_Background_Removed.png?ex=664ebcf9&is=664d6b79&hm=095ea7e28966e1f05a0503a77c729634684994cb9feb239cab68660aab5edb8a&=&format=webp&quality=lossless&width=585&height=568" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    <CardHeader>
      <CardTitle>Création de compte Administrateur</CardTitle>
    </CardHeader>
    <CardContent>
    <Label htmlFor="lastname">Nom</Label>
    <Input
      type="lastname"
      placeholder="Entrez votre nom"
      value={lastname}
      onChange={(e) => setLastname(e.target.value)}
    />
    <Label htmlFor="firstname">Prénom</Label>
    <Input
      type="firstname"
      placeholder="Entrez votre prénom"
      value={firstname}
      onChange={(e) => setFirstname(e.target.value)}
    />
    <Label htmlFor="email">Email</Label>
    <Input
      type="email"
      placeholder="Entrez votre adresse e-mail"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    </CardContent>
    <CardFooter className="flex justify-between">
      <Link href="/admin">
        <Button onClick={() => apiSignup( firstname, lastname, email )}>Créer un compte</Button>
      </Link>
    </CardFooter>
  </Card>
  </div>
);
};

export default SignupAdminAccountPage;
