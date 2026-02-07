import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // ضروري تزيد هادي

@Component({
  selector: 'app-koni-sahabia',
  standalone: true, // تأكدي أنها true
  imports: [RouterLink], // زيديها هنا باش الـ HTML يفهم شنو هي routerLink
  templateUrl: './koni-sahabia.html',
  styleUrls: ['./koni-sahabia.css']
})
export class KoniSahabiaComponent { }