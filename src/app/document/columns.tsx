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

export type Documents = {
    type: string,
    data: {
        id: string,
        documentType: string,
        status: string,
        message: string,
        lastUpdate: string,
    }
}

export const columns: ColumnDef<Documents>[] = [
    {
        id: "actions",
        cell: ({ row }) => {
          const payment = row.original
     
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Action</DropdownMenuLabel>
                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      },

    {
        accessorKey: "documentType",
        header: "Type de document",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "message",
        header: "Message",
    },
    {
        accessorKey: "Mis à jour le :",
        header: "Niveau",
    },
]
