"use client"

import {Defibrillator, columns} from "./columns";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";
import React, {useEffect, useState} from "react";

import {Button} from "@/components/ui/button";
import {DataTable} from "./data-table";
import {Navbar} from "@/components/navbar";
import {SelectDefibrillator} from "@/components/select-defibrillator";
import apiGetDefibrillatorByID from "@/actions/apiGetDefibrillatorByID";

interface DashboardAdminProps {
    id: string;
}

export default function DashboardAdmin({ params, searchParams }: {params: DashboardAdminProps, searchParams: any }) {
    const [defibrillator, setDefibrillator] = useState<Defibrillator[]>([]);
    useEffect(() => {
        apiGetDefibrillatorByID(params.id).then(r => {
            console.log(r);
            if (r != undefined) {
                setDefibrillator([r])
            }
        })
    }, [params.id])

    return (
        <div>
            <Navbar/>
            <div className="container mx-auto">
                <div className={"flex justify-end mb-2"}>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button>Option d&apos;affichage</Button>
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