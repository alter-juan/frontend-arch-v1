import { useRouter } from 'vue-router';

import { UserRoutes } from '../../../user/user.routes';
import { socialMediaCommands } from '../../dependencies/socialMedia.injection';
import type { AuthProviderType } from '../../models/dto';
import { ensureAuthenticationSocialMediaIsValid, type SocialMedia } from '../../models/entity';
import { useAuthStore } from '../../store/auth.store';

export function useSocialMediaController() {
  const router = useRouter();
  const authStore = useAuthStore();

  const {
    authenticateWithSocialMedia,
    authenticateWithProvider,
    logoutSocialMedia,
  } = socialMediaCommands;

  const handleAuthenticateWithGoogle = async () => {
    try {
      const authenticateWhitGoogle: AuthProviderType = 'google-oauth2';
      const redirectUrl = await authenticateWithProvider(
        authenticateWhitGoogle
      );
      if (redirectUrl) window.location.href = redirectUrl;
    } catch (error) {
      console.error('Error authenticate with google', error);
    }
  };

  const handleAuthenticationSocialMedia = async (
    code: string,
    provide: AuthProviderType
  ) => {
    try {
      ensureAuthenticationSocialMediaIsValid(code, provide);
      const data = await authenticateWithSocialMedia(code, provide);
      if (data) handleSuccessAuthentication(data);
    } catch (error) {
      console.error('Error authenticate with social media', error);
      authStore.logout();
    }
  };

  const handleSuccessAuthentication = async (data: SocialMedia) => {
    sessionStorage.setItem('refreshToken', data?.refresh);
    sessionStorage.setItem('token', data?.access);
    sessionStorage.setItem('userId', data?.user.id);

    router.push({ name: UserRoutes.DASHBOARD });
  };

  const userLogout = async () => {
    try {
      await logoutSocialMedia();
      authStore.logout();
    } catch (error) {
      console.error('Failed to logout', error);
      authStore.logout();
    }
  };

  return {
    handleAuthenticateWithGoogle,
    handleAuthenticationSocialMedia,
    userLogout,
  };
}
