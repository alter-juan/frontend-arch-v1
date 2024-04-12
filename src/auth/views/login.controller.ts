import { useRouter } from "vue-router";

import { useAuthStore } from "@/auth/store/auth.store";
import { authCommands } from "../dependencies/auth.injection";
import { ensureLoginPayloadIsValid,LoginPayload } from "../models/entity";

export function useLoginController() {
  const { login, loginWithGoogle } = authCommands;

  const router = useRouter();
  const authStore = useAuthStore();

  const setAsAuthenticatedAndRedirect = () => {
    authStore.setAuthenticated(true);
    router.push("/");
  }

  const handleSubmit = async (payload: LoginPayload) => {
    try {
      ensureLoginPayloadIsValid(payload);
      await login.bind(authCommands)(payload);
      setAsAuthenticatedAndRedirect()
    } catch (error: any) {
      alert(error.message);
    }
  }

  const handleLoginWithGoogle = async () => {
    try {
      await loginWithGoogle.bind(authCommands)();
      setAsAuthenticatedAndRedirect()
    } catch (error: any) {
      alert(error.message);
    }
  }

  return {
    handleSubmit,
    handleLoginWithGoogle,
  }
}
