"use client"

import { Feedback, columns } from "./columns";
import {useEffect, useState} from "react";

import {
  CardTitle,
} from "@/components/ui/card";
import { DataTable } from "./data-table";
import {Navbar} from "@/components/navbar";
import apiGetFeedback from "@/actions/apiGetFeedback";

export default function BugsList() {
    const [feedback, setFeedback] = useState<Feedback[]>([]);
    useEffect(() => {
        apiGetFeedback().then(r => {
        console.log(r);
        if (r != undefined) {
          setFeedback(r)
        }
    })
    }, [])
  
      return (
        <div>
          <Navbar/>
          <div className="container mx-auto">
            <CardTitle className="m-auto flex justify-center mb-20 mt-7">Listes des feedbacks</CardTitle>
              <DataTable columns={columns} data={feedback} />
          </div>
        </div>
      )
  
  };