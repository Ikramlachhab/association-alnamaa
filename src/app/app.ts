import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms'; // سطر مهم
import { CommonModule } from '@angular/common';

// تأكدي أن هاد المسارات صحيحة على حساب فين حاطة المجلدات
import { NavbarComponent } from './components/navbar/navbar'; 
import { FooterComponent } from './components/footer/footer'; 
=======
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
>>>>>>> fac1aebf509f40a12ceead912408894dcad794dd

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [
    RouterOutlet, 
    CommonModule,
    NavbarComponent, 
    FooterComponent, 
    ReactiveFormsModule
  ], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'association-alnamaa';
}
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router'; // ضروري تزيد هادي
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes, 
      withInMemoryScrolling({ 
        anchorScrolling: 'enabled', // هادي هي اللي كتدير السحر
        scrollPositionRestoration: 'enabled' // هادي هي اللي كطلع الصفحة للفوق
      })
    )
  ]
};
=======
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'charity-app';
}
>>>>>>> fac1aebf509f40a12ceead912408894dcad794dd
