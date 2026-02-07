import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // 1. ضروري تزيد هاد السطر

@Component({
  selector: 'app-makassid-sowar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './makassid-sowar.html',
  styleUrls: ['./makassid-sowar.css']
})
export class MakassidSowarComponent { }