import { useQuery } from "@tanstack/react-query";

const queryFn = (url: string) => async () =>
  await fetch(url)
    .then((res) => res.json())
    .then(({ data }) => data);

export const useListFetch = (url: string) => {
  const { data, isError, isLoading, isRefetching } = useQuery({
    queryKey: ["listFetch", url],
    queryFn: queryFn(url),
  });

  return { data, isError, isLoading, isRefetching };
};
