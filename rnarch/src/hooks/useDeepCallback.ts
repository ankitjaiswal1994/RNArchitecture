import _ from "lodash";
import { useCallback, useRef } from "react";
function deepCompareEquals(a: any, b: any) {
  return _.isEqual(a, b);
}

function useDeepCompareMemoize(value: any) {
  const ref = useRef();
  if (!deepCompareEquals(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
}

export function useDeepCallback(
  callback: any,
  dependencies: React.DependencyList,
) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(callback, useDeepCompareMemoize(dependencies) || []);
}
