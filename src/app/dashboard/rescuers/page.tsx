"use client"

import apiRescuerDownloadDocument from "@/actions/apiRescuerDownloadDocument"

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
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

export default function RescuersList() {
  const [rescuers, setRescuers] = useState<Rescuers[]>([]);
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
        <div className="container mx-auto">
          <Card className="w-[1234px] m-auto my-20">
            <CardHeader>
              <CardTitle className="m-auto">Listes des sauveteurs</CardTitle>
            </CardHeader>
            <DataTable columns={columns} data={rescuers} />
          </Card>
        </div>
      </div>
    )

};

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