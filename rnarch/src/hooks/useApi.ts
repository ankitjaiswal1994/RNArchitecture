import { AxiosRequestConfig } from "axios";
import { useCallback, useState } from "react";
import { api } from "utils/api/api";

export function useApi<T extends any>(url: string) {
  const [state, setState] = useState<{
    loading: boolean;
    data: T | undefined;
    error: any;
  }>({
    loading: false,
    data: undefined,
    error: undefined,
  });
  // @TODO add other methods

  const get: (config?: AxiosRequestConfig) => Promise<void> = useCallback(
    async params => {
      setState(s => ({ ...s, loading: true, error: undefined }));
      try {
        const { data } = await api.get<T>(url, {
          params,
        });
        setState(s => ({ ...s, loading: false, data: data.data }));
      } catch (e) {
        setState(s => ({ ...s, loading: false, error: e.message }));
      }
    },
    [url],
  );

  return {
    get,
    ...state,
  };
}
