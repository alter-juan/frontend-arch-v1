import Client from '../../core/client/client';
import { FetchError } from '../../core/errors/FetchError';
import { UserTranslate } from '../../user/services/userFetch.query';
import type {
  AuthProviderType,
  SocialMediaCredentialsDto,
} from '../models/dto';
import type { SocialMedia } from '../models/entity';
import type { SocialMediaCommand } from './socialMedia.repository';

enum API_ENDPOINT_SOCIAL_MEDIA {
  SOCIAL_LOGIN = '/social/login/',
  LOGOUT = '/authentication/logout/',
  SOCIAL_COMPLETE = '/social/complete/',
}

namespace SocialMediaTranslator {
  export function toDto(
    authenticationSocialMedia: SocialMediaCredentialsDto
  ): SocialMedia {
    return {
      access: authenticationSocialMedia.access,
      refresh: authenticationSocialMedia.refresh,
      user: UserTranslate.toEntity(authenticationSocialMedia.user),
    };
  }
}

export class SocialMediaAuthCommand implements SocialMediaCommand {
  async authenticateWithSocialMedia(
    code: string,
    typeAuth: AuthProviderType
  ): Promise<SocialMedia> {
    try {
      
      const response = await Client.post(
        API_ENDPOINT_SOCIAL_MEDIA.SOCIAL_COMPLETE,
        { code, provider: typeAuth }
      );
      const data = response?.data;

      if (!data) throw new Error('No data received from server');

      return SocialMediaTranslator.toDto(data);
    } catch (error) {
      throw new FetchError('Authentication failed. Please try again');
    }
  }

  async authenticateWithProvider(provide: AuthProviderType): Promise<string> {
    try {
      const response = await Client.get(
        API_ENDPOINT_SOCIAL_MEDIA.SOCIAL_LOGIN,
        { maxRedirects: 0, params: { provider: provide } },
      );
      
      const redirectUrl = response?.data?.redirect_url;

      if (!redirectUrl) throw new Error('No redirect URL received from server');

      return redirectUrl.replace('redirect_url', 'redirectUrl');
    } catch (error) {
      throw new FetchError('Authentication Google failed. Please try again');
    }
  }


  async logoutSocialMedia(): Promise<void> {
    try {
      const refreshToken = sessionStorage.getItem('refreshToken');

      if (!refreshToken) {
        throw new Error('Refresh token is required');
      }
      await Client.post(API_ENDPOINT_SOCIAL_MEDIA.LOGOUT, {
        refresh_token: refreshToken,
      });
    } catch (error) {
      throw new FetchError('Logout failed. Please try again');
    }
  }
}
