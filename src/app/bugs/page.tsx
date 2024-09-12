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
import { Bugs, columns } from "./columns";
import { DataTable } from "./data-table";
import {Navbar} from "@/components/navbar";
import apiGetBugs from "@/actions/apiGetBugs";

export default function BugsList() {
    const [bugs, setBugs] = useState<Bugs[]>([]);
    useEffect(() => {
      apiGetBugs().then(r => {
        console.log(r);
        if (r != undefined) {
          setBugs(r)
        }
    })
    }, [])
  
      return (
        <div>
          <Navbar/>
          <div className="container mx-auto">
            <CardTitle className="m-auto flex justify-center mb-20 mt-7">Listes des bugs</CardTitle>
              <DataTable columns={columns} data={bugs} />
          </div>
        </div>
      )
  
  };