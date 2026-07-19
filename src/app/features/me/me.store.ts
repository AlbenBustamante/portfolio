import { HomeModel } from '@core/models/home.model';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { computed, inject } from '@angular/core';
import { HomeApiService } from '@core/api/home-api.service';
import { forkJoin } from 'rxjs';
import { AppStore } from 'app/app.store';
import { AboutMeModel } from '@core/models/about-me.model';
import { AboutMeApiService } from '@core/api/about-me-api.service';
import { SkillsAndTechnologiesModel } from '@core/models/skills-and-technologies.model';
import { SkillsApiService } from '@core/api/skills-api.service';
import { ExperienceModel } from '@core/models/experience.model';
import { ExperienceApiService } from '@core/api/experience-api.service';
import { EducationModel } from '@core/models/education.model';
import { EducationApiService } from '@core/api/education-api.service';
import { CertificateModel } from '@core/models/certificate.model';
import { CertificateApiService } from '@core/api/certificate-api.service';

interface State {
  loading: boolean;
  home: HomeModel | undefined;
  aboutMe: AboutMeModel | undefined;
  skills: SkillsAndTechnologiesModel | undefined;
  experience: ExperienceModel | undefined;
  education: EducationModel | undefined;
  certificate: CertificateModel | undefined;
}

const initialState: State = {
  loading: false,
  home: undefined,
  aboutMe: undefined,
  skills: undefined,
  experience: undefined,
  education: undefined,
  certificate: undefined,
};

export const MeStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(
    (
      { home, aboutMe, skills, experience, education, certificate },
      appStore = inject(AppStore),
    ) => ({
      lang: computed(() => {
        const currentLang = appStore.lang();

        return {
          home: home()?.[currentLang],
          aboutMe: aboutMe()?.[currentLang],
          skills: skills()?.[currentLang],
          experience: experience()?.title[currentLang],
          education: education()?.[currentLang],
          certificate: certificate()?.[currentLang],
        };
      }),
    }),
  ),
  withMethods(
    (
      store,
      homeApi = inject(HomeApiService),
      aboutMeApi = inject(AboutMeApiService),
      skillsApi = inject(SkillsApiService),
      experienceApi = inject(ExperienceApiService),
      educationApi = inject(EducationApiService),
      certificateApi = inject(CertificateApiService),
    ) => ({
      fetch: () => {
        patchState(store, { loading: true });

        forkJoin({
          home: homeApi.getHome(),
          aboutMe: aboutMeApi.getAboutMe(),
          skills: skillsApi.getSkills(),
          experience: experienceApi.getExperience(),
          education: educationApi.getEducation(),
          certificate: certificateApi.getCertificate(),
        }).subscribe({
          next: ({
            home,
            aboutMe,
            skills,
            experience,
            education,
            certificate,
          }) => {
            patchState(store, {
              home,
              aboutMe,
              skills,
              experience,
              education,
              certificate,
              loading: false,
            });
          },
          error: (err) => {
            console.error(err);
            patchState(store, { loading: false });
          },
        });
      },
    }),
  ),
);
