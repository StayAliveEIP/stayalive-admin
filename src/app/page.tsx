import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {process.env.API_URL}
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
    </main>
  );
}
