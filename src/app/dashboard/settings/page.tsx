"use client"

import {
    Card,
    CardContent,
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
import apiAdminInfo from '@/actions/apiAdminInfo'
import apiGetMagicLink from '@/actions/apiGetMagicLink'

const SettingsAdmin: React.FC = () => {
    const [accountFirstname, setAccountFirstname] = useState('');
    const [accountLastname, setAccountLastname] = useState('');
    const [accountEmail, setAccountEmail] = useState('');
    const [accountEmailStatus, setAccountEmailStatus] = useState('');
    const [accountPassword, setAccountPassword] = useState('');

    function getAdminInfo() {
      apiAdminInfo().then(r=> {
        if (r != undefined) {
          setAccountFirstname(r.firstname);
          setAccountLastname(r.lastname);
          setAccountEmail(r.email);
          setAccountEmailStatus(r.emailVerified)
        }
      }).catch(e=>{});
    }

    useEffect(() => {
      getAdminInfo();
    }, [])

    return (
      <div>
      <Card className="w-[555px] m-auto mt-20">
        <CardHeader>
          <CardTitle>Info du compte</CardTitle>
        </CardHeader>
        <CardContent>
          <Label htmlFor="password">Prénom: </Label>
          <Input value={accountFirstname} onChange={(e) => setAccountFirstname(e.target.value)}></Input>
          <Label htmlFor="password">Nom: </Label>
          <Input value={accountLastname} onChange={(e) => setAccountLastname(e.target.value)}></Input>
          <Label htmlFor="password">Email: </Label>
          <Input value={accountEmail} onChange={(e) => setAccountEmail(e.target.value)}></Input>
        </CardContent>
        <CardContent>
          <Button onClick={() => apiGetMagicLink(accountEmail)}>Obtenir mon Magic Link</Button>
        </CardContent>
        <CardContent>
          <Link href="/dashboard/settings/changeemail">
            <Button>Changer mon email</Button>
          </Link>
        </CardContent>
        <CardContent>
          <Link href="/dashboard/settings/changepassword">
            <Button>Changer mon mot de passe</Button>
          </Link>
        </CardContent>
        <CardContent>Status de votre email: {accountEmailStatus ? "Verifie" : "En attente"}</CardContent>
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
          <Link href="/login">
            <Button variant="destructive" onClick={() => apiAccountDelete(accountPassword)}>Supprimer votre compte</Button>
          </Link>
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