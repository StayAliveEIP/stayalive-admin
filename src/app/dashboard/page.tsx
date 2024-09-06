"use client"

import {
    Card,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from 'next/link';
import {CallCenter, columns} from "./columns";
import {DataTable} from "./data-table";
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"
// import apiDashboardGetInfo from '@/actions/apiDashboardGetInfo';
// import apiDashboardDeleteCC from '@/actions/apiDashboardDeleteCC';
// apiDashboardDeleteCC("60e6f7b3f5b6f0b3f4f9f6e0")
import apiGetCCData from '@/actions/apiGetCCData'
import React, {useEffect, useState} from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import {Navbar} from "@/components/navbar";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import CreateCallCenter from "@/app/dashboard/create/page";
import {CreateCallCenterForm} from "@/components/create-call-center-form";
import {Plus} from "lucide-react";

export default function DashboardAdmin() {
    const [callcenter, setcallcenter] = useState<CallCenter[]>([]);
    useEffect(() => {
        apiGetCCData().then(r => {
            console.log(r);
            if (r != undefined) {
                setcallcenter(r)
            }
        })
    }, [])

    return (
        <div>
            <Navbar/>
            <div className="container mx-auto">
                <div className={"flex justify-center mt-7 mb-20"}>
                    <CardTitle className="m-auto">Mes centres d&#39;appel</CardTitle>
                </div>
                <div className={"flex justify-end mb-2"}>
                    <Dialog>
                        <DialogTrigger asChild>
                                <Button>
                                    <Plus className={"mr-2 h-4 w-4"}/>
                                    Nouveau Centre
                                </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <CreateCallCenterForm/>
                        </DialogContent>
                    </Dialog>

                </div>
                <DataTable columns={columns} data={callcenter}/>
            </div>
        </div>
    );
};
