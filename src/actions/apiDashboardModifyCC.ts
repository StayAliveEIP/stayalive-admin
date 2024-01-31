

export const apiDashboardModifyCC = async (data: any) => {
    const bearerToken = localStorage.getItem('bearerToken');
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/call-center/update`, {
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${bearerToken}`
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
       return { error: true, message: `Erreur HTTP: ${response.status}` };
    }

    return response.json();
}
