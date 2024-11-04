"use client"

import { Bugs, columns } from "./columns";
import {useEffect, useState} from "react";

import {
CardTitle,
} from "@/components/ui/card";
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