import type { Auth0VueClientOptions } from "@auth0/auth0-vue";

export const auth0Configuration: Auth0VueClientOptions = {
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
    authorizationParams: {
        redirect_uri: new URL("/auth/callback", window.location.origin).href,
    },
}
