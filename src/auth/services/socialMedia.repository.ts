import type { AuthProviderType } from '../models/dto';
import type { SocialMedia } from '../models/entity';

export interface SocialMediaCommand {
  authenticateWithSocialMedia: (
    verificationCode: string,
    provide: AuthProviderType
  ) => Promise<SocialMedia>;
  authenticateWithProvider: (provide: AuthProviderType) => Promise<string>;
  logoutSocialMedia: () => Promise<void>;
}
