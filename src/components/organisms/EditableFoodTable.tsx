import { DataTable } from "react-native-paper"
import { NumberInput } from "src/components/atoms/NumberInput"
import { displaySortKeys, Food, FoodID } from "src/models/food"

type Props = {
  foods: Food[]
  onChangeAmount: (id: FoodID, amount: number | undefined) => void
  values: Record<FoodID, number>
}

export const EditableFoodTable = ({
  foods,
  onChangeAmount,
  values,
}: Props): JSX.Element => {
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Amount</DataTable.Title>
        <DataTable.Title>ID</DataTable.Title>
        <DataTable.Title>Name</DataTable.Title>
        {displaySortKeys.map((k) => {
          return <DataTable.Title key={k}>{k}</DataTable.Title>
        })}
      </DataTable.Header>

      {foods.map((f) => {
        return (
          <DataTable.Row key={f.id}>
            <DataTable.Cell>
              <NumberInput
                onChange={(value) => {
                  onChangeAmount(f.id, value)
                }}
                value={values[f.id] ?? 0}
              />
            </DataTable.Cell>
            <DataTable.Cell>{f.name}</DataTable.Cell>
            {displaySortKeys.map((k) => {
              return <DataTable.Title key={k}>{f.details[k]}</DataTable.Title>
            })}
          </DataTable.Row>
        )
      })}
    </DataTable>
  )
}
