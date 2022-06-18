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
        // eslint-disable-next-line react/no-array-index-key
        return <Icon as={FontAwesome} color="yellow.500" key={i} name="star" />
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
