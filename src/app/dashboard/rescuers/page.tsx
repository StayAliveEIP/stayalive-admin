"use client"

import {
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { Rescuers, columns } from "./columns";
import {useEffect, useState} from "react";

import { Button } from "@/components/ui/button";
import {Check} from "lucide-react";
import { DataTable } from "../data-table";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Navbar} from "@/components/navbar";
import apiGetMagicLink from '@/actions/apiGetMagicLink'
import apiGetRescuers from "@/actions/apiGetRescuers";
import apiUnsuspendRescuer from "@/actions/apiUnsuspendRescuer"

export default function RescuersList() {
  const [rescuers, setRescuers] = useState<Rescuers[]>([]);
  const [rescuerEmail, setRescuerEmail] = useState('');
  const [rescuerID, setRescuerID] = useState('');
  useEffect(() => {
    apiGetRescuers().then(r => {
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
          <CardTitle className="m-auto flex justify-center mb-20 mt-7">Liste des sauveteurs</CardTitle>
          <div>
          <Label htmlFor="password">Envoyer un Magic Link: </Label>
              <Input className="w-1/4" placeholder="example@email.com" value={rescuerEmail} onChange={(e) => setRescuerEmail(e.target.value)}></Input>
              <Button variant="secondary" onClick={() => apiGetMagicLink(rescuerEmail)}>
              <Check className={"mr-2 h-4 w-4"}/>
                Envoyer le Magic Link
              </Button>
              </div>
            <CardContent>
              <DataTable columns={columns} data={rescuers} />
            </CardContent>
            <div>
          <Label htmlFor="password">Annuler la suspension </Label>
              <Input className="w-1/4" placeholder="id:rescuer" value={rescuerID} onChange={(e) => setRescuerID(e.target.value)}></Input>
              <Button variant="secondary" onClick={() => apiUnsuspendRescuer(rescuerID)}>
              <Check className={"mr-2 h-4 w-4"}/>
                Retirer la suspension
              </Button>
              </div>
        </div>
      </div>
    )

};
