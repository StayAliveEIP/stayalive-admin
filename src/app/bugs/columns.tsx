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

export type Bugs = {
    id: string,
    user: {
        id: string,
        firstname: string,
        lastname: string,
        email: string,
        profilePictureUrl: string,
    },
    message: string,
    level: number,
    isResolved: true | false,
    pictureUrls: string,
    createdAt:string,
}

export const columns: ColumnDef<Bugs>[] = [
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
                <DropdownMenuItem>Mettre à jour le status du bug</DropdownMenuItem>
                <DropdownMenuItem>Mettre à jour le niveau du bug</DropdownMenuItem>
                <DropdownMenuItem>Supprimer ce bug</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      },

    {
        accessorKey: "id",
        header: "Bug",
    },
    {
        accessorKey: "email",
        header: "Report par",
    },
    {
        accessorKey: "message",
        header: "Description",
    },
    {
        accessorKey: "level",
        header: "Niveau",
    },
    {
        accessorKey: "isResolved",
        header: "Resolue ?",
    },
    {
        accessorKey: "createdAt",
        header: "Date de rapport",
    },
]
