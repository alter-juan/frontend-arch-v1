import { SocialMediaAuthCommand } from '../services/socialMedia.command';
import type { SocialMediaCommand } from '../services/socialMedia.repository';

export const socialMediaCommands: SocialMediaCommand =
  new SocialMediaAuthCommand();
