import React, {useState} from "react";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import apiGetDefibrillatorData from '@/actions/apiGetDefibrillatorData'
import apiGetDefibrillatorByStatus from '@/actions/apiGetDefibrillatorByStatus'
import apiGetDefibrillatorByID from '@/actions/apiGetDefibrillatorByID'
import {Globe, CheckCircle, Clock, MinusCircle, Search} from "lucide-react";

export const SelectDefibrillator = () => {
    const [defibrillatorID, setDefibrillatorID] = useState('');

    return (
        <div className="flex-col items-center justify-between w-[333px] m-auto">
                <CardHeader>
                    <CardTitle>Option d&apos;affichage</CardTitle>
                </CardHeader>
                <CardContent>
                    <Button variant="default" onClick={async () =>
                        {
                            const response = await apiGetDefibrillatorData()
                            if (response) {
                                window.location.href = "/defibrillator"
                            }
                        }}
                    >
                        <Globe className={"mr-2 h-4 w-4"}/>
                        Afficher tout les défibrillateurs
                    </Button>
                </CardContent>
                <CardContent>
                    <Button variant="default" onClick={async () =>
                        {
                            const response = await apiGetDefibrillatorByStatus('VALIDATED')
                            if (response) {
                                window.location.href = "/defibrillator/validated"
                            }
                        }}
                    >
                        <CheckCircle className={"mr-2 h-4 w-4"}/>
                        Afficher les défibrillateurs validés
                    </Button>
                    </CardContent>
                    <CardContent>
                    <Button variant="default" onClick={async () =>
                        {
                            const response = await apiGetDefibrillatorByStatus('PENDING')
                            if (response) {
                                window.location.href = "/defibrillator/pending"
                            }
                        }}
                    >
                        <Clock className={"mr-2 h-4 w-4"}/>
                        Afficher les défibrillateurs en attente
                    </Button>
                    </CardContent>
                    <CardContent>
                    <Button variant="default" onClick={async () =>
                        {
                            const response = await apiGetDefibrillatorByStatus('REFUSED')
                            if (response) {
                                window.location.href = "/defibrillator/refused"
                            }
                        }}
                    >
                        <MinusCircle className={"mr-2 h-4 w-4"}/>
                        Afficher les défibrillateurs refusés
                    </Button>
                    </CardContent>
                    <CardContent>
                    <Input
                        type="id"
                        placeholder="Entrez l'ID du défibrillateurs"
                        value={defibrillatorID}
                        onChange={(e) => setDefibrillatorID(e.target.value)}
                    />
                    <Button variant="default" onClick={async () =>
                        {
                            const newDefibrillatorID = defibrillatorID;
                            console.log("Donnee envoyee :", newDefibrillatorID)
                            const response = await apiGetDefibrillatorByID(newDefibrillatorID)
                            if (response) {
                                window.location.href = "/defibrillator/id"
                            }
                        }}
                    >
                        <Search className={"mr-2 h-4 w-4"}/>
                        Afficher ce défibrillateur
                    </Button>
                </CardContent>
        </div>
    );
};
