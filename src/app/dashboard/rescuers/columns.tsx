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

export type Rescuers = {
    id: string,
    documentType: string,
    status: string,
    message: string,
    lastUpdate: string
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
                        <DropdownMenuItem>Télécharger le document du sauveteur</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },

    {
        accessorKey: "id",
        header: "Nom",
    },
    {
        accessorKey: "documentType",
        header: "Type de document",
    },
    {
        accessorKey: "status",
        header: "Status du document",
    },
    {
        accessorKey: "message",
        header: "Note",
    },
    {
        accessorKey: "lastUpdate",
        header: "Dernière mise à jour",
    },
]

/*
À mettre DANS le <> du bouton de téléchargement (DropdownMenuItem) :

onCLick={
    async () => {
        const data = await apiRescuerDownloadDocument("ID")
        if (data && data.error) {
            toast.error(data.message)
        } else if (data && !data.error) {
            toast.success(data.message)
        }
    }
}
*/