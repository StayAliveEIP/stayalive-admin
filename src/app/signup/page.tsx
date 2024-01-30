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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {Label} from "@/components/ui/label";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

const SignupAdminAccountPage: React.FC = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');

return (
  <div>
      <Menubar className="flex justify-between w-[1369px] m-auto mt-2">
        <MenubarMenu>
          <Link href="/signup">
            <MenubarTrigger>Créer un compte Admin</MenubarTrigger>
          </Link>
          <Link href="/login">
            <MenubarTrigger>Se connecter à un compte Admin</MenubarTrigger>
          </Link>
          <Link href="/admin">
            <MenubarTrigger>Liste des Admins</MenubarTrigger>
          </Link>
          <Link href="/dashboard">
            <MenubarTrigger>Dashboard Administrateur</MenubarTrigger>
          </Link>
        </MenubarMenu>
      </Menubar>
  <Card className="w-[333px]  m-auto mt-20">
    <Avatar className="m-auto mt-5">
        <AvatarImage src="https://cdn.discordapp.com/attachments/1130401857890697285/1190320898281066607/logo_Background_Removed.png?ex=65c649b9&is=65b3d4b9&hm=cf3172e52f346ff143dc992987a9a9dbe37e7baf1044928746c16f1637aa9ce1&" />
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
      <Button onClick={() => apiSignup( firstname, lastname, email )}>Créer un compte</Button>
    </CardFooter>
  </Card>
  </div>
);
};

export default SignupAdminAccountPage;