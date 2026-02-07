import { ApplicationConfig } from '@angular/core'; // هذا السطر هو الذي ينقصك
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};