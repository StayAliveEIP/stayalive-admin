"use client"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import apiAdminInfo from '@/actions/apiAdminInfo'
import apiAdminChangePassword from '@/actions/apiAdminChangePassword'

const ChangePassword: React.FC = () => {
    const [accountOldPassword, setAccountOldPassword] = useState('');
    const [accountNewPassword, setAccountNewPassword] = useState('');

    function getAdminInfo() {
      apiAdminInfo().then(r=> {
        if (r != undefined) {
            setAccountOldPassword(r.oldPassword);
            setAccountNewPassword(r.newPassword);
        }
      }).catch(e=>{});
    }

    useEffect(() => {
      getAdminInfo();
    }, [])

    return (
      <div>
      <Card className="w-[555px] m-auto mt-20">
        <CardHeader>
          <CardTitle>Changer mon mot de passe</CardTitle>
        </CardHeader>
        <CardContent>
          <Label htmlFor="password">Ancien mot de passe: </Label>
          <Input value={accountOldPassword} onChange={(e) => setAccountOldPassword(e.target.value)}></Input>
          <Label htmlFor="password">Nouveau mot de passe: </Label>
          <Input value={accountNewPassword} onChange={(e) => setAccountNewPassword(e.target.value)}></Input>
        </CardContent>
        <CardContent>
          <Link href="/dashboard/settings">
            <Button onClick={() => apiAdminChangePassword(accountOldPassword, accountNewPassword)}>Valider</Button>
          </Link>
        </CardContent>
      </Card>
      </div>
    );
};
export default ChangePassword;