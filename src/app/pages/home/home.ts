import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink 
  ], 
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

  @ViewChild('myVideo') videoElement!: ElementRef<HTMLVideoElement>;
  
  isVideoPlaying = false;

  playVideo() {
    this.isVideoPlaying = true;
    
    // كنعطيو واحد المهلة صغييييرة باش الـ DOM يتحدث والـ Overlay يختفي
    setTimeout(() => {
      const video = this.videoElement.nativeElement;
      if (video) {
        video.play().catch(err => console.error("Video play failed:", err));
        video.controls = true; // كنبينو الـ Play/Pause بار
      }
    }, 100);
  }














  // 1. تعريف السلايدر الثقافي
  @ViewChild('sliderTrack') sliderTrack!: ElementRef;
  
  // 2. تعريف السلايدر الاجتماعي (اللي زدنا دابا)
  @ViewChild('socialSliderTrack') socialSliderTrack!: ElementRef;

  constructor() {}

  // دالة تحريك السلايدر الثقافي
  moveSlider(direction: number) {
    if (this.sliderTrack) {
      const scrollAmount = 320;
      this.sliderTrack.nativeElement.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
      });
    }
  }

  // دالة تحريك السلايدر الاجتماعي
  moveSocialSlider(direction: number) {
    if (this.socialSliderTrack) {
      const scrollAmount = 320;
      this.socialSliderTrack.nativeElement.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
      });
    }
  }

  // --- دوال السكرول (Scrolling Functions) ---

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToCultural(event: Event) {
    this.scrollToSection(event, 'cultural-projects-section');
  }

  scrollToAbout(event: Event) {
    this.scrollToSection(event, 'detailed-about');
  }
}