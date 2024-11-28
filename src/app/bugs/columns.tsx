"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import apiDeleteBugs from "@/actions/apiDeleteBugs";
import apiUpdateBugLevel from "@/actions/apiUpdateBugLevel";
import apiUpdateBugStatus from "@/actions/apiUpdateBugStatus";
import { toast } from "sonner";

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
    createdAt: string,
};

export const columns: ColumnDef<Bugs>[] = [
    {
        id: "actions",
        cell: ({ row }) => {
            const bug = row.original;

            const handleUpdateLevel = async () => {
                const newLevel = prompt("Veuillez entrer un nouveau niveau pour ce bug (entre 1 et 3) :");
                const parsedLevel = Number(newLevel);

                if (!newLevel || isNaN(parsedLevel)) {
                    alert("Le niveau doit être un nombre valide.");
                    return;
                }

                if (parsedLevel < 1 || parsedLevel > 3) {
                    alert("Le niveau doit être compris entre 1 et 3.");
                    return;
                }

                try {
                    const response = await apiUpdateBugLevel(bug.id, parsedLevel);
                    if (response.error) {
                        toast.error(response.message);
                    } else {
                        toast.success(response.message);
                        window.location.reload();
                    }
                } catch (error) {
                    console.error("Erreur:", error);
                    toast.error("Une erreur s'est produite lors de la mise à jour du niveau.");
                }
            };

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
                        <DropdownMenuItem onClick={
                            async () => {
                                const data = await apiUpdateBugStatus(bug.id, localStorage.getItem("bearerToken") as string);
                                if (data && data.error)
                                    toast.error(data.message);
                                else if (data && !data.error) {
                                    toast.success(data.message);
                                    window.location.reload();
                                }
                            }
                        }>Mettre à jour le status du bug</DropdownMenuItem>
                        <DropdownMenuItem onClick={handleUpdateLevel}>
                            Mettre à jour le niveau du bug
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={
                            async () => {
                                const data = await apiDeleteBugs(bug.id, localStorage.getItem("bearerToken") as string);
                                if (data && data.error)
                                    toast.error(data.message);
                                else if (data && !data.error) {
                                    toast.success(data.message);
                                    window.location.reload();
                                }
                            }
                        }>Supprimer ce bug</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
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
];
