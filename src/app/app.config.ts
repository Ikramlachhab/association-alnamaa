import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router'; // زيدي استيراد هاد الدالة
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      // زيدي هاد السطر هنا باش أي صفحة تحلات تبدا من الفوق
      withInMemoryScrolling({ scrollPositionRestoration: 'top' })
    )
  ]
};