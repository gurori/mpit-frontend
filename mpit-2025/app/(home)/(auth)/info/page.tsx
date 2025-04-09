import { getToken } from "@/lib/services/user";
import InfoForm from "./InfoForm";

export default async function InfoPage() {
    const token = await getToken()
    return <InfoForm token={token!.value} />
}