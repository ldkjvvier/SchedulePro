import { Typography, Button } from '@mui/material'
import { useServices } from '@/hooks/useServices'
import { AccordionSkeleton } from './loadingSkeleton'
import { ScheduleModalWrapper } from '../modal/ScheduleModalWrapper'
import { formatPrice } from '@/utils/formatPrice'
import { Barber } from '@/models/barber'
import { useShoppingCartActions } from '@/hooks/useShoppingCartActions'
import { Service } from '@/models/Service'

interface ServiceProps {
	barber: Barber
}

export const Services = ({ barber }: ServiceProps) => {
	const { data: services, isLoading } = useServices(barber.id)
	const { addToCart } = useShoppingCartActions()

	if (isLoading) return <AccordionSkeleton />
	if (!services || services.length === 0) {
		return (
			<p className="tw-text-center tw-text-red-500 tw-font-bold tw-mt-4">
				Services not found
			</p>
		)
	}

	const handleAddToCart = (service: Service) => {
		addToCart(barber, service)
	}

	return (
		<div className="tw-grid md:tw-grid-cols-2 tw-grid-flow-row">
			{services.map((service) => (
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
						<ScheduleModalWrapper>
							<Button
								variant="contained"
								color="primary"
								size="small"
								onClick={() => handleAddToCart(service)}
								sx={{
									backgroundColor: '#ff0000',
									color: 'white',
									fontWeight: 'bold',
								}}
							>
								Agendar Servicio
							</Button>
						</ScheduleModalWrapper>
					</div>
				</div>
			))}
		</div>
	)
}
