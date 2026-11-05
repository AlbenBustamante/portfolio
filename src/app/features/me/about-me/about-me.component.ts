import { Component, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SkillsAndTechnologies } from './skills-and-technologies/skills-and-technologies.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { ContainerComponent } from '@components/container/container.component';
import { MeStore } from '../me.store';

@Component({
  selector: 'app-about-me',
  imports: [
    HeaderComponent,
    SkillsAndTechnologies,
    ExperienceComponent,
    EducationComponent,
    CertificatesComponent,
    ContainerComponent,
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export default class AboutMeComponent {
  readonly store = inject(MeStore);
}
