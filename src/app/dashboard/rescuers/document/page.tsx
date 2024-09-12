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
import { Documents, columns } from "./columns";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import apiRescuerGetDocument from "@/actions/apiRescuerGetDocument";
import { DataTable } from "../data-table";
import {Navbar} from "@/components/navbar";
import {Check, DeleteIcon, List, Link2, Mail, Pencil, Trash} from "lucide-react";
import apiGetMagicLink from '@/actions/apiGetMagicLink'

export default function RescuersDocument() {
  const [documents, setDocuments] = useState<Documents[]>([]);
  useEffect(() => {
    apiRescuerGetDocument("66702c2f14995d77fba7b2d8").then(r => {
      console.log(r);
      if (r != undefined) {
        setDocuments(r)
      }
    })
  }, [])

    return (
      <div>
        <Navbar/>
        <div className="container mx-auto">
          <CardTitle className="m-auto flex justify-center mb-20 mt-7">Liste des document du sauveteur</CardTitle>
            <CardContent>
              <DataTable columns={columns} data={documents} />
            </CardContent>
        </div>
      </div>
    )

};

// <DataTable columns={columns} data={rescuers} />

// onClick={() => apiRescuerDownloadDocument(rescuerEmail)

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
