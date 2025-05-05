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
      company: 'AQUA Water By TECTON, Ajman, UAE',
      tenure: 'Oct 2024 – Present',
      title: 'Process & Proposal Engineer',
      responsibilities: `• Analyze tender documents to understand project requirements and specifications. Prepare Bill of Quantities (BOQ) for equipment, valves, piping, and electrical load lists to assist in accurate cost estimation.<br>
                       • Identify ambiguities in tender documents and formulate pre-bid queries to clarify project requirements.<br>
                       • Perform detailed design calculations for wastewater/water treatment to ensure compliance with tender and project requirements.<br>
                       • Coordinate with vendors to define equipment specs, secure accurate quotations, and compare quotes to ensure alignment with tender requirements.<br>
                       • Design detailed Piping and Instrumentation Diagrams (P&ID) in collaboration with CAD engineers for system layout development.<br>
                       • Deliver PowerPoint presentations to clients, offering alternative technological options and providing in-depth comparisons of Capex and Opex to help clients make informed decisions.`,
      tools: 'AutoCAD, MS Excel, MS PowerPoint, MS Word, Power BI',
      achievements: `• Successfully contributed to cost estimation and design calculations for large-scale water treatment projects.<br>
                    • Played a key role in clarifying tender requirements and providing valuable pre-bid inputs.<br>
                    • Delivered impactful client presentations, aiding decision-making with comprehensive cost analysis.`,
      isOpen: false
    },
    {
      company: 'Veolia Water Technology (Suez)',
      tenure: 'Jul 2022 – Oct 2024',
      title: 'Process Engineer',
      responsibilities: `• Gained preliminary knowledge and hands-on experience with VWTS products such as ZWEED membranes, ZEEWLUNGMABR, Filtration & Spiral Wound Membrane elements, and F&M ROED.<br>
                         • Interpreted and analyzed customer and consultant specifications for clear understanding and implementation.<br>
                         • Coordinated with regional teams (Europe, North America, Southeast Asia) for P&ID development, technical queries, and reviews.<br>
                         • Worked closely with CAD teams to prepare P&ID, Layouts, and PFDs.<br>
                         • Collaborated with cross-functional teams for project review and completion.<br>
                         • Conducted site visits in South Asia to address plant issues, observations, and provide actionable solutions for smooth operations.<br>
                         • Prepared site visit reports with observations and corrective actions.<br>
                         • Managed the Learning & Development platform, organizing training sessions to foster employee growth.<br>
                         • Prepared control philosophies for MBR and RO units.<br>
                         • Gained knowledge of OSC (Operational Sequential Cycle) and Control Logic.<br>
                         • Delivered critical project documentation such as utility, chemical consumption lists, line lists, and valve lists.`,
      tools: 'AutoCAD, MATLAB, Aspen Plus, MS Office',
      achievements: `• Successfully contributed to the design and implementation of large-scale water treatment projects.<br>
                     • Enhanced operational efficiency through plant observations and corrective actions during site visits.`,
      isOpen: false
      
    },
    {
      company: 'Arvind Envisol Limited, Ahmedabad',
      tenure: 'Dec 2018 – Jul 2022',
      title: 'Senior Process Engineer',
      responsibilities: `• Led proposals for EPC/Turnkey water treatment projects in the industrial sector.<br>
                       • Prepared process design, mass balance, PFD, P&IDs, hydraulic flow diagrams, and plant layouts.<br>
                       • Assessed and evaluated tenders and industrial inquiries for water and wastewater treatment, identifying key requirements and risks.<br>
                       • Developed strategies for project bidding and coordinated with management on project-winning approaches.<br>
                       • Designed, estimated, and prepared offers/contracts for water treatment, wastewater treatment, recycling, and zero liquid discharge systems.<br>
                       • Coordinated with electrical and civil engineers for BOQ preparation and cost estimation.`,
      tools: 'AutoCAD, MS Excel, MS Word',
      achievements: `• Contributed significantly to successful project proposals, driving key water treatment projects.<br>
                    • Played a pivotal role in designing and estimating large-scale water and wastewater treatment systems.`,
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
