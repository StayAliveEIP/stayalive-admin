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

const DashboardAdmin: React.FC = () => {
    const [callCenterID, setCallCenterID] = useState('');
    const [callCenterName, setCallCenterName] = useState('');
    const [callCenterAddressStreet, setCallCenterAddressStreet] = useState('');
    const [callCenterAddressCity, setCallCenterAddressCity] = useState('');
    const [callCenterAddressZip, setCallCenterAddressSip] = useState('');
    const [callCenterPhone, setCallCenterPhone] = useState('');
    const [callCenterEmail, setCallCenterEmail] = useState('');
    const [callCenterEmailVerified, setCallCenterEmailVerified] = useState('');
    const [callCenterLastCode, setCallCenterLastCode] = useState('');
    const [callCenterAmbulance, setCallCenterAmbulance] = useState('');
    const [callCenterRescuer, setCallCenterRescuer] = useState('');

    const [rescueRescuerName, setRescueRescuerName] = useState('');
    const [rescuePlace, setRescuePlace] = useState('');
    const [rescueSuccess, setRescueSuccess] = useState('');
    const [rescueList, setRescueList] = useState('');

    const [rescuerID, setRescuerID] = useState('');
    const [rescuerList, setRescuerList] = useState('');
    const [rescuerStatus, setRescuerStatus] = useState('');

    const [map, setMap] = useState('');

    return (
      <Card className="w-[666px]">
        <CardHeader>
          <CardTitle>Info les Centre d'appel</CardTitle>
        </CardHeader>
        <CardContent>Nom: {callCenterName}</CardContent>
        <CardHeader>
          <CardTitle>Adresse:</CardTitle>
        </CardHeader>
        <CardContent>Rue: {callCenterAddressStreet}</CardContent>
        <CardContent>Ville: {callCenterAddressCity}</CardContent>
        <CardContent>Zip code: {callCenterAddressZip}</CardContent>
        <CardContent>Email: {callCenterEmail}</CardContent>
        <CardContent>Status de l'email: {callCenterEmail ? 'Valide' : 'En attente de validation'}</CardContent>
        <CardContent>Téléphone: {callCenterPhone}</CardContent>
        <CardContent>Ambulances disponibles: {callCenterAmbulance}</CardContent>
        <CardContent>Nombre de sauveteurs: {callCenterRescuer}</CardContent>
        <Link href="/dashboard/rescuers">
          <Button variant="link">Voir la liste de tout les sauveteurs</Button>
        </Link>
        <CardFooter>
          <Button variant="link">Mettre à jour les infos du centre d'appel</Button>
        </CardFooter>
        <Card className="w-[666px]">
          <CardHeader>
            <CardTitle>Dernière intervention</CardTitle>
          </CardHeader>
          <CardContent>Sauveteur: {rescueRescuerName}</CardContent>
          <CardContent>Lieu: {rescuePlace}</CardContent>
          <CardContent>Réussi: {rescueSuccess ? 'Non' : 'Oui'}</CardContent>
          <CardFooter>
            <Link href="/dashboard/rescues">
              <Button variant="link">Voir toutes les interventions</Button>
            </Link>
          </CardFooter>
        </Card>
        <Link href="/dashboard/create">
          <Button>Creer un nouveau Centre d'appel</Button>
        </Link>
        <Button variant="destructive">Supprimer un Centre d'appel</Button>
        <Button variant="link">Voir tout les Centre d'appel</Button>
        <Link href="/dashboard/settings">
          <Button variant="secondary">Paramètre administrateur</Button>
        </Link>
      </Card>
      
    );
};

export default DashboardAdmin;
