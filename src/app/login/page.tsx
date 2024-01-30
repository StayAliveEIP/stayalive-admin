"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import Link from 'next/link';
import React, {useState} from 'react';
import apiLogin from "@/actions/apiLogin";
import {Checkbox} from "@/components/ui/checkbox"
import {Label} from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const LoginAdminAccountPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Card className="w-[333px] m-auto mt-20">
      <Avatar className="m-auto mt-5">
        <AvatarImage src="https://cdn.discordapp.com/attachments/1130401857890697285/1190320898281066607/logo_Background_Removed.png?ex=65c649b9&is=65b3d4b9&hm=cf3172e52f346ff143dc992987a9a9dbe37e7baf1044928746c16f1637aa9ce1&" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <CardHeader>
        <CardTitle>Connection</CardTitle>
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
        <Link href="/dashboard">
          <Button variant="default" onClick={() => apiLogin(email, password)}>Se connecter</Button>
        </Link>
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
  );
};

export default LoginAdminAccountPage;