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
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import apiDashboardGetInfo from '@/actions/apiDashboardGetInfo'

const RescuerList: React.FC = () => {
  //const [callCenterID, setCallCenterID] = useState('');
  const [callCenterName, setCallCenterName] = useState('');
  const [callCenterPhone, setCallCenterPhone] = useState('');
  const [callCenterEmail, setCallCenterEmail] = useState('');
  const [callCenterEmailVerif, setCallCenterEmailVerif] = useState('');
  const [callCenterEmailCode, setCallCenterEmailCode] = useState('');
  const [callCenterStreet, setCallCenterStreet] = useState('');
  const [callCenterCity, setCallCenterCity] = useState('');
  const [callCenterZip, setCallCenterZip] = useState('');

  const callCenterID = "e65f1aw6ef1z5ef1z63ef1eafz"

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
          <CardTitle>Infos du centre d&#39;appel</CardTitle>
        </CardHeader>
        <CardContent>{callCenterName}</CardContent>
        <CardContent>{callCenterEmail}</CardContent>
        <CardContent>{callCenterPhone}</CardContent>
        <CardContent>Etat de l&#39;email : {callCenterEmailVerif}</CardContent>
        <CardContent>{callCenterStreet}</CardContent>
        <CardContent>{callCenterCity}</CardContent>
        <CardContent>{callCenterZip}</CardContent>
        <Button variant="secondary" onClick={() => apiDashboardGetInfo(callCenterID)}>Mettre à jour les info du centre d&#39;appel</Button>
        <Link href="/dashboard">
          <Button variant="link">Retour à votre dashboard</Button>
        </Link>
      </Card>
      </div>
    );
};

export default RescuerList;