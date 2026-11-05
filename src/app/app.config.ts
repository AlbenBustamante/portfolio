import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  TitleStrategy,
  withComponentInputBinding,
  withInMemoryScrolling,
  withPreloading,
} from '@angular/router';

import { routes } from './app.routes';

import { provideHttpClient } from '@angular/common/http';
import { AppTitleStrategyService } from '@core/strategies/app-title-strategy.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withPreloading(PreloadAllModules),
      withComponentInputBinding(),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
    ),
    provideHttpClient(),
    { provide: TitleStrategy, useClass: AppTitleStrategyService },
  ],
};
