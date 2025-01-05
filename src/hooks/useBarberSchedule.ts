import { useQuery } from '@tanstack/react-query'
import { Schedule } from '@/models/Schedule'
import { fetchBarberSchedule } from '@/services/barberSchedule'
export const useBarberSchedule = (barberId: string, date: string) => {
	return useQuery<Schedule | null, Error>({
		queryKey: ['barberSchedule', barberId, date],
		queryFn: () => fetchBarberSchedule(barberId, date),
		enabled: !!barberId && !!date,
		refetchOnWindowFocus: false,
		staleTime: 1000 * 60 * 5, // 5 minutos
		initialData: null, // Asegurarte de que la UI no muestre datos previos al inicio
	})
}
