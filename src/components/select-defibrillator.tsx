import React, {useState} from "react";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import apiGetDefibrillatorData from '@/actions/apiGetDefibrillatorData'
import apiGetDefibrillatorByStatus from '@/actions/apiGetDefibrillatorByStatus'
import apiGetDefibrillatorByID from '@/actions/apiGetDefibrillatorByID'

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
                    >Afficher tout les défibrillateurs</Button>
                    <Button variant="default" onClick={async () =>
                        {
                            const response = await apiGetDefibrillatorByStatus('VALIDATED')
                            if (response) {
                                window.location.href = "/defibrillator/validated"
                            }
                        }}
                    >Afficher les défibrillateurs validés</Button>
                    <Button variant="default" onClick={async () =>
                        {
                            const response = await apiGetDefibrillatorByStatus('PENDING')
                            if (response) {
                                window.location.href = "/defibrillator/pending"
                            }
                        }}
                    >Afficher les défibrillateurs en attente</Button>
                    <Button variant="default" onClick={async () =>
                        {
                            const response = await apiGetDefibrillatorByStatus('REFUSED')
                            if (response) {
                                window.location.href = "/defibrillator/refused"
                            }
                        }}
                    >Afficher les défibrillateurs refusés</Button>
                    <Input
                        type="id"
                        placeholder="Entrez l'ID du défibrillateurs"
                        value={defibrillatorID}
                        onChange={(e) => setDefibrillatorID(e.target.value)}
                    />
                    <Button variant="default" onClick={async () =>
                        {
                            const newDefibrillatorID = defibrillatorID;
                            const response = await apiGetDefibrillatorByID(newDefibrillatorID)
                            if (response) {
                                window.location.href = "/defibrillator/id"
                            }
                        }}
                    >Afficher ce défibrillateur</Button>
                </CardContent>
        </div>
    );
};
