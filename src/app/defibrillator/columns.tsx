"use client"

import {ColumnDef} from "@tanstack/react-table"
import {MoreHorizontal} from "lucide-react"
import {Button} from "@/components/ui/button"
import Link from 'next/link';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type Defibrillator = {
    _id: string,
    name: string,
    adress: string,
    pictureUrl: string,
    status: string
}

export const columns: ColumnDef<Defibrillator>[] = [

    {
        id: "actions",
        cell: ({row}) => {
            const payment = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4"/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Action</DropdownMenuLabel>
                        <DropdownMenuItem>Mettre à jour le statut de ce défibrillateur</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
/* Pour l'action "MàJ statut"
onClick={
    async () => {
        const data = await deleteCallCenter(payment.id, localStorage.getItem("bearerToken") as string)
        if (data && data.error) {
            toast.error(data.message)
        } else if (data && !data.error) {
            toast.success(data.message)
            window.location.reload()
        }
    }
}
*/

/* Afficher l'image/photo en utilisant l'URL
    {
    accessorKey: "address.street",
    header: "Rue",
    },
*/
    {
        accessorKey: "name",
        header: "Nom",
    },
    {
        accessorKey: "adress",
        header: "Addresse",
    },
    {
        accessorKey: "status",
        header: "Statut",
    }
]
