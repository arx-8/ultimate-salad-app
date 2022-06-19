import { useMemo } from "react"
import {
  Datum,
  getMaxima,
  processData,
} from "src/components/organisms/NutrientChart/helpers"
import { metaSeries } from "src/models/food"
import { V } from "src/types/victory"
import { nonNullish } from "src/utils/nullish"
import { objectFilter, objectKeys } from "src/utils/object"

const {
  VictoryArea,
  VictoryChart,
  VictoryGroup,
  VictoryLabel,
  VictoryPolarAxis,
  VictoryTheme,
} = V

type Props = {
  reference: Datum
  userInput: Datum
}

/**
 * copy of:
 * @see https://formidable.com/open-source/victory/gallery/radar-chart/
 */
export const NutrientChart = ({ reference, userInput }: Props): JSX.Element => {
  const data = useMemo(() => {
    const filteredR = objectFilter(reference, metaSeries)
    const filteredU = objectFilter(userInput, metaSeries)
    return [filteredR, filteredU]
  }, [reference, userInput])

  const xyDataList = useMemo(() => processData(data), [data])
  const maximaDatum = useMemo(() => getMaxima(data), [data])

  return (
    <VictoryChart
      domain={{
        y: [0, 1],
      }}
      polar
      theme={VictoryTheme.material}
    >
      <VictoryGroup
        colorScale={["orange", "limegreen"]}
        style={{
          data: {
            fillOpacity: 0.2,
            strokeWidth: 2,
          },
        }}
      >
        {xyDataList.map((d, i) => {
          // eslint-disable-next-line react/no-array-index-key
          return <VictoryArea data={d} key={i} />
        })}
      </VictoryGroup>

      {objectKeys(maximaDatum).map((key, i) => {
        return (
          <VictoryPolarAxis
            axisValue={i + 1}
            dependentAxis
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            label={key}
            labelPlacement="perpendicular"
            style={{
              axis: { stroke: "none" },
              axisLabel: { fontSize: 24, padding: 10 },
              grid: {
                opacity: 0.5,
                stroke: "grey",
                strokeWidth: 0.25,
              },
            }}
            tickFormat={(t) =>
              Math.ceil(
                t * nonNullish(maximaDatum[key], "tickFormat logic broken")
              )
            }
            tickLabelComponent={<VictoryLabel labelPlacement="vertical" />}
            tickValues={[0.25, 0.5, 0.75]}
          />
        )
      })}
      <VictoryPolarAxis
        labelPlacement="parallel"
        style={{
          axis: { stroke: "none" },
          grid: { opacity: 0.5, stroke: "grey" },
        }}
        tickFormat={() => ""}
      />
    </VictoryChart>
  )
}
