"use client"

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
import { useEffect, useState } from 'react';

const RescuerList: React.FC = () => {
    return (
      <Card className="w-[555px] m-auto mt-20">
        <CardHeader>
          <CardTitle>Liste des interventions</CardTitle>
        </CardHeader>
        <Link href="/dashboard">
          <Button variant="link">Retour à votre dashboard</Button>
        </Link>
      </Card>
    );
};

export default RescuerList;