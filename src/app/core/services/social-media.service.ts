import { Injectable } from '@angular/core';
import { SocialMediaModel } from '@core/models/social-media.model';

@Injectable({
  providedIn: 'root',
})
export class SocialMediaService {
  readonly github: SocialMediaModel = {
    url: 'https://github.com/AlbenBustamante',
    socialName: 'GitHub',
    displayName: 'github.com/AlbenBustamante',
  };

  readonly linkedIn: SocialMediaModel = {
    url: 'https://linkedin.com/in/albenbustamante/',
    socialName: 'LinkedIn',
    displayName: 'linkedin.com/in/albenbustamante',
  };

  readonly discord: SocialMediaModel = {
    url: 'https://discordapp.com/users/429028705533165580',
    socialName: 'Discord',
    displayName: 'albenbustamante',
  };

  readonly email: SocialMediaModel = {
    url: 'mailto:hi@albenbustamante.dev',
    socialName: 'Email',
    displayName: 'hi@albenbustamante.dev',
  };

  readonly whatsApp: SocialMediaModel = {
    url: 'https://wa.me/584243202978',
    socialName: 'WhatsApp',
    displayName: '(+58) 4243202978',
  };

  constructor() {}
}
