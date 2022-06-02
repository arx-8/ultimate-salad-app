import { useNavigation } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { Button, StyleSheet, Text, View } from "react-native"

export const DetailsPage = (): JSX.Element => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text>DetailsPage</Text>
      <Button
        title="Go to Index"
        onPress={() => {
          navigation.navigate("index")
        }}
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
