import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CreateAdminAccountPage: React.FC = () => {

return (
  <Card className="w-[350px]">
    <CardHeader>
      <CardTitle>Création de compte Administrateur</CardTitle>
    </CardHeader>
    <CardContent>
    <Input
      type="Nom"
      placeholder="Entrez votre nom"
    />
    <Input
      type="Prénom"
      placeholder="Entrez votre prénom"
    />
    <Input
      type="Mail"
      placeholder="Entrez votre adresse e-mail"
    />
    <Input
      type="Mot de passe"
      placeholder="Entrez votre mot de passe"
    />
    <Input
      type="Confirmation du mot de passe"
      placeholder="Confirmez votre mot de passe"
    />
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button>Annuler</Button>
      <Button variant="outline">Créer un compte Admin</Button>
    </CardFooter>
  </Card>
);
};

export default CreateAdminAccountPage;