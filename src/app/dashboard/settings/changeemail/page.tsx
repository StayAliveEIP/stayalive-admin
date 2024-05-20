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
import apiAdminChangeEmail from '@/actions/apiAdminChangeEmail'

const ChangePassword: React.FC = () => {
    const [accountEmail, setAccountEmail] = useState('');

    function getAdminInfo() {
      apiAdminInfo().then(r=> {
        if (r != undefined) {
            setAccountEmail(r.email);
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
          <CardTitle>Changer mon email</CardTitle>
        </CardHeader>
        <CardContent>
          <Label htmlFor="password">Nouveau email: </Label>
          <Input value={accountEmail} onChange={(e) => setAccountEmail(e.target.value)}></Input>
        </CardContent>
        <CardContent>
          <Link href="/dashboard/settings">
            <Button onClick={() => apiAdminChangeEmail(accountEmail)}>Valider</Button>
          </Link>
        </CardContent>
      </Card>
      </div>
    );
};
export default ChangePassword;