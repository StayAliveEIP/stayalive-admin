"use client"

import Link from "next/link";
import {Card, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import apiDashboardGetInfo from "@/actions/apiDashboardGetInfo";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {useEffect, useState} from "react";
import {apiDashboardModifyCC} from "@/actions/apiDashboardModifyCC";
import {toast} from "sonner";
import { useRouter} from "next/navigation";

export default  function Page({params}: {
    params: {
        id: string
    }
}) {

    const [info, setInfo] = useState({
        name: "",
        email: {
            email: "",
            verified: true,
            lastCodeSent: ""
        },
        phone: "",
        address: {
            street: "",
            city: "",
            zip: ""
        }
    })

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [zip, setZip] = useState("")

    const router = useRouter()
    async function modifyInfo() {
        const data = {
            id: params.id,
            name: name,
            email: email,
            phone: phone,
            address: {
                street: street,
                city: city,
                zip: zip
            }
        }
        const response = await apiDashboardModifyCC(data);
        if (!response.error) {
            toast.success("Les informations ont bien été modifiées")
            router.push("/dashboard")
        } else {
            toast.error("Une erreur est survenue")
        }
    }


    useEffect(() => {
        apiDashboardGetInfo(params.id, localStorage.getItem("bearerToken")as string).then((data) => {
            console.log(data)
            setInfo(data)
            setName(data.name)
            setEmail(data.email.email)
            setPhone(data.phone)
            setStreet(data.address.street)
            setCity(data.address.city)
            setZip(data.address.zip)
        })
    } ,[])

    return (
        <div>
            <Card className="w-[555px] m-auto mt-20 p-1">
                <CardHeader>
                    <CardTitle>Infos du centre d&#39;appel</CardTitle>
                </CardHeader>
                    <Label>Nom</Label>
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
                    <Label>Adresse</Label>
                    <Input type="text" placeholder={info.address.street} onChange={
                        (e) => {
                            setStreet(e.target.value)
                        }
                    }/>
                    <Label>Ville</Label>
                    <Input type="text" placeholder={info.address.city} onChange={
                        (e) => {
                            setCity(e.target.value)
                        }
                    }/>
                    <Label>Code postal</Label>
                    <Input type="text" placeholder={info.address.zip} onChange={
                        (e) => {
                            setZip(e.target.value)
                        }
                    }/>
                    <Button variant="secondary" onClick={
                        async  () => {
                            const result = await modifyInfo()

                        }
                    }>Valider</Button>
                <Link href="/dashboard">
                    <Button variant="link">Retour à votre dashboard</Button>
                </Link>
            </Card>
        </div>
    )
}
