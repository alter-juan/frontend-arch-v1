import { LoginPayload, ensureLoginPayloadIsValid } from "../../models/entity"
import { authCommands } from "../../dependencies/auth.injection";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../store/auth.store";

export function useLoginController() {
    const { login } = authCommands;
    const router = useRouter();
    const authStore = useAuthStore();

    const handleSubmit = async (payload: LoginPayload) => {
        try {
            ensureLoginPayloadIsValid(payload);
            await login(payload);
            authStore.setAuthenticated(true);
            router.push("/");
        } catch (error: any) {
            alert(error.message);
        }
    }

    return {
        handleSubmit
    }
}