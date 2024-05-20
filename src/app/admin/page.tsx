"use client"

import {
    Card,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Admin, columns } from "./columns";
import { DataTable } from "./data-table";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { useEffect, useState } from "react";
import apiGetAdminData from '@/actions/apiGetAdminData'
import {Navbar} from "@/components/navbar";


export default function  DashboardAdmin() {
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
        <Card className="w-[1234px] m-auto mt-20">
          <CardHeader>
            <CardTitle className="m-auto">Liste des administrateurs</CardTitle>
          </CardHeader>
          <DataTable columns={columns} data={accounts} />
          <CardFooter className="mx-auto mt-5">
            <Link href="/signup">
              <Button>Créer un nouveau compte administrateur</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      </div>
    );
};
