import AsyncStorage from "@react-native-async-storage/async-storage"
import { JSONValue } from "src/types/utils"

export type AvailableStorageKey = "salad_recipes"

export const write = <T extends JSONValue = JSONValue>(
  key: AvailableStorageKey,
  value: T
): Promise<void> => {
  return AsyncStorage.setItem(key, JSON.stringify(value))
}

export const read = async <T extends JSONValue = JSONValue>(
  key: AvailableStorageKey
): Promise<T | undefined> => {
  const rawValue = await AsyncStorage.getItem(key)
  if (rawValue == null) {
    return
  }
  return JSON.parse(rawValue) as T
}
