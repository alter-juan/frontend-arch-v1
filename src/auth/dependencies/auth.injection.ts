import { useAuth0 } from "@auth0/auth0-vue";

import { Auth0Command } from "../services/auth0.command";

export const useAuthInjection = () => {
  const auth0Client = useAuth0();
  const auth0Command = new Auth0Command(auth0Client);

  return {
    auth0Client,
    auth0Command,
  };
};
