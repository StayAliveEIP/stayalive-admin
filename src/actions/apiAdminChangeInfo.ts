import { toast } from "sonner"

const apiAdminChangeInfo = async (accountID: string, accountFirstname: string, accountLastname: string) => {
    const bearerToken = localStorage.getItem('bearerToken');
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/account/update`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${bearerToken}`
        },
        body: JSON.stringify({
            id: accountID,
            firstname: accountFirstname,
            lastname: accountLastname
        })
    });

    console.log(accountID);
    console.log(accountFirstname);
    console.log(accountLastname);

    if (!response.ok) {
      toast("Une erreur innatendue est survenue", {
        action: {
        label: "Cacher",
        onClick: () => console.log("Hiden"),
        },
      });
        throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
      toast("Vos informations été modifiées avec succès", {
        action: {
        label: "Cacher",
        onClick: () => console.log("Hiden"),
        },
      });
    }

    const data = await response.json();
    return data.message;
}
  
export default apiAdminChangeInfo;