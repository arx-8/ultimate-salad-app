import { ScrollView, theme } from "native-base"
import { StyleSheet } from "react-native"
import { DataTable } from "react-native-paper"
import { NumberInput } from "src/components/atoms/NumberInput"
import { displaySortKeys, Food, FoodID } from "src/models/food"

type Props = {
  foods: Food[]
  onChangeAmount: (id: FoodID, amount: number | undefined) => void
  values: Record<FoodID, number>
}

export const EditFoodsTable = ({
  foods,
  onChangeAmount,
  values,
}: Props): JSX.Element => {
  return (
    <ScrollView horizontal>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={styles.cell}>Amount</DataTable.Title>
          <DataTable.Title style={[styles.cell, styles.withBorder]}>
            ID
          </DataTable.Title>
          <DataTable.Title style={[styles.cell, styles.withBorder]}>
            Name
          </DataTable.Title>
          {displaySortKeys.map((k) => {
            return (
              <DataTable.Title key={k} style={[styles.cell, styles.withBorder]}>
                {k}
              </DataTable.Title>
            )
          })}
        </DataTable.Header>

        {foods.map((f) => {
          return (
            <DataTable.Row key={f.id}>
              <DataTable.Cell style={styles.cell}>
                <NumberInput
                  onChange={(value) => {
                    onChangeAmount(f.id, value)
                  }}
                  value={values[f.id] ?? 0}
                />
              </DataTable.Cell>
              <DataTable.Cell style={[styles.cell, styles.withBorder]}>
                {f.id}
              </DataTable.Cell>
              <DataTable.Cell style={[styles.cell, styles.withBorder]}>
                {f.name}
              </DataTable.Cell>
              {displaySortKeys.map((k) => {
                return (
                  <DataTable.Cell
                    key={k}
                    numeric
                    style={[styles.cell, styles.withBorder]}
                  >
                    {f.details[k]}
                  </DataTable.Cell>
                )
              })}
            </DataTable.Row>
          )
        })}
      </DataTable>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  cell: {
    padding: "4px",
  },
  withBorder: {
    borderLeftColor: theme.colors.black,
    borderLeftWidth: 1,
    borderStyle: "solid",
  },
})
