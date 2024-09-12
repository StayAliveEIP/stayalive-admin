import { toast } from "sonner"

async function apiVerifyEmail(code: string): Promise<void> {
    const bearerToken = localStorage.getItem('bearerToken');
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/account/verify-email`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${bearerToken}`
        },
        body: JSON.stringify({ code })
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    } else {
        toast("Votre adresse email a bien été vérifiée.", {
            action: {
            label: "Cacher",
            onClick: () => console.log("Hiden"),
            },
          });
    }

    const data = await response.json();
    console.log(data);
}

export default apiVerifyEmail;
