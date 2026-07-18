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

interface State {
  loading: boolean;
  home: HomeModel | undefined;
  aboutMe: AboutMeModel | undefined;
  skills: SkillsAndTechnologiesModel | undefined;
}

const initialState: State = {
  loading: false,
  home: undefined,
  aboutMe: undefined,
  skills: undefined,
};

export const MeStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ home, aboutMe, skills }, appStore = inject(AppStore)) => ({
    lang: computed(() => {
      const currentLang = appStore.lang();

      return {
        home: home()?.[currentLang],
        aboutMe: aboutMe()?.[currentLang],
        skills: skills()?.[currentLang],
      };
    }),
  })),
  withMethods(
    (
      store,
      homeApi = inject(HomeApiService),
      aboutMeApi = inject(AboutMeApiService),
      skillsApi = inject(SkillsApiService),
    ) => ({
      fetch: () => {
        patchState(store, { loading: true });

        forkJoin({
          home: homeApi.getHome(),
          aboutMe: aboutMeApi.getAboutMe(),
          skills: skillsApi.getSkills(),
        }).subscribe({
          next: ({ home, aboutMe, skills }) => {
            patchState(store, { home, aboutMe, skills, loading: false });
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
