"use client"

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
import { Documents, columns } from "./columns";
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
            <CardTitle className="m-auto flex justify-center mb-20 mt-7">Listes des bugs</CardTitle>
              <DataTable columns={columns} data={documents} />
          </div>
        </div>
      )
  
  };