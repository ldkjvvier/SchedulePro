import { useQuery } from '@tanstack/react-query'
import { Schedule } from '@/models/barber'
import { fetchBarberShedule } from '@/services/barberShedule'
export const useBarberShedule = (barberId: string, date: string) => {
	return useQuery<Schedule, Error>({
		queryKey: ['barberShedule', barberId],
		queryFn: () => fetchBarberShedule(barberId, date),
		enabled: !!barberId || !!date,
		refetchOnWindowFocus: false,
		staleTime: 1000 * 60 * 5, // 5 minutos
	})
}
