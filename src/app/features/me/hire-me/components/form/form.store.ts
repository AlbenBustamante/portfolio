import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type State = {
  loading: boolean;
};

const initialState: State = {
  loading: false,
};

export const FormStore = signalStore(
  withState(initialState),
  withMethods((store) => ({
    setLoading: (loading: boolean) => {
      patchState(store, (_) => ({ loading }));
    },
  }))
);
