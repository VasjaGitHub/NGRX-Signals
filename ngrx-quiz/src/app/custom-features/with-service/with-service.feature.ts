import { PartialStateUpdater, patchState, Prettify, SignalStoreFeature, signalStoreFeature, type, withMethods } from "@ngrx/signals";
import { RxMethod, rxMethod } from "@ngrx/signals/rxjs-interop";
import { exhaustMap, Observable, tap } from "rxjs";
import { setBusy, setIdle } from "../with-busy/with-busy.updaters";
import { BusySlice } from "../with-busy/with-busy.slice";
import { tapResponse } from "@ngrx/operators";

type Update<S extends object> = Partial<Prettify<S>> | PartialStateUpdater<Prettify<S>>;

// Declaration of the function
export function withService<T, S extends object>(
   loader: () => Observable<T>,
   updater: (data: T) => Update<S>): SignalStoreFeature<
      {
         state: S & BusySlice,
         props: {},
         methods: {}
      }, {
         state: {},
         props: {},
         methods: {
            _load: RxMethod<void>
         }
      }>;

export function withService<T, S extends object>(
   loader: () => Observable<T>,
   updater: (data: T) => Update<S>) {
   return signalStoreFeature(
      { state: type<S & BusySlice>() },
      withMethods(store => {
         const source$ = loader();
         return {
            _load: rxMethod<void>(trigger$ => trigger$.pipe(
               tap(() => patchState(store, setBusy() as any)),
               exhaustMap(() => source$.pipe(
                  tapResponse({
                     next: data => patchState(store, updater(data) as any),
                     error: error => console.error(error),
                     finalize: () => patchState(store, setIdle() as any)
                  })
               ))
            ))
         }
      })
   )
}