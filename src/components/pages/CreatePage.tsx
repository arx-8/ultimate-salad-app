import { useNavigation } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { Button, StyleSheet, Text, View } from "react-native"

export const CreatePage = (): JSX.Element => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text>CreatePage</Text>
      <Button
        onPress={() => {
          navigation.navigate("index")
        }}
        title="Go to Index"
      />

      <StatusBar style="auto" />
    </View>
  )
}

const bgColor = "#AAF"

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: bgColor,
    flex: 1,
    justifyContent: "center",
  },
})
