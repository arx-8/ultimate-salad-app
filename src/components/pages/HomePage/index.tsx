import { StyleSheet, Text, View } from "react-native"

export const HomePage = (): JSX.Element => {
  return (
    <View style={styles.root}>
      <Text>Hello HomePage</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
})
