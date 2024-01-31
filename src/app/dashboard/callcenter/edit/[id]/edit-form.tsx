import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import apiDashboardGetInfo from "@/actions/apiDashboardGetInfo";

export async  function EditForm({id, token}: { id: string, token: string }) {

    const info = await apiDashboardGetInfo(id, token)

    return (
        <>

        </>
    )
}
