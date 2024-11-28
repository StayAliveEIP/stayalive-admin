"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {Button} from "@/components/ui/button"
import {ColumnDef} from "@tanstack/react-table"
import Link from 'next/link';
import {MoreHorizontal} from "lucide-react"
import apiRescuerGetDocument from "@/actions/apiRescuerGetDocument"
import apiSuspendRescuer from "@/actions/apiSuspendRescuer"
import {toast} from "sonner";

export type Rescuers = {
    _id: string,
    firstname: string,
    lastname: string,
    profilePictureUrl: string,
    suspended: boolean
}

export const columns: ColumnDef<Rescuers>[] = [
    {
        id: "action",
        cell: ({row}) => {
            const payment = row.original
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open Menu</span>
                            <MoreHorizontal className="h-4 w-4"/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Action</DropdownMenuLabel>
                    <Link href={`/dashboard/rescuers/document/${payment._id}`}>
                            <DropdownMenuItem onClick={async () => apiRescuerGetDocument(payment._id)}>Afficher les documents du sauveteur</DropdownMenuItem>
                        </Link>
                        <DropdownMenuItem onClick={async () => apiSuspendRescuer(payment._id)}>Suspendre ce sauveteur</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },

    {
        accessorKey: "_id",
        header: "id",
    },
    {
        accessorKey: "firstname",
        header: "Prenom",
    },
    {
        accessorKey: "lastname",
        header: "Nom",
    },
    {
        accessorKey: "suspended",
        header: "Suspendu ?",
    },
]