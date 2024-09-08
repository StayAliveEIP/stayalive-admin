"use client"

import apiRescuerDownloadDocument from "@/actions/apiRescuerDownloadDocument"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import {useEffect, useState} from "react";
import {toast} from "sonner";
import { useRouter} from "next/navigation";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import { Rescuers, columns } from "./columns";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import apiRescuerGet from "@/actions/apiRescuerGet";
import { DataTable } from "../data-table";
import {Navbar} from "@/components/navbar";
import {Check, DeleteIcon, List, Link2, Mail, Pencil, Trash} from "lucide-react";
import apiGetMagicLink from '@/actions/apiGetMagicLink'

export default function RescuersList() {
  const [rescuers, setRescuers] = useState<Rescuers[]>([]);
  const [rescuerEmail, setRescuerEmail] = useState('');
  useEffect(() => {
    apiRescuerGet("65e95e0591687dbe7cc074a5").then(r => {
      console.log(r);
      if (r != undefined) {
        setRescuers(r)
      }
    })
  }, [])

    return (
      <div>
        <Navbar/>
        <div className="container mx-auto">
          <CardTitle className="m-auto flex justify-center mb-20 mt-7">Envoie de Magic Link aux sauveteurs</CardTitle>
            <CardContent>
              <Label htmlFor="password">Envoyer un Magic Link: </Label>
              <Input className="w-1/4" placeholder="example@email.com" value={rescuerEmail} onChange={(e) => setRescuerEmail(e.target.value)}></Input>
              <Button variant="secondary" onClick={() => apiGetMagicLink(rescuerEmail)}>
              <Check className={"mr-2 h-4 w-4"}/>
                Envoyer le Magic Link
              </Button>
            </CardContent>
        </div>
      </div>
    )

};

// <DataTable columns={columns} data={rescuers} />

/*
return (
      <div>
      <Card className="w-[555px] m-auto mt-20">
        <CardHeader>
          <CardTitle>Liste des sauveteurs</CardTitle>
        </CardHeader>
        <Link href="/dashboard">
          <Button variant="link">Retour à votre dashboard</Button>
        </Link>
      </Card>
      </div>
    );
*/
