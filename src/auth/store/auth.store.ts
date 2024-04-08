import { defineStore } from "pinia";

import { useAuthInjection } from "../dependencies/auth.injection";

export const useAuthStore = defineStore("auth", () => {
  const { auth0Client, auth0Command } = useAuthInjection();

  return {
    isAuthenticated: auth0Client.isAuthenticated,
    isAuthenticationLoading: auth0Client.isLoading,
    login: auth0Command.login.bind(auth0Command),
    logout: auth0Command.logout.bind(auth0Command),
  };
});
