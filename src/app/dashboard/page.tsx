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
    const [callCenterName, setCallCenterName] = useState('');
    const [callCenterAddress, setCallCenterAddress] = useState('');
    const [callCenterPhone, setCallCenterPhone] = useState('');
    const [callCenterAmbulance, setCallCenterAmbulance] = useState('');
    const [callCenterRescuer, setCallCenterRescuer] = useState('');

    const [rescueRescuerName, setRescueRescuerName] = useState('');
    const [rescuePlace, setRescuePlace] = useState('');
    const [rescueSuccess, setRescueSuccess] = useState('');
    const [rescueList, setRescueList] = useState('');

    const [rescuerList, setRescuerList] = useState('');

    const [map, setMap] = useState('');

    return (
      <Card className="w-[666px]">
        <CardHeader>
          <CardTitle>Info les Centre d'appel</CardTitle>
        </CardHeader>
        <CardContent>Nom: {callCenterName}</CardContent>
        <CardContent>Adresse: {callCenterAddress}</CardContent>
        <CardContent>Téléphone: {callCenterPhone}</CardContent>
        <CardContent>Ambulances disponibles: {callCenterAmbulance}</CardContent>
        <CardContent>Nombre de sauveteurs: {callCenterRescuer}</CardContent>
        <CardFooter>
          <Button variant="link">Voir la liste de tout les sauveteurs</Button>
        </CardFooter>
        <Card className="w-[666px]">
          <CardHeader>
            <CardTitle>Dernière intervention</CardTitle>
          </CardHeader>
          <CardContent>Sauveteur: {rescueRescuerName}</CardContent>
          <CardContent>Lieu: {rescuePlace}</CardContent>
          <CardContent>Réussi: {rescueSuccess ? 'Non' : 'Oui'}</CardContent>
          <CardFooter>
            <Button variant="link">Voir toutes les interventions</Button>
          </CardFooter>
        </Card>
        <Button>Creer un nouveau Centre d'appel</Button>
        <Button variant="link">Voir tout les Centre d'appel</Button>
      </Card>
      
    );
};

export default DashboardAdmin;
