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
import apiRescuerDownloadDocument from "@/actions/apiRescuerDownloadDocument"

export type Documents = {
    type: string,
    data: {
        id: string,
        documentType: string,
        status: string,
        message: string,
        lastUpdate: string
    }
}

export const columns: ColumnDef<Documents>[] = [
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
                        <DropdownMenuItem onClick={async () => apiRescuerDownloadDocument(payment.data.id)}>Telecharger le document</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },

    {
        accessorKey: "data.id",
        header: "ID",
    },
    {
        accessorKey: "data.documentType",
        header: "Type de document",
    },
    {
        accessorKey: "data.status",
        header: "Status",
    },
    {
        accessorKey: "data.message",
        header: "Commentaire",
    },
    {
        accessorKey: "data.lastUpdate",
        header: "Mis à jour le",
    },
]