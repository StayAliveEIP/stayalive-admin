
"use client"

import { Bugs, columns } from "./columns";
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
import apiGetBugByID from "@/actions/apiGetBugByID";
import apiGetBugs from "@/actions/apiGetBugs";

export default function BugsList() {
    const [bugs, setBugs] = useState<Bugs[]>([]);
    const [bugID, setBugID] = useState<string>("");
    const [filteredBug, setFilteredBug] = useState<Bugs | null>(null);

    useEffect(() => {
      apiGetBugs().then(r => {
        console.log(r);
        if (r != undefined) {
          setBugs(r);
        }
      });
    }, []);

    const handleGetBugByID = async () => {
        if (!bugID) {
            alert("Veuillez entrer un ID valide.");
            return;
        }
        try {
            const bug = await apiGetBugByID(bugID);
            setFilteredBug(bug);
        } catch (error) {
            console.error("Erreur:", error);
            alert("Aucun bug trouvé avec cet ID.");
        }
    };

    const handleReset = () => {
        setFilteredBug(null);
        setBugID("");
    };

    return (
        <div>
          <Navbar />
          <div className="container mx-auto">
            <CardTitle className="m-auto flex justify-center mb-20 mt-7">Liste des bugs</CardTitle>
            <div className="mb-5">
              <Label htmlFor="bugID">Afficher un bug via son ID</Label>
              <Input
                type="text"
                id="bugID"
                className="w-1/4"
                placeholder="123qwerty456asdfgh789zxcvbn0o"
                value={bugID}
                onChange={(e) => setBugID(e.target.value)}
              />
              <Button variant="secondary" onClick={handleGetBugByID} className="ml-2">
                <Check className={"mr-2 h-4 w-4"} />
                Afficher le bug
              </Button>
              <Button variant="secondary" onClick={handleReset} className="ml-2">
                Afficher tout bugs
              </Button>
            </div>
            {filteredBug ? (
              <DataTable columns={columns} data={[filteredBug]} />
            ) : (
              <DataTable columns={columns} data={bugs} />
            )}
          </div>
        </div>
    );
};
