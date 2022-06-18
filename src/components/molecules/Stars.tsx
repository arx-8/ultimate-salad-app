import { FontAwesome } from "@expo/vector-icons"
import { Box, Icon } from "native-base"
import { range } from "src/utils/array"

type Props = {
  count: number
}

export const Stars = ({ count }: Props): JSX.Element => {
  return (
    <Box flex={1} flexDirection="row">
      {range(0, count - 1).map((_, i) => {
        // eslint-disable-next-line react/no-array-index-key
        return <Icon as={FontAwesome} color="yellow.500" key={i} name="star" />
      })}
    </Box>
  )
}
