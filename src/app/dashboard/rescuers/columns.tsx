"use client"

import {ColumnDef} from "@tanstack/react-table"
import {MoreHorizontal} from "lucide-react"
import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {toast} from "sonner";
import Link from 'next/link';
import apiRescuerGetDocument from "@/actions/apiRescuerGetDocument"

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
                        <Link href={`/dashboard/rescuers/document`}>
                            <DropdownMenuItem onClick={async () => apiRescuerGetDocument(payment._id)}>Afficher les documents du sauveteur</DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
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