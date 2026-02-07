import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // ضروري تزيد هاد السطر باش يتعرف على الميزة

@Component({
  selector: 'app-nadi-atrija',
  standalone: true,
  imports: [RouterLink], // دابا هادي ولات معرفة وخدامة
  templateUrl: './nadi-atrija.html',
  styleUrl: './nadi-atrija.css'
})
export class NadiAtrijaComponent { }