import { Component, inject } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SkillsAndTechnologies } from './skills-and-technologies/skills-and-technologies.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { AboutMeStore } from './about-me.store';

@Component({
  selector: 'app-about-me',
  imports: [
    HeaderComponent,
    SkillsAndTechnologies,
    ExperienceComponent,
    EducationComponent,
    CertificatesComponent,
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
  providers: [AboutMeStore],
})
export default class AboutMeComponent {
  readonly store = inject(AboutMeStore);

  constructor() {
    this.store.fetch();
  }
}
