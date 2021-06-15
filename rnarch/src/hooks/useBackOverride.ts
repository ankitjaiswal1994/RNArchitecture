import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { BackHandler } from "react-native";

export const useBackOverride = (fn: () => void) => {
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        fn();
        return true;
      };
      BackHandler.addEventListener("hardwareBackPress", onBackPress);
      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [fn]),
  );
};
