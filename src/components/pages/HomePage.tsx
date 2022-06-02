import { StyleSheet, Text, View } from "react-native"
import { V } from "src/types/victory"

const sampleData = [
  {
    x: 1,
    y: 2,
  },
  {
    x: 2,
    y: 3,
  },
  {
    x: 3,
    y: 5,
  },
  {
    x: 4,
    y: 4,
  },
  {
    x: 5,
    y: 7,
  },
]

const sampleData2 = [
  {
    x: 1,
    y: 4,
  },
  {
    x: 2,
    y: 1,
  },
  {
    x: 3,
    y: 8,
  },
  {
    x: 4,
    y: 1,
  },
  {
    x: 5,
    y: 0,
  },
]

export const HomePage = (): JSX.Element => {
  return (
    <View style={styles.root}>
      <Text>Hello HomePage</Text>
      <V.VictoryChart polar theme={V.VictoryTheme.material}>
        {/* inner guide line */}
        <V.VictoryPolarAxis
          dependentAxis
          style={{
            axis: { stroke: "none" },
            tickLabels: { fill: "none" },
          }}
        />
        {/* outer */}
        <V.VictoryPolarAxis tickValues={["a1", "v2", "x3", "f4", "g5"]} />
        {/* main chart */}
        <V.VictoryArea
          data={sampleData}
          style={{
            data: {
              fill: "#F00",
              opacity: 0.2,
              stroke: "#F00",
            },
          }}
        />
        <V.VictoryArea
          data={sampleData2}
          style={{
            data: {
              fill: "limegreen",
              opacity: 0.6,
              stroke: "green",
            },
          }}
        />
      </V.VictoryChart>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
})
