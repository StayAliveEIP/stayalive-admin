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
import { useRouter} from "next/navigation";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import { Bugs, columns } from "./columns";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import apiRescuerGet from "@/actions/apiRescuerGet";
import { DataTable } from "./data-table";
import {Navbar} from "@/components/navbar";
import {Check, DeleteIcon, List, Link2, Mail, Pencil, Trash} from "lucide-react";
import apiGetMagicLink from '@/actions/apiGetMagicLink'

export default function BugsList() {
    const [bugs, setBugs] = useState<Bugs[]>([]);
    useEffect(() => {

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