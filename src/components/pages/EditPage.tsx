import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { Button, StyleSheet, Text, View } from "react-native"
import { RootStackParamList } from "src/types/@react-navigation"

export const EditPage = (): JSX.Element => {
  const navigation = useNavigation()
  const route = useRoute<RouteProp<RootStackParamList, "edit">>()

  return (
    <View style={styles.container}>
      <Text>EditPage : {route.params.id}</Text>
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

const bgColor = "#FAA"

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: bgColor,
    flex: 1,
    justifyContent: "center",
  },
})
