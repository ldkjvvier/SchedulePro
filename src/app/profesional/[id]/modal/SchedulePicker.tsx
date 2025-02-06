import { useState, useEffect } from 'react'
import { Typography, Box, useTheme, Divider } from '@mui/material'
import { useBarberSchedule } from '@/hooks/useBarberSchedule'
import { DateCarouselCalendar } from './DateCarouselCalendar'
import { SchedulePartOfDay } from './SchedulePartOfDay'
import { useShoppingCart } from '@/hooks/useShoppingCart'
import { formatPrice } from '@/utils/formatPrice'
export const SchedulePicker: React.FC = () => {
	const [selectedDate, setSelectedDate] = useState<Date>(new Date())
	const cart = useShoppingCart()
	const theme = useTheme()
	const {
		data: schedule,
		isLoading,
		refetch,
	} = useBarberSchedule(
		cart.barber.id,
		selectedDate.toISOString().split('T')[0]
	)

	useEffect(() => {
		refetch()
	}, [selectedDate, refetch])

	const handleSelectDate = (date: Date): void => {
		setSelectedDate(date)
	}

	return (
		<div className="tw-flex tw-w-full tw-h-full tw-items-center tw-justify-center tw-text-black">
			<Box
				height={'90%'}
				display={'flex'}
				flexDirection={{ xs: 'column', md: 'row' }}
				alignItems={{ xs: 'center', md: 'start' }}
				justifyContent="center"
				gap={4}
				width={{ xs: '100%', sm: '90%', md: '85%', lg: '75%' }}
				padding={theme.spacing(2)}
			>
				{/* Main Schedule Picker */}
				<CustomBox
					width={{ xs: '90%', sm: '80%', md: '60%' }}
					display={{ md: 'flex' }}
					message="Selecciona una fecha y horario"
				>
					<Typography variant="h6" gutterBottom>
						{selectedDate.toLocaleString('es-ES', {
							month: 'long',
						})}
					</Typography>
					<DateCarouselCalendar
						selectedDate={selectedDate}
						setSelectedDate={setSelectedDate}
						onSelectDate={handleSelectDate}
					/>
					{isLoading && <Typography>Cargando...</Typography>}
					{selectedDate && schedule && (
						<SchedulePartOfDay schedule={schedule} />
					)}
				</CustomBox>
				{/* Service Information */}
				<CustomBox
					width={{ xs: '100%', md: '40%', lg: '30%' }}
					display={{ xs: 'none', md: 'flex' }}
					height={'auto'}
					message="Información del servicio"
				>
					<Box sx={{ width: '100%' }}>
						{cart?.service ? (
							<>
								<Typography
									variant="subtitle1"
									gutterBottom
									textTransform={'capitalize'}
								>
									<strong>
										{cart.service.name} con {cart.barber.name}
									</strong>
								</Typography>
								<Typography variant="body1" gutterBottom>
									{cart.service.duration}
								</Typography>
								<Typography variant="body1" gutterBottom>
									{formatPrice(cart.service.price)}
								</Typography>
							</>
						) : (
							<Typography variant="body1" color="textSecondary">
								No hay ningún servicio seleccionado. Por favor,
								selecciona uno de la lista.
							</Typography>
						)}
						<Divider sx={{ my: 2 }} />
						{cart?.appointment && (
							<>
								<Typography variant="subtitle1" gutterBottom>
									Horario seleccionado:{' '}
									<strong>{cart.appointment.time}</strong>
								</Typography>
								<Typography variant="body1" gutterBottom>
									<strong>Fecha del servicio:</strong>{' '}
									{cart.appointment.date}
								</Typography>
							</>
						)}
					</Box>
				</CustomBox>
			</Box>
		</div>
	)
}

const CustomBox = ({
	width,
	height = { xs: 'auto', md: '80%' },
	display,
	message,
	children,
}: {
	width: {
		xs?: string
		sm?: string
		md?: string
		lg?: string
	}
	height?:
		| {
				xs?: string
				sm?: string
				md: string
				lg?: string
		  }
		| string
	display?: string | { xs?: string; sm?: string; md?: string }
	message: string
	children: React.ReactNode
}) => {
	const theme = useTheme()

	return (
		<Box
			sx={{
				width: width,
				height: height,
				borderRadius: 2,
				boxShadow: theme.shadows[3],
				overflow: 'hidden',
				display: display,
				flexDirection: 'column',
				backgroundColor: 'white',
			}}
		>
			<Box
				sx={{
					borderBottom: 1,
					borderColor: 'divider',
					mb: 2,
				}}
			>
				<Typography variant="h6" sx={{ px: 2, py: 1 }}>
					{message}
				</Typography>
			</Box>
			<Box sx={{ padding: theme.spacing(2) }}>{children}</Box>
		</Box>
	)
}
