import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
<<<<<<< HEAD
import { AppComponent } from './app/app'; // On importe AppComponent

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
=======
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
>>>>>>> 097e52967e07d046b078d3c2a7980b6268b02df9
