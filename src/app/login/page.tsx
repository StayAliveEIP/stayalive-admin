"use client"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import React, {useState} from 'react';
import apiLogin from "@/actions/apiLogin";
import {Checkbox} from "@/components/ui/checkbox"
import {Label} from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {useRouter} from "next/navigation";

const LoginAdminAccountPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter()

  return (
    <div>
      <Card className="w-[333px] m-auto mt-20">
        <Avatar className="m-auto mt-5">
          <AvatarImage src={"https://cdn.discordapp.com/attachments/1130401857890697285/1190320898281066607/logo_Background_Removed.png?ex=664cc2b9&is=664b7139&hm=f2c8ad8fb315a5dcf9277db0fd0c850faa7a7cd6d65d5e0b1586f5a7c0f39a69&"} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <CardHeader>
          <CardTitle>Connection compte Admin</CardTitle>
        </CardHeader>
        <CardContent>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="Entrez votre adresse e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label htmlFor="password">Mot de passe</Label>
         <Input
            type="password"
            placeholder="Entrez votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="default" onClick={async () =>
          {const data = await apiLogin(email, password)
            if (data) {
              router.push("/dashboard")
            }
          }}>Se connecter</Button>
        </CardFooter>
        <CardFooter>
          <div className="items-top flex space-x-2">
            <Checkbox id="connect"/>
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Rester connecter
              </label>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginAdminAccountPage;
