"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

const RescuerList: React.FC = () => {
    //Fake Data
    return (
      <div>
      <Menubar className="flex justify-between w-[1369px] m-auto mt-2">
        <MenubarMenu>
          <Link href="/signup">
            <MenubarTrigger>Créer un compte Admin</MenubarTrigger>
          </Link>
          <Link href="/login">
            <MenubarTrigger>Se connecter à un compte Admin</MenubarTrigger>
          </Link>
          <Link href="/admin">
            <MenubarTrigger>Liste des Admins</MenubarTrigger>
          </Link>
          <Link href="/dashboard">
            <MenubarTrigger>Dashboard Administrateur</MenubarTrigger>
          </Link>
        </MenubarMenu>
      </Menubar>
      <Card className="w-[555px] m-auto mt-20">
        <CardHeader>
          <CardTitle>Infos du centre d&#39;appel</CardTitle>
        </CardHeader>
        <CardContent>Hôpital Stanislas</CardContent>
        <CardContent>02 13 64 78 95</CardContent>
        <CardContent>call@center.net</CardContent>
        <CardContent>Etat de l&#39;email : En attente</CardContent>
        <CardContent>22 Rue Notre Dame des Champs</CardContent>
        <CardContent>Paris</CardContent>
        <CardContent>75006</CardContent>
        <Link href="/dashboard">
          <Button variant="link">Retour à votre dashboard</Button>
        </Link>
      </Card>
      </div>
    );
};

export default RescuerList;