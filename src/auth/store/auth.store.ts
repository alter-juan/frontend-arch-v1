import { defineStore } from "pinia";
import { authCommands } from "../dependencies/auth.injection";
import { useRouter } from "vue-router";
import { AuthRoutes } from "..";
import { ref } from "vue";

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