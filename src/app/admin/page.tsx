"use client"

import {
    Card,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from 'next/link';
import {Admin, columns} from "./columns";
import {DataTable} from "./data-table";
import {useEffect, useState} from "react";
import apiGetAdminData from '@/actions/apiGetAdminData'
import {Navbar} from "@/components/navbar";


export default function DashboardAdmin() {
    const [accounts, setAccounts] = useState<Admin[]>([]);
    useEffect(() => {
        apiGetAdminData().then(r => {
            console.log(r);
            if (r != undefined) {
                setAccounts(r)
            }
        })
    }, [])

    return (
        <div>
            <Navbar/>
            <div className="container mx-auto">
                <CardTitle className="flex justify-center mb-20 mt-7">Liste des administrateurs</CardTitle>
                <div className={"flex justify-end mb-2"}>
                    <Link href="/signup">
                        <Button>Nouveau compte</Button>
                    </Link>
                </div>
                <DataTable columns={columns} data={accounts}/>

            </div>
        </div>
    );
};
