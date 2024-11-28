"use client"

import { Feedback, columns } from "./columns";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { DataTable } from "./data-table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Navbar } from "@/components/navbar";
import apiGetFeedback from "@/actions/apiGetFeedback";
import apiGetFeedbackByID from "@/actions/apiGetFeedbackByID";

export default function FeedbackList() {
    const [feedback, setFeedback] = useState<Feedback[]>([]);
    const [feedbackID, setFeedbackID] = useState<string>("");
    const [filteredFeedback, setFilteredFeedback] = useState<Feedback | null>(null);

    useEffect(() => {
        apiGetFeedback().then(r => {
            console.log(r);
            if (r != undefined) {
                setFeedback(r);
            }
        });
    }, []);

    const handleGetFeedbackByID = async () => {
        if (!feedbackID) {
            alert("Veuillez entrer un ID valide.");
            return;
        }
        try {
            const feedbackItem = await apiGetFeedbackByID(feedbackID);
            setFilteredFeedback(feedbackItem);
        } catch (error) {
            console.error("Erreur:", error);
            alert("Aucun feedback trouvé avec cet ID.");
        }
    };

    const handleReset = () => {
        setFilteredFeedback(null);
        setFeedbackID("");
    };

    return (
        <div>
          <Navbar/>
          <div className="container mx-auto">
            <CardTitle className="m-auto flex justify-center mb-20 mt-7">Listes des feedbacks</CardTitle>
            <div className="mb-5">
              <Label htmlFor="feedbackID">Afficher un feedback via son ID</Label>
              <Input
                type="text"
                id="feedbackID"
                className="w-1/4"
                placeholder="Entrez l'ID du feedback"
                value={feedbackID}
                onChange={(e) => setFeedbackID(e.target.value)}
              />
              <Button variant="secondary" onClick={handleGetFeedbackByID} className="ml-2">
                <Check className={"mr-2 h-4 w-4"} />
                Afficher le feedback
              </Button>
              <Button variant="secondary" onClick={handleReset} className="ml-2">
                Réinitialiser la liste
              </Button>
            </div>
            {filteredFeedback ? (
              <DataTable columns={columns} data={[filteredFeedback]} />
            ) : (
              <DataTable columns={columns} data={feedback} />
            )}
          </div>
        </div>
    );
};
