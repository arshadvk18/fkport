import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, Renderer2, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AppComponent implements OnInit, AfterViewInit {
  isDarkMode = false;

  jobs = [
    {
      company: 'Veolia',
      tenure: 'Mar 2023 – Present',
      title: 'Process & Proposal Engineer',
      responsibilities: 'Led technical and commercial proposals, coordinated globally for optimal design and cost estimates.',
      tools: 'AutoCAD, MATLAB, Aspen Plus, MS Office',
      achievements: 'Successfully designed multiple large-scale wastewater treatment projects.',
      isOpen: false
    },
    {
      company: 'Veolia',
      tenure: 'Jul 2022 – Feb 2023',
      title: 'Graduate Engineer Trainee',
      responsibilities: 'Supported proposal prep, BOQs, process calculations, and vendor liaison.',
      tools: 'MS Excel, MS Word, AutoCAD',
      achievements: 'Contributed to multiple successful project proposals and cost estimates.',
      isOpen: false
    },
    {
      company: 'Ion Exchange',
      tenure: 'Apr – Jun 2021',
      title: 'Marketing Intern',
      responsibilities: 'Automated reference lists and worked with Power BI on analytics tasks.',
      tools: 'Power BI, MS Excel',
      achievements: 'Streamlined internal reference list process and improved reporting efficiency.',
      isOpen: false
    }
  ];

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    this.applyTheme();
  }

  ngAfterViewInit(): void {
    const sr = ScrollReveal({
      duration: 800,
      distance: '40px',
      easing: 'ease-in-out',
      origin: 'bottom',
      reset: false
    });

    sr.reveal('header, section', {
      interval: 100
    });
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme(): void {
    const body = document.body;
    if (this.isDarkMode) {
      this.renderer.addClass(body, 'dark-theme');
      this.renderer.removeClass(body, 'light-theme');
    } else {
      this.renderer.addClass(body, 'light-theme');
      this.renderer.removeClass(body, 'dark-theme');
    }
  }

  toggleJobDetails(job: { isOpen: boolean }): void {
    job.isOpen = !job.isOpen;
  }
}
