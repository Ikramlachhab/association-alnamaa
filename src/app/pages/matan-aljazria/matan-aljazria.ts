import { Component } from '@angular/core';
// السطر اللي لتحت هو اللي ناقصك وكيخلي الخطأ يطلع
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-matan-aljazria',
  standalone: true,
  imports: [RouterLink], // دابا هادي غادي تولي خدامة ومزيانة
  templateUrl: './matan-aljazria.html',
  styleUrls: ['./matan-aljazria.css']
})
export class MatanAljazriaComponent { }