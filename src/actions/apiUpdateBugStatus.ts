"use server"

const apiUpdateBugStatus = async (id: string, token: string) => {
    console.log(token);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/report/bug/${id}/status`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    if (!response.ok) {
       return {error: true, message: "Une erreur inattendue est survenue."}
    }
    return {error: false, message: "Status changed."}
}

export default apiUpdateBugStatus;