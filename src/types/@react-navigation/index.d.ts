import { SaladID } from "src/models/salad"

export type RootStackParamList = {
  create: undefined
  edit: { id: SaladID }
  index: undefined
}

declare global {
  namespace ReactNavigation {
    // overwrite global navigation type definition
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions, @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList {}
  }
}
