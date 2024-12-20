import { useQuery } from '@tanstack/react-query'
import { Barber } from '@/models/barber'
import { fetchBarber } from '@/services'
export const useBarber = (barberId: string) => {
	return useQuery<Barber, Error>({
		queryKey: ['barber', barberId],
		queryFn: () => fetchBarber(barberId),
		enabled: !!barberId,
		refetchOnWindowFocus: false,
		staleTime: 1000 * 60 * 5, // 5 minutos
	})
}
