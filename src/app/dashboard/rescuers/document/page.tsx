"use client"

import {
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { Documents, columns } from "./columns";
import {useEffect, useState} from "react";

import { DataTable } from "../data-table";
import {Navbar} from "@/components/navbar";
import apiRescuerGetDocument from "@/actions/apiRescuerGetDocument";

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
