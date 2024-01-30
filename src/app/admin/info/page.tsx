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
          <CardTitle>Infos de l&#39;administrateur</CardTitle>
        </CardHeader>
        <CardContent>Felix</CardContent>
        <CardContent>Buisson</CardContent>
        <CardContent>felix.buisson@epitech.eu</CardContent>
        <CardContent>Etat de l&#39;email : Valide</CardContent>
        <Link href="/admin">
          <Button variant="link">Retour à la liste des administrateurs</Button>
        </Link>
      </Card>
      </div>
    );
};

export default RescuerList;