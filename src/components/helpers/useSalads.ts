import { useCallback } from "react"
import { useMutation, useQuery, useQueryClient } from "react-query"
import * as storage from "src/data/storage"
import { generateSaladID, Salad, SaladID } from "src/models/salad"
import { generateGodName } from "src/utils/misc"

const mutationKey = {
  useSalads: "useSalads",
} as const

type MaybeError = Error | undefined | null

type Returns = {
  addSalad: () => void
  deleteSalad: (id: SaladID) => void
  errors: [queryError: MaybeError, mutationError: MaybeError]
  isLoading: boolean
  salads: Salad[]
}

export const useSalads = (): Returns => {
  const { data, error, isLoading } = useQuery<Salad[], Error>(
    mutationKey.useSalads,
    async () => {
      const maybeData = await storage.read<Salad[]>("salad_recipes")
      return maybeData == null ? [] : maybeData
    }
  )

  const queryClient = useQueryClient()
  const mutation = useMutation<void, Error, Salad[]>(
    (salads) => {
      return storage.write<Salad[]>("salad_recipes", salads)
    },
    {
      onSuccess: () => {
        // No need to await.
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        queryClient.invalidateQueries(mutationKey.useSalads)
      },
    }
  )

  const addSalad: Returns["addSalad"] = useCallback(() => {
    if (data == null) {
      return
    }

    const next: Salad[] = [
      ...data,
      {
        id: generateSaladID(),
        name: `${generateGodName()}・サラダ`,
      },
    ]
    mutation.mutate(next)
  }, [data, mutation])

  const deleteSalad: Returns["deleteSalad"] = useCallback(
    (id) => {
      if (data == null) {
        return
      }

      const next = data.filter((s) => s.id !== id)
      mutation.mutate(next)
    },
    [data, mutation]
  )

  return {
    addSalad,
    deleteSalad,
    errors: [error, mutation.error],
    isLoading: isLoading || mutation.isLoading,
    salads: data == null ? [] : data,
  }
}
