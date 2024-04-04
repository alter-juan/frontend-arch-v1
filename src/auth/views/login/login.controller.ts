import { LoginPayload, ensureLoginPayloadIsValid } from "../../models/entity"
import { authCommands } from "../../dependencies/auth.injection";
import { useRouter } from "vue-router";

export function useLoginController() {
    const { login } = authCommands;
    const router = useRouter();

    const handleSubmit = async (payload: LoginPayload) => {
        try {
            ensureLoginPayloadIsValid(payload);
            await login(payload);
            router.push("/");
        } catch (error: any) {
            alert(error.message);
        }
    }

    return {
        handleSubmit
    }
}