import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; // 1. ضيفي RouterLink هنا
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './components/navbar/navbar'; 
import { FooterComponent } from './components/footer/footer'; 

@Component({
  selector: 'app-root',
  standalone: true,
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
export class AppComponent { }