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
  
  const LoginAdminAccountPage: React.FC = () => {
  
  return (
    <Card>
      <Input
        type="Mail"
        placeholder="Adresse e-mail"
      />
      <Input
        type="Mot de passe"
        placeholder="Entrez votre mot de passe"
      />
      <Button variant="outline">Se connecter</Button>
    </Card>
  );
  };
  
  export default LoginAdminAccountPage;
  