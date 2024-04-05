import { ref } from "vue";
import { useRouter } from "vue-router";
import { defineStore } from "pinia";

import { authCommands } from "../dependencies/auth.injection";
import { AuthRoutes } from "..";

export const useAuthStore = defineStore('auth',() => {
    const isAuthenticated = ref(false)
    const router = useRouter();
    const { logout:signOut } = authCommands;
    
    const setAuthenticated = (value: boolean) => {
        isAuthenticated.value = value;
    }

    const logout = () => {
        signOut();
        isAuthenticated.value = false;
        router.push({ name: AuthRoutes.LOGIN });
    }

    return {
        isAuthenticated,
        setAuthenticated,
        logout,
    }
})