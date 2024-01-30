import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { CallCenter, columns } from "./columns";
import { DataTable } from "./data-table";
// import apiDashboardGetInfo from '@/actions/apiDashboardGetInfo';
// import apiDashboardDeleteCC from '@/actions/apiDashboardDeleteCC'; / apiDashboardDeleteCC("60e6f7b3f5b6f0b3f4f9f6e0")

async function getData(): Promise<CallCenter[]> {
  // Fetch data from API here.
  return [
    {
      id: "60e6f7b3f5b6f0b3f4f9f6e0",
      name: "Centre d'appel Stanislas",
      phone: "02 13 64 78 95",
      email: {
        email: "call@center.net",
        verified: true,
        lastCodeSent: "2024-01-30T05:17:47.608Z"
      },
      address: {
        street: "22 Rue Notre Dame des Champs",
        city: "Paris",
        zip: "75006"
      }
    },
  ]
}

export default async function  DashboardAdmin() {
  const data = await getData()

    return (
      <div className="container mx-auto">
        <Card className="w-[1234px] m-auto mt-20">
          <CardHeader>
            <CardTitle className="m-auto">Mes centres d&#39;appel</CardTitle>
          </CardHeader>
          <DataTable columns={columns} data={data} />
          <CardFooter className="flex justify-between mx-auto mt-5">
            <Link href="/dashboard/create">
              <Button>Créer un nouveau Centre d&#39;appel</Button>
            </Link>
            <Link href="/dashboard/settings">
              <Button variant="secondary">Paramètre administrateur</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    );
};



/*
    AFFICHAGE DE LA DERNIERE INTERVENTION
        <CardContent>Sauveteur: {rescueRescuerName}</CardContent>
        <CardContent>Lieu: {rescuePlace}</CardContent>
        <CardContent>Réussi: {rescueSuccess ? 'Non' : 'Oui'}</CardContent>
*/