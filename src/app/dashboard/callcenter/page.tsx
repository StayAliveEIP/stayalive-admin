"use client"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useEffect, useState } from 'react';

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
        <Link href="/dashboard">
          <Button variant="link">Retour à votre dashboard</Button>
        </Link>
      </Card>
      </div>
    );
};

export default RescuerList;
