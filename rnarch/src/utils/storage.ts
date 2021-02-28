import { AsyncStorage } from "react-native";

export const AUTH_KEYS = {
  token: "token",
  user: "user",
};

export const persist = async <ObjType = any>(name: string, obj: ObjType) => {
  const json = JSON.stringify(obj);

  await AsyncStorage.setItem(name, json);

  return obj;
};

export const hydrate = async <ReturnType>(
  name: string,
  fallback?: ReturnType | undefined,
): Promise<ReturnType | undefined> => {
  const stored = await AsyncStorage.getItem(name);

  if (!stored) {
    return fallback || undefined;
  }

  try {
    return JSON.parse(stored);
  } catch (e) {
    return fallback || undefined;
  }
};

export const unpersist = async (name: string) => {
  await AsyncStorage.removeItem(name);
};

export const flush = () => AsyncStorage.clear();
