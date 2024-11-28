"use client";

import {
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { Documents, columns } from "./columns";
import { useEffect, useState } from "react";

import { DataTable } from "./data-table";
import { Navbar } from "@/components/navbar";
import apiRescuerGetDocument from "@/actions/apiRescuerGetDocument";
import { useParams } from "next/navigation";

export default function RescuersDocument() {
  const [documents, setDocuments] = useState<Documents[]>([]);
  const params = useParams();
  const rescuerId = params?.id;
  console.log("Extracted rescuerId:", rescuerId);

  useEffect(() => {
    if (rescuerId) {
      console.log("Fetching documents for rescuerId:", rescuerId);
      apiRescuerGetDocument(rescuerId.toString()).then((r) => {
        console.log("API response:", r);
        if (r != undefined) {
          setDocuments(r);
        }
      });
    } else {
      console.error("Rescuer ID is missing in the URL");
    }
  }, [rescuerId]);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <CardTitle className="m-auto flex justify-center mb-20 mt-7">
          Liste des documents du sauveteur
        </CardTitle>
        <CardContent>
          <DataTable columns={columns} data={documents} />
        </CardContent>
      </div>
    </div>
  );
}
