import type { User } from '../../../user/models/entity';
import type { AuthProviderType } from '../dto';

const AUTH_PROVIDER_VALUES: AuthProviderType[] = [
  'google-oauth2',
  'facebook',
  'twitter',
  'github',
  'apple-id',
];

export interface SocialMedia {
  access: string;
  refresh: string;
  user: User;
}

export const isValidProvider = (provider: AuthProviderType): boolean => {
  return AUTH_PROVIDER_VALUES.includes(provider);
};

export const ensureAuthenticationSocialMediaIsValid = (
  code: string,
  provider: AuthProviderType
): void => {
  if (!code) {
    throw new Error('code is required');
  }
  if (!isValidProvider(provider)) {
    throw new Error('Provider is invalid');
  }
};
