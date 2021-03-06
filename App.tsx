import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { HomePage } from "src/components/pages/HomePage"

export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <HomePage />
      <StatusBar style="auto" />
    </View>
  )
}

const bgColor = "#fff"

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: bgColor,
    flex: 1,
    justifyContent: "center",
  },
})
