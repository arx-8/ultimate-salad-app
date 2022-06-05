import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NativeBaseProvider } from "native-base"
import "react-native-get-random-values"
import { Provider as ReduxProvider } from "react-redux"
import { DetailsPage } from "src/components/pages/DetailsPage"
import { IndexPage } from "src/components/pages/IndexPage"
import { store } from "src/store"
import { RootStackParamList } from "src/types/@react-navigation"
import { objectEntries } from "src/utils/object"

const screens: {
  // "index" is excluded because it is the screen that should be transitioned 1st.
  [name in Exclude<keyof RootStackParamList, "index">]: () => JSX.Element
} = {
  details: DetailsPage,
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = (): JSX.Element => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <ReduxProvider store={store}>
          <Stack.Navigator>
            <Stack.Screen name="index" component={IndexPage} />
            {objectEntries(screens).map(([name, component]) => {
              return (
                <Stack.Screen key={name} name={name} component={component} />
              )
            })}
          </Stack.Navigator>
        </ReduxProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default App
