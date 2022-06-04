import { AntDesign, MaterialIcons } from "@expo/vector-icons"
import { StatusBar } from "expo-status-bar"
import { Box, Fab, Heading, HStack, Icon, IconButton } from "native-base"
import { FlatList, StyleSheet, View } from "react-native"
import { Stars } from "src/components/molecules/Stars"
import { Salad, SaladID } from "src/models/salad"

const salads: Salad[] = [
  {
    id: "0" as SaladID,
    name: "1st salad",
    rate: 5,
  },
  {
    id: "1" as SaladID,
    name: "The 2",
    rate: 1,
  },
  {
    id: "2" as SaladID,
    name: "salad salad salad",
    rate: 3,
  },
]

export const IndexPage = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={salads}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => {
          return (
            <Box borderWidth="1">
              <HStack alignItems="center" space={8}>
                <IconButton
                  colorScheme="red"
                  icon={<Icon as={MaterialIcons} name="delete" />}
                />
                <Heading>{item.name}</Heading>
                <Stars count={item.rate} />
              </HStack>
            </Box>
          )
        }}
      />

      <Fab shadow={2} icon={<Icon as={AntDesign} name="plus" />} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
})
