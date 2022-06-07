import { ActivityIndicator, StyleSheet } from "react-native"

type Props = {
  visible: boolean
}

// TODO overlay to block all user action
export const LoadingOverlay = ({ visible }: Props): JSX.Element | null => {
  if (!visible) {
    return null
  }

  return <ActivityIndicator color="#00f" size="large" style={styles.root} />
}

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  root: {
    backgroundColor: "gray",
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
})
