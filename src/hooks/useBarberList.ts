import { useQuery } from '@tanstack/react-query'
import { BarberSummary } from '@/models/barber'
import { fetchBarberList } from '@/services/barberList'

export const useBarberList = () => {
	return useQuery<BarberSummary[], Error>({
		queryKey: ['barberList'],
		queryFn: fetchBarberList,
		staleTime: 1000 * 60 * 5, // 5 minutos
	})
}
