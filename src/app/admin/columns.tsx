"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import Link from 'next/link';
import { MoreHorizontal } from "lucide-react"
import apiAccountDeleteID from "@/actions/apiAccountDeleteID";

export type Admin = {
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    emailVerified: true | false,
}

export const columns: ColumnDef<Admin>[] = [

    {
        id: "actions",
        cell: ({ row }) => {
          const payment = row.original;

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
                <DropdownMenuItem 
                  onClick={async () => {
                    try {
                      await apiAccountDeleteID(payment.id);
                      window.location.reload();
                    } catch (error) {
                      console.error("Erreur lors de la suppression :", error);
                    }
                  }}
                >
                  Supprimer cet administrateur
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
      },

  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "firstname",
    header: "Nom",
  },
  {
    accessorKey: "lastname",
    header: "lastname",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "emailVerified",
    header: "Status de l'email",
  },
]
