import { StatusBar } from "expo-status-bar"
import { Box, Text } from "native-base"
import { EditFoodsTable } from "src/components/organisms/EditFoodsTable"
import { NutrientChart } from "src/components/organisms/NutrientChart"
import { SelectFoodsTable } from "src/components/organisms/SelectFoodsTable"
import {
  Food,
  FoodID,
  getEatableAmount,
  getSummedDetails,
} from "src/models/food"
import { generateGodName } from "src/utils/misc"
import { sum } from "src/utils/number"

const foods: Food[] = [
  {
    amount: 100,
    details: {
      enerc_kcal: 26,
      protcaa: 1.6,
      refuse_rate: 3,
      water: 90.2,
      z0: Math.floor(Math.random() * 100),
      z1: Math.floor(Math.random() * 100),
      z2: Math.floor(Math.random() * 100),
      z3: Math.floor(Math.random() * 100),
      z4: Math.floor(Math.random() * 100),
      z5: Math.floor(Math.random() * 100),
    },
    id: "06080" as FoodID,
    name: "ケール　葉　生",
  },
  {
    amount: 50,
    details: {
      enerc_kcal: 30,
      protcaa: 0.8,
      refuse_rate: 2,
      water: 91,
      z0: Math.floor(Math.random() * 100),
      z1: Math.floor(Math.random() * 100),
      z2: Math.floor(Math.random() * 100),
      z3: Math.floor(Math.random() * 100),
      z4: Math.floor(Math.random() * 100),
      z5: Math.floor(Math.random() * 100),
    },
    id: "06183" as FoodID,
    name: "ミニトマト",
  },
  {
    amount: 200,
    details: {
      enerc_kcal: 21,
      protcaa: 1.2,
      refuse_rate: 20,
      water: 91.5,
      z0: Math.floor(Math.random() * 100),
      z1: Math.floor(Math.random() * 100),
      z2: Math.floor(Math.random() * 100),
      z3: Math.floor(Math.random() * 100),
      z4: Math.floor(Math.random() * 100),
      z5: Math.floor(Math.random() * 100),
    },
    id: "06238" as FoodID,
    name: "バジル　葉　生",
  },
]

const dummy = {
  foods,
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
      <Box flex={3}>
        <EditFoodsTable
          foods={dummy.foods}
          onChangeAmount={(id, value) => {
            console.log({ id, value })
          }}
          values={{}}
        />
      </Box>
      <Box flex={4}>
        <SelectFoodsTable
          foods={dummy.foods}
          onAdd={(id) => {
            console.log({ id })
          }}
        />
      </Box>

      <StatusBar style="auto" />
    </Box>
  )
}
