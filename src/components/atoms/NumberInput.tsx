import { Input } from "native-base"
import { InterfaceInputProps } from "native-base/lib/typescript/components/primitives/Input/types"
import { Platform } from "react-native"
import { toNumber } from "src/utils/number"

const keyboardTypeAsNumber =
  Platform.OS === "android" ? "numeric" : "number-pad"

type Props = {
  onChange: (v: number | undefined) => void
  value: number
} & Omit<InterfaceInputProps, "onChange" | "value">

export const NumberInput = ({
  onChange,
  value,
  ...rest
}: Props): JSX.Element | null => {
  const onChangeText: InterfaceInputProps["onChangeText"] = (s) => {
    onChange(toNumber(s))
  }

  return (
    <Input
      {...rest}
      keyboardType={keyboardTypeAsNumber}
      onChangeText={onChangeText}
      value={value.toString()}
      variant="outline"
    />
  )
}
