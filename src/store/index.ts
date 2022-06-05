import {
  AsyncThunk,
  AsyncThunkOptions,
  AsyncThunkPayloadCreator,
  configureStore,
  createAsyncThunk as rawCreateAsyncThunk,
} from "@reduxjs/toolkit"
import {
  TypedUseSelectorHook,
  useDispatch as rawUseDispatch,
  useSelector as rawUseSelector,
} from "react-redux"
import * as storage from "src/data/storage"
import { saladsSlice } from "src/store/salads"

export const store = configureStore({
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: {
        extraArgument: {
          storage,
        },
      },
    })
  },
  reducer: {
    salads: saladsSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

/**
 * typed helpers
 */
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector
export const useDispatch: () => typeof store.dispatch = rawUseDispatch

type ThunkExtraArgument = {
  storage: typeof storage
}

type ThunkApiConfig = {
  dispatch: AppDispatch
  extra: ThunkExtraArgument
  state: RootState
}

export const createAsyncThunk: <
  TReturned = void,
  TPayload = void,
  TThunkApiConfig extends object = ThunkApiConfig
>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<
    TReturned,
    TPayload,
    TThunkApiConfig
  >,
  options?: AsyncThunkOptions<TPayload, TThunkApiConfig>
) => AsyncThunk<TReturned, TPayload, TThunkApiConfig> = rawCreateAsyncThunk
