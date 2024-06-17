"use client"

import {
    Card,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from 'next/link';
import {Defibrillator, columns} from "./columns";
import {DataTable} from "./data-table";
import React, {useEffect, useState} from "react";
import {Navbar} from "@/components/navbar";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {SelectDefibrillator} from "@/components/select-defibrillator";
import apiGetDefibrillatorByStatus from "@/actions/apiGetDefibrillatorByStatus";


export default function DashboardAdmin() {
    const [defibrillator, setDefibrillator] = useState<Defibrillator[]>([]);
    useEffect(() => {
        apiGetDefibrillatorByStatus('REFUSED').then(r => {
            console.log(r);
            if (r != undefined) {
                setDefibrillator(r)
            }
        })
    }, [])

    return (
        <div>
            <Navbar/>
            <div className="container mx-auto">
                <div className={"flex justify-center mt-7 mb-20"}>
                    <CardTitle className="m-auto">Liste des Défibrillateurs Refusés</CardTitle>
                </div>
                <div className={"flex justify-end mb-2"}>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button>Option d'affichage</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <SelectDefibrillator/>
                        </DialogContent>
                    </Dialog>
                </div>
                <DataTable columns={columns} data={defibrillator}/>
            </div>
        </div>
    );
};