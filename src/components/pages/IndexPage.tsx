import { AntDesign, MaterialIcons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { Box, Fab, Heading, HStack, Icon, IconButton } from "native-base"
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native"
import { LoadingOverlay } from "src/components/atoms/LoadingOverlay"
import { useSalads } from "src/components/helpers/useSalads"
import { SaladID } from "src/models/salad"

export const IndexPage = (): JSX.Element => {
  const navigation = useNavigation()
  const { deleteSalad, isLoading, salads } = useSalads()

  const onPressAdd = (): void => {
    navigation.navigate("create")
  }

  const onPressEdit = (id: SaladID): void => {
    navigation.navigate("edit", { id })
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
                <TouchableOpacity onPress={() => onPressEdit(item.id)}>
                  <Heading>{item.name}</Heading>
                </TouchableOpacity>
              </HStack>
            </Box>
          )
        }}
      />

      <Fab
        renderInPortal={false}
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
