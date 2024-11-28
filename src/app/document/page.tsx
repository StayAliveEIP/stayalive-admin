"use client"

import { Documents, columns } from "./columns";
import {useEffect, useState} from "react";

import {
  CardTitle,
} from "@/components/ui/card";
import { DataTable } from "./data-table";
import {Navbar} from "@/components/navbar";
import apiGetDocuments from "@/actions/apiGetDocuments";

export default function DocumentsList() {
    const [documents, setDocuments] = useState<Documents[]>([]);
    useEffect(() => {
      apiGetDocuments().then(r => {
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
            <CardTitle className="m-auto flex justify-center mb-20 mt-7">Liste des documents</CardTitle>
              <DataTable columns={columns} data={documents} />
          </div>
        </div>
      )
  
  };