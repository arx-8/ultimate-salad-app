import { IInputProps, Input } from "native-base"
import { Platform } from "react-native"
import { toNumber } from "src/utils/number"

const keyboardTypeAsNumber =
  Platform.OS === "android" ? "numeric" : "number-pad"

type Props = {
  onChange: (v: number | undefined) => void
  value: number
}

export const NumberInput = ({ onChange, value }: Props): JSX.Element | null => {
  const onChangeText: IInputProps["onChangeText"] = (s) => {
    onChange(toNumber(s))
  }

  return (
    <Input
      keyboardType={keyboardTypeAsNumber}
      onChangeText={onChangeText}
      value={value.toString()}
      variant="outline"
    />
  )
}
