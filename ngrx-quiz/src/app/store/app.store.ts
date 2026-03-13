import { patchState, signalStore, withComputed, withHooks, withMethods, withProps, withState } from "@ngrx/signals";
import { initialAppSlice } from "./app.slice";
import { computed, inject } from "@angular/core";
import { DICTIONARIES_TOKEN } from "../tokens/dictionaries.token";
import { changeLanguage, resetLanguages } from "./app.updaters";
import { getDictionary } from "./app.helpers";

export const AppStore = signalStore(
   { providedIn: 'root' },
   withState(initialAppSlice),
   withProps((_store) => {
      const _dictionaries = inject(DICTIONARIES_TOKEN);
      const _languages = Object.keys(_dictionaries);

      return {
         _dictionaries, _languages
      }
   }),
   withComputed((_store) => ({
      selectedDictionary: computed(() =>
         getDictionary(_store.selectedLanguage(), _store._dictionaries)),
   })),
   withMethods(_store => ({
      changeLanguage: () => patchState(_store, changeLanguage(_store._languages)),
      _resetLanguages: () => patchState(_store, resetLanguages(_store._languages))
   }
   )),
   withHooks(_store => ({
      onInit: () => {
         _store._resetLanguages();
      }
   }))
)