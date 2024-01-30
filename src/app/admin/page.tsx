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
import { Admin, columns } from "./columns";
import { DataTable } from "./data-table";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

async function getData(): Promise<Admin[]> {
  // Fetch data from API here.

  // Fake for Demo
  return [
    {
      id: "60e6f7b3f5b6f0b3f4f9f6e0",
      firstname: "John",
      lastname: "Doe",
      email: "john@doe.net",
      emailVerified: false,
    },
    {
      id: "flx999ZkRjrjX000Raf2",
      firstname: "Felix",
      lastname: "Buisson",
      email: "felix.buisson@epitech.eu",
      emailVerified: true,
    },
  ]
}

export default async function  DashboardAdmin() {
  const data = await getData()

    return (
      <div>
      <Menubar className="flex justify-between w-[1369px] m-auto mt-2">
        <MenubarMenu>
          <Link href="/signup">
            <MenubarTrigger>Créer un compte Admin</MenubarTrigger>
          </Link>
          <Link href="/login">
            <MenubarTrigger>Se connecter à un compte Admin</MenubarTrigger>
          </Link>
          <Link href="/admin">
            <MenubarTrigger>Liste des Admins</MenubarTrigger>
          </Link>
          <Link href="/dashboard">
            <MenubarTrigger>Dashboard Administrateur</MenubarTrigger>
          </Link>
        </MenubarMenu>
      </Menubar>
      <div className="container mx-auto">
        <Card className="w-[1234px] m-auto mt-20">
          <CardHeader>
            <CardTitle className="m-auto">Liste des administrateurs</CardTitle>
          </CardHeader>
          <DataTable columns={columns} data={data} />
          <CardFooter className="mx-auto mt-5">
            <Link href="/signup">
              <Button>Créer un nouveau compte administrateur</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      </div>
    );
};