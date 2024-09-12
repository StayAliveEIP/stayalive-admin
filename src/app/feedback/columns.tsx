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

export type Feedback = {
    id: string,
    user: {
        id: string,
        firstname: string,
        lastname: string,
        email: string,
        profilePictureUrl: string,
    },
    rating: number,
    goodPoints: string,
    badPoints: string,
    ideaAndSuggestions: string,
    createdAt:string,
}

export const columns: ColumnDef<Feedback>[] = [
    {
        id: "actions",
        cell: ({ row }) => {
          const payment = row.original
          return
        },
      },

    {
        accessorKey: "id",
        header: "Feedback",
    },
    {
        accessorKey: "email",
        header: "By",
    },
    {
        accessorKey: "badPoints",
        header: "Bad Points",
    },
    {
        accessorKey: "ideaAndSuggestions",
        header: "Suggestion",
    },
    {
        accessorKey: "rating",
        header: "Note",
    },
    {
        accessorKey: "createdAt",
        header: "Date",
    },
]
