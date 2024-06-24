import { useQuery } from '@tanstack/react-query'

import { api } from '../services/api'

export function useGetAgencyById(id: string) {
  const { data, isLoading } = useQuery({
    queryKey: [`agencies/${id}`],
    queryFn: async () => {
      const res = await api.get(`/agencies/getById/${id}`)
      return res.data
    },
  })
  return { data, isLoading }
}
