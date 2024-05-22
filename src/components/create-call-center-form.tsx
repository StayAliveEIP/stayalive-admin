import React, {useState} from "react";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import apiDashboardCreateCC from "@/actions/apiDashboardCreateCC";

export const CreateCallCenterForm = () => {
    const [callCenterName, setCallCenterName] = useState('');
    const [callCenterEmail, setCallCenterEmail] = useState('');
    const [callCenterPhone, setCallCenterPhone] = useState('');
    const [callCenterStreet, setCallCenterStreet] = useState('');
    const [callCenterCity, setCallCenterCity] = useState('');
    const [callCenterZip, setCallCenterZip] = useState('');

    const callCenterAddress = {callCenterStreet, callCenterCity, callCenterZip};

    return (
        <div className="flex-col items-center justify-between w-[333px] m-auto">
                <CardHeader>
                    <CardTitle>Création de Centre d&apos;Appel</CardTitle>
                </CardHeader>
                <CardContent>
                    <Label htmlFor="name">Nom</Label>
                    <Input
                        type="name"
                        placeholder="Entrez le nom du centre d'appel"
                        value={callCenterName}
                        onChange={(e) => setCallCenterName(e.target.value)}
                    />
                    <Label htmlFor="email">Email</Label>
                    <Input
                        type="email"
                        placeholder="Entrez l'email du centre d'appel"
                        value={callCenterEmail}
                        onChange={(e) => setCallCenterEmail(e.target.value)}
                    />
                    <Label htmlFor="phone">Numéro de téléphone</Label>
                    <Input
                        type="phone"
                        placeholder="Entrez le numéro de téléphone"
                        value={callCenterPhone}
                        onChange={(e) => setCallCenterPhone(e.target.value)}
                    />
                    <Label htmlFor="street">Rue</Label>
                    <Input
                        type="street"
                        placeholder="Entrez l'adresse du centre d'appel"
                        value={callCenterStreet}
                        onChange={(e) => setCallCenterStreet(e.target.value)}
                    />
                    <Label htmlFor="city">Ville</Label>
                    <Input
                        type="city"
                        placeholder="Entrez la ville du centre d'appel"
                        value={callCenterCity}
                        onChange={(e) => setCallCenterCity(e.target.value)}
                    />
                    <Label htmlFor="zip"> Zip code</Label>
                    <Input
                        type="zip"
                        placeholder="Entrez le code du centre d'appel"
                        value={callCenterZip}
                        onChange={(e) => setCallCenterZip(e.target.value)}
                    />
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Link href="/dashboard">
                        <Button variant="outline">Annuler</Button>
                    </Link>
                    <Button variant="default" onClick={async () =>
                    {
                        const response = await apiDashboardCreateCC(callCenterName, callCenterEmail, callCenterPhone, callCenterAddress)
                        if (response) {
                            window.location.href = "/dashboard"
                        }
                    }}
                    >Créer un centre d&#39;appel</Button>
                </CardFooter>
        </div>
    );
};
