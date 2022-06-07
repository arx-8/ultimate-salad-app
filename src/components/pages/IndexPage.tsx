import { AntDesign, MaterialIcons } from "@expo/vector-icons"
import { StatusBar } from "expo-status-bar"
import { Box, Fab, Heading, HStack, Icon, IconButton } from "native-base"
import { FlatList, StyleSheet, View } from "react-native"
import { LoadingOverlay } from "src/components/atoms/LoadingOverlay"
import { useSalads } from "src/components/helpers/useSalads"
import { Stars } from "src/components/molecules/Stars"
import { getSaladRate, SaladID } from "src/models/salad"

export const IndexPage = (): JSX.Element => {
  const { addSalad, deleteSalad, isLoading, salads } = useSalads()

  const onPressAdd = (): void => {
    addSalad()
  }

  const onPressDelete = (id: SaladID): void => {
    // TODO confirm before delete
    deleteSalad(id)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LoadingOverlay visible={isLoading} />

      <FlatList
        data={salads}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => {
          return (
            <Box borderWidth="1">
              <HStack alignItems="center" space={8}>
                <IconButton
                  disabled={isLoading}
                  colorScheme="red"
                  onPress={() => onPressDelete(item.id)}
                  icon={<Icon as={MaterialIcons} name="delete" />}
                />
                <Heading>{item.name}</Heading>
                <Stars count={getSaladRate(item)} />
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
        disabled={isLoading}
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
