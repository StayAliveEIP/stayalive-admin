"use client"

import {Defibrillator, columns} from "./columns";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";
import React, {useEffect, useState} from "react";

import {Button} from "@/components/ui/button";
import {
    CardTitle,
} from "@/components/ui/card";
import {DataTable} from "./data-table";
import {ListFilter} from "lucide-react";
import {Navbar} from "@/components/navbar";
import {SelectDefibrillator} from "@/components/select-defibrillator";
import apiGetDefibrillatorData from '@/actions/apiGetDefibrillatorData'

export default function DashboardAdmin() {
    const [defibrillator, setDefibrillator] = useState<Defibrillator[]>([]);
    useEffect(() => {
        apiGetDefibrillatorData().then(r => {
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
                    <CardTitle className="m-auto">Liste des Défibrillateurs</CardTitle>
                </div>
                <div className={"flex justify-end mb-2"}>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button>
                                <ListFilter className={"mr-2 h-4 w-4"}/>
                                Option d&apos;affichage
                            </Button>
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