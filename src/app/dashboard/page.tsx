"use client"

import {
    Card,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { CallCenter, columns } from "./columns";
import { DataTable } from "./data-table";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
// import apiDashboardGetInfo from '@/actions/apiDashboardGetInfo';
// import apiDashboardDeleteCC from '@/actions/apiDashboardDeleteCC';
// apiDashboardDeleteCC("60e6f7b3f5b6f0b3f4f9f6e0")
import apiGetCCData from '@/actions/apiGetCCData'
import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem, NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import {Navbar} from "@/components/navbar";


export default function  DashboardAdmin() {
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
        <Card className="w-[1234px] m-auto mt-20">
          <CardHeader>
            <CardTitle className="m-auto">Mes centres d&#39;appel</CardTitle>
          </CardHeader>
          <DataTable columns={columns} data={callcenter} />
          <CardFooter className="flex justify-between mx-auto mt-5">
            <Link href="/dashboard/create">
              <Button>Créer un nouveau Centre d&#39;appel</Button>
            </Link>
            <Link href="/dashboard/settings">
              <Button variant="secondary">Paramètre administrateur</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      </div>
    );
};



/*
    AFFICHAGE DE LA DERNIERE INTERVENTION
        <CardContent>Sauveteur: {rescueRescuerName}</CardContent>
        <CardContent>Lieu: {rescuePlace}</CardContent>
        <CardContent>Réussi: {rescueSuccess ? 'Non' : 'Oui'}</CardContent>
*/
