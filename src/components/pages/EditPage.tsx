import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { Box, Button, Text } from "native-base"
import { RootStackParamList } from "src/types/@react-navigation"

export const EditPage = (): JSX.Element => {
  const navigation = useNavigation()
  const route = useRoute<RouteProp<RootStackParamList, "edit">>()

  return (
    <Box
      alignItems="center"
      backgroundColor="#FAA"
      flex={1}
      justifyContent="center"
    >
      <Text>EditPage : {route.params.id}</Text>
      <Button
        onPress={() => {
          navigation.navigate("index")
        }}
        title="Go to Index"
      />

      <StatusBar style="auto" />
    </Box>
  )
}
