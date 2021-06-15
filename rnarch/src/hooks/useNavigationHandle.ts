import { useNavigation } from "@react-navigation/native";

export const useNavgationHandle = () => {
  const navigation = useNavigation();

  const navigationAction = (to: any) =>
    navigation.addListener("focus", () => to());
  const removeNavigationAction = (to: any) =>
    navigation.removeListener("focus", () => to());

  return { navigationAction, removeNavigationAction };
};
