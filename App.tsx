import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NativeBaseProvider } from "native-base"
import "react-native-get-random-values"
import { QueryClient, QueryClientProvider } from "react-query"
import { CreatePage } from "src/components/pages/CreatePage"
import { EditPage } from "src/components/pages/EditPage"
import { IndexPage } from "src/components/pages/IndexPage"
import { RootStackParamList } from "src/types/@react-navigation"
import { objectEntries } from "src/utils/object"

const screens: {
  // "index" is excluded because it is the screen that should be transitioned 1st.
  [name in Exclude<keyof RootStackParamList, "index">]: () => JSX.Element
} = {
  create: CreatePage,
  edit: EditPage,
}

const Stack = createNativeStackNavigator<RootStackParamList>()
const queryClient = new QueryClient()

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen component={IndexPage} name="index" />
            {objectEntries(screens).map(([name, component]) => {
              return (
                <Stack.Screen component={component} key={name} name={name} />
              )
            })}
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </QueryClientProvider>
  )
}

export default App
