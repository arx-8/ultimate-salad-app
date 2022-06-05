import { AntDesign, MaterialIcons } from "@expo/vector-icons"
import { StatusBar } from "expo-status-bar"
import { Box, Fab, Heading, HStack, Icon, IconButton } from "native-base"
import { FlatList, StyleSheet, View } from "react-native"
import { Stars } from "src/components/molecules/Stars"
import { SaladRecipeID } from "src/models/salad"
import { useDispatch, useSelector } from "src/store"
import { saladsActions, saladsSelectors } from "src/store/salads"

export const IndexPage = (): JSX.Element => {
  const dispatch = useDispatch()
  const recipes = useSelector(saladsSelectors.getRecipes)

  const onPressAdd = (): void => {
    dispatch(saladsActions.addSalad())
  }

  const onPressDelete = (id: SaladRecipeID): void => {
    dispatch(saladsActions.deleteSalad({ id }))
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={recipes}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => {
          return (
            <Box borderWidth="1">
              <HStack alignItems="center" space={8}>
                <IconButton
                  onPress={() => onPressDelete(item.id)}
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
