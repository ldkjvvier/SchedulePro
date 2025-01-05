import { useQuery } from '@tanstack/react-query'
import { Schedule } from '@/models/barber'
import { fetchBarberSchedule } from '@/services/barberSchedule'
export const useBarberSchedule = (barberId: string, date: string) => {
	return useQuery<Schedule, Error>({
		queryKey: ['barberSchedule', barberId],
		queryFn: () => fetchBarberSchedule(barberId, date),
		enabled: !!barberId || !!date,
		refetchOnWindowFocus: false,
		staleTime: 1000 * 60 * 5, // 5 minutos
	})
}
