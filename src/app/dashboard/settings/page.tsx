"use client"

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import apiAccountDelete from '@/actions/apiAccountDelete'
import apiDeconnexion from '@/actions/apiDeconnexion'
import { Label } from "@/components/ui/label";
import apiAdminInfo from '@/actions/apiAdminInfo'
import apiGetMagicLink from '@/actions/apiGetMagicLink'
import apiAdminChangeInfo from '@/actions/apiAdminChangeInfo'
import apiVerifyEmail from '@/actions/apiVerifyEmail'
import { Navbar } from "@/components/navbar";
import apiAdminChangeEmail from '@/actions/apiAdminChangeEmail'
import { apiUploadProfilePicture, apiDeleteProfilePicture } from '@/actions/apiAcountProfilPicture'
import { Check, DeleteIcon, List, Link2, Mail, Pencil, Trash, Upload, XCircle } from "lucide-react";

const SettingsAdmin: React.FC = () => {
    const [accountFirstname, setAccountFirstname] = useState('');
    const [accountLastname, setAccountLastname] = useState('');
    const [accountEmail, setAccountEmail] = useState('');
    const [accountEmailStatus, setAccountEmailStatus] = useState('');
    const [accountPassword, setAccountPassword] = useState('');
    const [accountID, setAccountID] = useState('');
    const [accountCode, setAccountCode] = useState('');
    const [accountProfilPicture, setAccountProfilPicture] = useState('');
    const [selectedFile, setSelectedFile] = useState<string | null>(null);

    function getAdminInfo() {
      apiAdminInfo().then(r => {
        if (r != undefined) {
          setAccountFirstname(r.firstname);
          setAccountLastname(r.lastname);
          setAccountEmail(r.email);
          setAccountEmailStatus(r.emailVerified);
          setAccountID(r.id);
          setAccountProfilPicture(r.profilePicture || 'https://bastos-poc.s3.amazonaws.com/profile-picture/admin/664f3fb5384377af145983e3');
        }
      }).catch(e => {});
    }

    useEffect(() => {
      getAdminInfo();
    }, []);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        setSelectedFile(URL.createObjectURL(file));
        
        if (file) {
          apiUploadProfilePicture(file)
            .then(() => {
              getAdminInfo();
              console.log("Photo de profil :", accountProfilPicture)
            })
            .catch((error) => {
              console.error("Erreur lors de l'upload de la photo de profil :", error);
            });
        }
      }
    };

    const handleDeleteProfilePicture = () => {
      apiDeleteProfilePicture()
        .then(() => {
          setAccountProfilPicture('https://bastos-poc.s3.amazonaws.com/profile-picture/admin/664f3fb5384377af145983e3');
          getAdminInfo();
        })
        .catch((error) => {
          console.error("Erreur lors de la suppression de la photo de profil :", error);
        });
    };

    return (
      <div>
        <Navbar />
        <Card className="w-[555px] m-auto mt-20">
          <CardHeader>
            <CardTitle>Info du compte</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center mb-4">
              <img
                src={accountProfilPicture}
                alt="Photo de profil"
                className="rounded-full w-24 h-24 object-cover"
              />
            </div>
            <div className="flex justify-center space-x-4 mb-4">
              <Button variant="secondary" className="flex items-center">
                <Upload className="mr-2 h-4 w-4" />
                <label htmlFor="profile-upload" className="cursor-pointer">
                  Uploader une photo
                </label>
              </Button>
              <input
                id="profile-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
              <Button variant="destructive" className="flex items-center" onClick={handleDeleteProfilePicture}>
                <XCircle className="mr-2 h-4 w-4" />
                Supprimer la photo
              </Button>
            </div>

            <Label htmlFor="firstname">Prénom: </Label>
            <Input
              value={accountFirstname}
              onChange={(e) => setAccountFirstname(e.target.value)}
            ></Input>
            <Label htmlFor="lastname">Nom: </Label>
            <Input
              value={accountLastname}
              onChange={(e) => setAccountLastname(e.target.value)}
            ></Input>
            <Button variant="secondary" onClick={() => apiAdminChangeInfo(accountID, accountFirstname, accountLastname)}>
              <List className={"mr-2 h-4 w-4"} />
              Changer vos informations personnels
            </Button>
          </CardContent>
          <CardContent>
            <Label htmlFor="email">Email: </Label>
            <Input
              value={accountEmail}
              onChange={(e) => setAccountEmail(e.target.value)}
            ></Input>
            <Button variant="secondary" onClick={() => apiAdminChangeEmail(accountEmail)}>
              <Mail className={"mr-2 h-4 w-4"} />
              Changer votre email
            </Button>
          </CardContent>
          <CardContent>
            <Label>Code de verification: </Label>
            <Input
              onChange={(e) => setAccountCode(e.target.value)}
            ></Input>
            <Button variant="secondary" onClick={() => apiVerifyEmail(accountCode)}>
              <Check className={"mr-2 h-4 w-4"} />
              Envoyer le code de verification
            </Button>
          </CardContent>
          <CardContent>
            <Button variant="secondary" onClick={() => apiGetMagicLink(accountEmail)}>
              <Link2 className={"mr-2 h-4 w-4"} />
              Obtenir mon Magic Link
            </Button>
          </CardContent>
          <CardContent>
            <Link href="/dashboard/settings/changepassword">
              <Button variant="secondary">
                <Pencil className={"mr-2 h-4 w-4"} />
                Changer mon mot de passe
              </Button>
            </Link>
          </CardContent>
          <CardContent>
            Status de votre email: {accountEmailStatus ? "Verifie" : "En attente"}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/login">
              <Button variant="destructive" onClick={() => apiDeconnexion()}>
                <DeleteIcon className={"mr-2 h-4 w-4"} />
                Se deconnecter
              </Button>
            </Link>
          </CardFooter>
          <Label htmlFor="password" className="mx-5">Mot de passe</Label>
          <CardFooter className="flex justify-between">
            <Input
              type="password"
              placeholder="Entrez votre mot de passe"
              value={accountPassword}
              onChange={(e) => setAccountPassword(e.target.value)}
            />
            <Link href="/login">
              <Button variant="destructive" onClick={() => apiAccountDelete(accountPassword)}>
                <Trash className={"mr-2 h-4 w-4"} />
                Supprimer votre compte
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    );
};

export default SettingsAdmin;
