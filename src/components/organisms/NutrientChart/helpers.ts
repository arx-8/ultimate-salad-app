import { FoodDetails } from "src/models/food"
import { assertNonNullish, nonNullish } from "src/utils/nullish"
import { objectKeys } from "src/utils/object"

type DatumKey = keyof FoodDetails

export type Datum = Record<DatumKey, number>
type GroupedDatum = Record<DatumKey, number[]>

type XYData = {
  x: DatumKey
  y: number
}

export const getMaxima = (data: Datum[]): Datum => {
  assertNonNullish(data[0], "unexpected data[0]")
  const groupedData = objectKeys(data[0]).reduce((memo, key) => {
    return {
      ...memo,
      [key]: data.map((x) =>
        nonNullish(x[key], "create groupedData logic broken")
      ),
    }
  }, {} as GroupedDatum)

  return objectKeys(groupedData).reduce((memo, key) => {
    return {
      ...memo,
      [key]: Math.max(
        ...nonNullish(groupedData[key], "calculate max logic broken")
      ),
    }
  }, {} as Datum)
}

export const processData = (data: Datum[]): XYData[][] => {
  const maxByGroup = getMaxima(data)
  const makeDataArray = (d: Datum): XYData[] => {
    return objectKeys(d).map((key) => {
      const keyedD = nonNullish(d[key], "makeDataArray (d[key]) logic broken")
      const keyedMaxByGroup = nonNullish(
        maxByGroup[key],
        "makeDataArray (maxByGroup[key]) logic broken"
      )
      return {
        x: key,
        y: keyedD / keyedMaxByGroup,
      }
    })
  }
  return data.map((d) => makeDataArray(d))
}
