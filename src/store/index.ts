import { configureStore } from "@reduxjs/toolkit"
import {
  TypedUseSelectorHook,
  useDispatch as rawUseDispatch,
  useSelector as rawUseSelector,
} from "react-redux"
import { saladsSlice } from "src/store/salads"

export const store = configureStore({
  reducer: {
    salads: saladsSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

/**
 * typed helpers
 */
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector
export const useDispatch: () => typeof store.dispatch = rawUseDispatch
