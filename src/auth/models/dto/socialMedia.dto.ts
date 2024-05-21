import { UserDto } from '../../../user/models/dto/user.dto';

export type AuthProviderType =
  | 'google-oauth2'
  | 'facebook'
  | 'twitter'
  | 'github'
  | 'apple-id';

export interface SocialMediaCredentialsDto {
  access: string;
  refresh: string;
  user: UserDto;
}
