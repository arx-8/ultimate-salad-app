import { DataTable } from "react-native-paper"
import { displaySortKeys, Food, FoodID } from "src/models/food"

type Props = {
  foods: Food[]
  onAdd: (id: FoodID) => void
}

export const SelectableFoodTable = ({ foods, onAdd }: Props): JSX.Element => {
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title> </DataTable.Title>
        <DataTable.Title>ID</DataTable.Title>
        <DataTable.Title>Name</DataTable.Title>
        {displaySortKeys.map((k) => {
          return <DataTable.Title key={k}>{k}</DataTable.Title>
        })}
      </DataTable.Header>

      {foods.map((f) => {
        return (
          <DataTable.Row key={f.id}>
            <DataTable.Cell onPress={() => onAdd(f.id)}>Add</DataTable.Cell>
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
