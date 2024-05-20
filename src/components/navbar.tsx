import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import React from "react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Settings, Settings2} from "lucide-react";

export function Navbar() {
    return (
        <div className={"flex items-center w-full justify-between px-5 pt-2"}>
            <div>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/admin" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Admins
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/dashboard" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Centres d&apos;appel
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage
                                src="https://cdn.discordapp.com/attachments/1130401857890697285/1190320898281066607/logo_Background_Removed.png?ex=65c649b9&is=65b3d4b9&hm=cf3172e52f346ff143dc992987a9a9dbe37e7baf1044928746c16f1637aa9ce1&"/>
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Admin</DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <Link href={"/dashboard/settings"}>
                            <DropdownMenuItem>
                                <Settings2 className={"mr-2 h-4 w-4"}/>
                                <span>Settings</span>
                            </DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </div>
    )
}