import { FontAwesome } from "@expo/vector-icons"
import { Icon } from "native-base"
import { StyleSheet, View } from "react-native"
import { range } from "src/utils/array"

type Props = {
  count: number
}

export const Stars = ({ count }: Props): JSX.Element => {
  return (
    <View style={styles.root}>
      {range(0, count - 1).map((_, i) => {
        return <Icon key={i} as={FontAwesome} name="star" color="yellow.500" />
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "row",
  },
})
