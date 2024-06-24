import { useQuery } from '@tanstack/react-query'

import { api } from '../services/api'

export function useGetAgencies() {
  const { data, isLoading } = useQuery({
    queryKey: [`agencies`],
    queryFn: async () => {
      const res = await api.get(`/agencies`)
      return res.data
    },
  })
  return { data, isLoading }
}
