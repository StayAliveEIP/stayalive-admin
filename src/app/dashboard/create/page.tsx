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
import apiDashboardCreateCC from "@/actions/apiDashboardCreateCC";

const CreateCallCenter: React.FC = () => {
  const [callCenterName, setCallCenterName] = useState('');
  const [callCenterEmail, setCallCenterEmail] = useState('');
  const [callCenterPhone, setCallCenterPhone] = useState('');
  const [callCenterStreet, setCallCenterStreet] = useState('');
  const [callCenterCity, setCallCenterCity] = useState('');
  const [callCenterZip, setCallCenterZip] = useState('');

  const callCenterAddress = {callCenterStreet, callCenterCity, callCenterZip};

return (
  <Card className="flex-col items-center justify-between w-[333px]">
    <CardHeader>
      <CardTitle>Création de compte Administrateur</CardTitle>
    </CardHeader>
    <CardContent>
    <Input
      type="Nom"
      placeholder="Entrez le nom du centre d'appel"
      value={callCenterName}
      onChange={(e) => setCallCenterName(e.target.value)}
    />
    <Input
      type="Email"
      placeholder="Entrez l'email du centre d'appel"
      value={callCenterEmail}
      onChange={(e) => setCallCenterEmail(e.target.value)}
    />
    <Input
      type="Telephone"
      placeholder="Entrez le numero de telephone"
      value={callCenterPhone}
      onChange={(e) => setCallCenterPhone(e.target.value)}
    />
    <Input
      type="Rue"
      placeholder="Entrez l'adresse du centre d'appel"
      value={callCenterStreet}
      onChange={(e) => setCallCenterStreet(e.target.value)}
    />
    <Input
      type="Ville"
      placeholder="Entrez la ville du centre d'appel"
      value={callCenterCity}
      onChange={(e) => setCallCenterCity(e.target.value)}
    />
    <Input
      type="Zip"
      placeholder="Entrez le code du centre d'appel"
      value={callCenterZip}
      onChange={(e) => setCallCenterZip(e.target.value)}
    />
    </CardContent>
    <CardFooter className="flex justify-between">
      <Link href="/dashboard">
        <Button variant="destructive">Annuler</Button>
      </Link>
      <Link href="/dashboard">
        <Button variant="outline" onClick={() => apiDashboardCreateCC(callCenterName, callCenterEmail, callCenterPhone, callCenterAddress)}>Créer un centre d&#39;appel</Button>
      </Link>
    </CardFooter>
  </Card>
);
};
export default CreateCallCenter;