import { ref } from "vue";
import { useRouter } from "vue-router";
import { defineStore } from "pinia";

import { AuthRoutes } from "../auth.routes";
import { authCommands } from "../dependencies/auth.injection";

export const useAuthStore = defineStore('auth',() => {
  const isAuthenticated = ref(false)
  const router = useRouter();
  const { logout: signOut } = authCommands;

  const setAuthenticated = (value: boolean) => {
    isAuthenticated.value = value;
  }

  const logout = () => {
    signOut.bind(authCommands)();
    isAuthenticated.value = false;
    router.push({ name: AuthRoutes.LOGIN });
  }

  return {
    isAuthenticated,
    setAuthenticated,
    logout,
  }
})
