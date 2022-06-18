import React from "react"
// eslint-disable-next-line no-restricted-imports
import { StyleSheet, Text, View } from "react-native"

type Props = {
  content: string
}

export const ExampleComponent = ({ content }: Props): JSX.Element => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Welcome to React Native!</Text>
      <Text>This is a React Native snapshot test. {content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    margin: 10,
    textAlign: "center",
  },
})
