import { useNavigation } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { Box, Button, Text } from "native-base"

export const CreatePage = (): JSX.Element => {
  const navigation = useNavigation()

  return (
    <Box
      alignItems="center"
      backgroundColor="#AAF"
      flex={1}
      justifyContent="center"
    >
      <Text>CreatePage</Text>
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
