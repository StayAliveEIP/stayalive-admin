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

const SettingsAdmin: React.FC = () => {
    const [accountID, setAccountID] = useState('');
    const [accountFirstname, setAccountFirstname] = useState('');
    const [accountLastname, setAccountLastname] = useState('');
    const [accountEmail, setAccountEmail] = useState('');
    const [accountEmailStatus, setAccountEmailStatus] = useState('');
    

    return (
      <Card className="w-[444px]">
        <CardHeader>
          <CardTitle>Info du compte</CardTitle>
        </CardHeader>
        <CardContent>Prenom: {accountFirstname}</CardContent>
        <CardContent>Nom: {accountLastname}</CardContent>
        <CardContent>Email: {accountEmail}</CardContent>
        <CardContent>Status de votre email: {accountEmailStatus ? 'Valide' : 'En attente de validation'}</CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="destructive">Se deconnecter</Button>
          <Button variant="destructive">Supprimer votre compte</Button>
        </CardFooter>
        <Link href="/dashboard">
          <Button variant="link">Retour à votre dashboard</Button>
        </Link>
      </Card>
    );
};

export default SettingsAdmin;