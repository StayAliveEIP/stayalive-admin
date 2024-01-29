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

const SettingsAdmin: React.FC = () => {
    const [accountID, setAccountID] = useState('');
    const [accountFirstname, setAccountFirstname] = useState('');
    const [accountLastname, setAccountLastname] = useState('');
    const [accountEmail, setAccountEmail] = useState('');
    const [accountEmailStatus, setAccountEmailStatus] = useState('');
    const [accountPassword, setAccountPassword] = useState('');
    

    return (
      <Card className="w-[555px]">
        <CardHeader>
          <CardTitle>Info du compte</CardTitle>
        </CardHeader>
        <CardContent>Prenom: {accountFirstname}</CardContent>
        <CardContent>Nom: {accountLastname}</CardContent>
        <CardContent>Email: {accountEmail}</CardContent>
        <CardContent>Status de votre email: {accountEmailStatus ? 'Valide' : 'En attente de validation'}</CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/login">
            <Button variant="destructive" onClick={() => apiDeconnexion}>Se deconnecter</Button>
          </Link>
        </CardFooter>
        <CardFooter className="flex justify-between">
          <Button variant="destructive" onClick={() => apiAccountDeleteID(accountID)}>Supprimer votre compte (ID)</Button>
        </CardFooter>
        <CardFooter className="flex justify-between">
          <Input
            type="Mot de passe"
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
    );
};

export default SettingsAdmin;