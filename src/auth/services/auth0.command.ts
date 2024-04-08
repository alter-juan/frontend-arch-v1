import { Auth0VueClient } from "@auth0/auth0-vue";

import { AuthCommand } from "./auth.repository";

export class Auth0Command implements AuthCommand {
  constructor(private authClient: Auth0VueClient) {}

  login(): Promise<void> {
    return this.authClient.loginWithRedirect();
  }

  logout(): Promise<void> {
    return this.authClient.logout({
      logoutParams: { returnTo: window.location.origin },
    });
  }
}
