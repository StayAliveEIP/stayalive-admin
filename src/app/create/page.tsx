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

const CreateAccountPage: React.FC = () => {

const handleSubmit = async () => {
  try {
    const response = await fetch(process.env.API_URL + "/admin/account/new", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      }),
    });

    const data = await response.json();
    console.log(data.message);

  } catch (error) {
    console.error('Error creating account:', error);
  }
};

return (
  <Card>
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
    <Button variant="secondary">Créer un compte Admin</Button>
  </Card>
);
};

export default CreateAccountPage;
