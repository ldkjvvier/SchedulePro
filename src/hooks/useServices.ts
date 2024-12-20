import { useQuery } from '@tanstack/react-query'
import { Service } from '@/models/barber'
import { fetchServices } from '@/services'
export const useServices = (barberId: string) => {
	return useQuery<Service[], Error>({
		queryKey: ['services', barberId],
		queryFn: () => fetchServices(barberId),
		enabled: !!barberId,
		refetchOnWindowFocus: false,
		staleTime: 1000 * 60 * 5, // 5 minutos
	})
}
