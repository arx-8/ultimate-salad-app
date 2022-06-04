import { AntDesign, MaterialIcons } from "@expo/vector-icons"
import { StatusBar } from "expo-status-bar"
import { Box, Fab, Heading, HStack, Icon, IconButton } from "native-base"
import { useState } from "react"
import { FlatList, StyleSheet, View } from "react-native"
import { Stars } from "src/components/molecules/Stars"
import { generateSaladID, Salad } from "src/models/salad"
import { generateGodName } from "src/utils/misc"

export const IndexPage = (): JSX.Element => {
  const [salads, setSalads] = useState<Salad[]>([])

  const onPressAdd = (): void => {
    const next: Salad[] = [
      ...salads,
      {
        id: generateSaladID(),
        name: `${generateGodName()}・サラダ`,
        rate: ((Math.floor(Math.random() * 4) % 4) + 1) as Salad["rate"],
      },
    ]
    setSalads(next)
  }

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

      <Fab
        shadow={8}
        icon={<Icon as={AntDesign} name="plus" size="xl" />}
        onPress={onPressAdd}
        bottom={8}
        right={8}
      />
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
