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
import Link from 'next/link';
import { useEffect, useState } from 'react';
import apiAccountDeleteID from '@/actions/apiAccountDeleteID'
import { Input } from "@/components/ui/input";
import apiAccountDelete from '@/actions/apiAccountDelete'
import apiDeconnexion from '@/actions/apiDeconnexion'
import {Label} from "@/components/ui/label";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

const SettingsAdmin: React.FC = () => {
    const [accountID, setAccountID] = useState('');
    const [accountFirstname, setAccountFirstname] = useState('');
    const [accountLastname, setAccountLastname] = useState('');
    const [accountEmail, setAccountEmail] = useState('');
    const [accountEmailStatus, setAccountEmailStatus] = useState('');
    const [accountPassword, setAccountPassword] = useState('');
    

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
      <Card className="w-[555px] m-auto mt-20">
        <CardHeader>
          <CardTitle>Info du compte</CardTitle>
        </CardHeader>
        <CardContent>Prenom: John {accountFirstname}</CardContent>
        <CardContent>Nom: Doe {accountLastname}</CardContent>
        <CardContent>Email: jonh@doe.net {accountEmail}</CardContent>
        <CardContent>Status de votre email: {accountEmailStatus ? 'Valide' : 'En attente de validation'}</CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/login">
            <Button variant="destructive" onClick={() => apiDeconnexion}>Se deconnecter</Button>
          </Link>
        </CardFooter>
        <Label htmlFor="password" className="mx-5">Mot de passe</Label>
        <CardFooter className="flex justify-between">
          <Input
            type="password"
            placeholder="Entrez votre mot de passe"
            value={accountPassword}
            onChange={(e) => setAccountPassword(e.target.value)}
          />
          <Button variant="destructive" onClick={() => apiAccountDelete(accountPassword)}>Supprimer votre compte</Button>
        </CardFooter>
        <Link href="/dashboard">
          <Button variant="link">Retour à votre dashboard</Button>
        </Link>
      </Card>
      </div>
    );
};

export default SettingsAdmin;

/*
        <CardFooter className="flex justify-between">
          <Button variant="destructive" onClick={() => apiAccountDeleteID(accountID)}>Supprimer votre compte (ID)</Button>
        </CardFooter>
*/