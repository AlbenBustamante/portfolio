import { Lang } from '@core/models/lang.model';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

interface State {
  selectedLanguage: Lang | undefined;
}

const initialState: State = {
  selectedLanguage: undefined,
};

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    setLanguage: (language: Lang) => {
      patchState(store, { selectedLanguage: language });
    },
  })),
);
