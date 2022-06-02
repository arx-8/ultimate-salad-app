import { useNavigation } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { Button, StyleSheet, Text, View } from "react-native"

export const IndexPage = (): JSX.Element => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text>IndexPage</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate("details")
        }}
      />

      <StatusBar style="auto" />
    </View>
  )
}

const bgColor = "#FAA"

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: bgColor,
    flex: 1,
    justifyContent: "center",
  },
})
