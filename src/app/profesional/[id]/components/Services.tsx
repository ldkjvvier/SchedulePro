import { Typography, Button, Skeleton } from '@mui/material'
import { useServices } from '@/hooks/useServices'
import { AccordionSkeleton } from './loadingSkeleton'

export const Services = ({ barberId }: { barberId: string }) => {
	const { data: services, isLoading, error } = useServices(barberId)

	if (isLoading) return <AccordionSkeleton />
	if (!barberId) return <p>Barber ID is missing</p>
	if (error) return <p>Error loading events: {error.message}</p>

	const formatPrice = (price: number) => {
		return new Intl.NumberFormat('es-CL', {
			style: 'currency',
			currency: 'CLP',
		}).format(price)
	}

	return (
		<div className="tw-grid md:tw-grid-cols-2 tw-grid-flow-row">
			{services?.map((service) => (
				<div
					key={service.id}
					className="tw-flex tw-flex-col tw-border tw-border-red-500 tw-rounded-md tw-text-start tw-justify-start tw-p-4 tw-m-2"
				>
					<Typography
						variant="h6"
						sx={{
							fontWeight: 'bold',
							fontSize: '0.9rem',
							textTransform: 'capitalize',
						}}
					>
						{service.name}
					</Typography>

					<Typography variant="body2" color="text.secondary">
						{service.duration}
					</Typography>
					<Typography
						variant="body2"
						color="text.secondary"
						sx={{ fontWeight: 'bold' }}
					>
						{formatPrice(service.price)}
					</Typography>
					<Typography
						variant="body2"
						color="text.secondary"
						marginTop={1}
						sx={{
							fontWeight: 'semibold',
						}}
					>
						{service.description}
					</Typography>
					<div className="tw-flex tw-items-end tw-w-full tw-justify-end tw-p-4 tw-h-full">
						<Button
							variant="contained"
							color="primary"
							size="small"
							sx={{
								backgroundColor: '#ff0000',
								color: 'white',
								fontWeight: 'bold',
							}}
						>
							Agendar Servicio
						</Button>
					</div>
				</div>
			))}
		</div>
	)
}
