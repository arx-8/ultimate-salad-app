import { NativeBaseProvider } from "native-base"
import { ReactChild } from "react"

type Props = {
  children: ReactChild
}

export const GlobalStyles = ({ children }: Props): JSX.Element => {
  return <NativeBaseProvider>{children}</NativeBaseProvider>
}
