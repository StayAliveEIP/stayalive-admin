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
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import apiDashboardDeleteCC from '@/actions/apiDashboardDeleteCC'
import {deleteCallCenter} from "@/actions/serverAction/action";
import {toast} from "sonner";
// l.59 onClick={() => apiDashboardDeleteCC()}

export type CallCenter = {
    id: string,
    name: string,
    phone: string,
    email: {
        email: string,
        verified: true | false,
        lastCodeSent: string
    },
    address: {
        street: string,
        city: string,
        zip: string
    }
}

export const columns: ColumnDef<CallCenter>[] = [

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
                        <Link href="/dashboard/callcenter">
                            <DropdownMenuItem>Voir les infos du centre d&#39;appel</DropdownMenuItem>
                        </Link>
                        <Link href="/dashboard/rescuers">
                            <DropdownMenuItem>Voir la liste de tout les sauveteurs</DropdownMenuItem>
                        </Link>
                        <Link href={`/dashboard/callcenter/edit/${payment.id}`}>
                            <DropdownMenuItem>Mettre à jour les infos du centre d&#39;appel</DropdownMenuItem>
                        </Link>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem onClick={
                            async () => {
                                const data = await deleteCallCenter(payment.id, localStorage.getItem("bearerToken") as string)
                                if (data && data.error) {
                                    toast.error(data.message)
                                } else if (data && !data.error) {
                                    toast.success(data.message)
                                    window.location.reload()
                                }
                            }

                        }>Supprimer ce centre d&#39;appel</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },

    {
        accessorKey: "name",
        header: "Nom",
    },
    {
        accessorKey: "phone",
        header: "Téléphone",
    },
    {
        accessorKey: "email.email",
        header: "Email",
    },
    {
        accessorKey: "address.street",
        header: "Rue",
    },
    {
        accessorKey: "address.city",
        header: "Ville",
    },
    {
        accessorKey: "address.zip",
        header: "Code zip",
    },
]
