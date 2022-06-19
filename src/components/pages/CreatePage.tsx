import { StatusBar } from "expo-status-bar"
import { Box, Text } from "native-base"
import { NutrientChart } from "src/components/organisms/NutrientChart"
import { Food, getEatableAmount, getSummedDetails } from "src/models/food"
import { generateGodName } from "src/utils/misc"
import { sum } from "src/utils/number"

const dummy = {
  foods: [
    {
      amount: 100,
      details: {
        enerc_kcal: 26,
        protcaa: 1.6,
        refuse_rate: 3,
        water: 90.2,
      },
      id: "06080",
      name: "ケール　葉　生",
    },
    {
      amount: 50,
      details: {
        enerc_kcal: 30,
        protcaa: 0.8,
        refuse_rate: 2,
        water: 91,
      },
      id: "06183",
      name: "ミニトマト",
    },
    {
      amount: 200,
      details: {
        enerc_kcal: 21,
        protcaa: 1.2,
        refuse_rate: 20,
        water: 91.5,
      },
      id: "06238",
      name: "バジル　葉　生",
    },
  ] as Food[],
  saladName: `${generateGodName()}・サラダ`,
}

export const CreatePage = (): JSX.Element => {
  return (
    <Box flex={1}>
      <Box alignContent="center" flex={3}>
        <Text>{dummy.saladName}</Text>
        <Text>可食部 / 合計 (g)</Text>
        <Text>
          {sum(dummy.foods.map((f) => getEatableAmount(f)))} /{" "}
          {sum(dummy.foods.map((f) => f.amount))}
        </Text>
        <Box height="80%">
          <NutrientChart
            reference={getSummedDetails(dummy.foods)}
            userInput={getSummedDetails(dummy.foods)}
          />
        </Box>
      </Box>
      <Box flex={3} />
      <Box flex={4} />

      <StatusBar style="auto" />
    </Box>
  )
}
