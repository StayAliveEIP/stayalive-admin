"use client"

import Link from "next/link";
import {Card, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {useEffect, useState} from "react";
import {apiDashboardModifyCC} from "@/actions/apiDashboardModifyCC";
import {toast} from "sonner";
import { useRouter} from "next/navigation";

import apiAdminInfo from "@/actions/apiAdminInfo";

export default  function Page({params}: {
    params: {
        id: string
    }
}) {

    const [info, setInfo] = useState({
        name: "",
        surname: "",
        email: {
            email: "",
            verified: true,
            lastCodeSent: ""
        },
        phone: ""
    })

    const [name, setName] = useState("")
    const [surname, setSurname]  = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const router = useRouter()
    async function modifyInfo() {
        const data = {
            id: params.id,
            name: name,
            surname: surname,
            email: email,
            phone: phone,
        }
        const response = await apiDashboardModifyCC(data);
        if (!response.error) {
            toast.success("Les informations ont bien été modifiées")
            router.push("/admin")
        } else {
            toast.error("Une erreur est survenue")
        }
    }

    /*
    useEffect(() => {
        apiAdminInfo(params.id, localStorage.getItem("bearerToken")as string).then((data) => {
            console.log(data)
            setInfo(data)
            setName(data.name)
            setSurname(data.surname)
            setEmail(data.email.email)
            setPhone(data.phone)
        })
    } ,[])
    */

    return (
        <div>
            <Card className="w-[555px] m-auto mt-20 p-1">
                <CardHeader>
                    <CardTitle>Infos de l&#39;administrateur</CardTitle>
                </CardHeader>
                    <Label>Nom</Label>
                    <Input type="text" name={"nom"} placeholder={info.name}
                     onChange={(e) => {
                            setName(e.target.value)
                     }}
                    />
                    <Label>Prénom</Label>
                    <Input type="text" name={"nom"} placeholder={info.name}
                     onChange={(e) => {
                            setName(e.target.value)
                     }}
                    />
                    <Label>Email</Label>
                    <Input type="text" placeholder={info.email.email} onChange={
                        (e) => {
                            setEmail(e.target.value)
                        }
                    }/>
                    <Label>Téléphone</Label>
                    <Input type="text" placeholder={info.phone} onChange={
                        (e) => {
                            setPhone(e.target.value)
                        }
                    }/>
                    <Button variant="secondary" onClick={
                        async  () => {
                            const result = await modifyInfo()

                        }
                    }>Valider</Button>
                <Link href="/admin">
                    <Button variant="link">Retour à votre dashboard</Button>
                </Link>
            </Card>
        </div>
    )
}
