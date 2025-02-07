import { useState, useEffect, useCallback } from 'react'
import {
	Typography,
	Box,
	useTheme,
	Divider,
	Badge,
} from '@mui/material'
import {
	CalendarMonthOutlined,
	InfoOutlined,
} from '@mui/icons-material'
import { useBarberSchedule } from '@/hooks/useBarberSchedule'
import { DateCarouselCalendar } from './DateCarouselCalendar'
import { SchedulePartOfDay } from './SchedulePartOfDay'
import { useShoppingCart } from '@/hooks/useShoppingCart'
import { formatPrice } from '@/utils/formatPrice'

export const SchedulePicker: React.FC = () => {
	const [selectedDate, setSelectedDate] = useState<Date>(new Date())
	const theme = useTheme()
	const cart = useShoppingCart()
	const {
		data: schedule,
		isLoading,
		refetch,
	} = useBarberSchedule(
		cart.barber.id,
		selectedDate.toISOString().split('T')[0]
	)

	// useEffect para actualizar el schedule cuando cambia la fecha
	useEffect(() => {
		refetch()
	}, [selectedDate, refetch])

	// Callback optimizado para cambiar la fecha
	const handleSelectDate = useCallback((date: Date) => {
		setSelectedDate(date)
	}, [])

	return (
		<div className="tw-flex tw-w-full tw-h-full tw-items-center tw-justify-center tw-text-black">
			<Box
				height="90%"
				display="flex"
				flexDirection={{ xs: 'column', md: 'row' }}
				alignItems={{ xs: 'center', md: 'start' }}
				justifyContent="center"
				gap={4}
				width={{ xs: '100%', sm: '90%', md: '85%', lg: '75%' }}
				padding={theme.spacing(2)}
			>
				{/* Main Schedule Picker */}
				<CustomBox
					sx={{ width: { xs: '90%', sm: '80%', md: '60%' } }}
					icon={<CalendarMonthOutlined sx={{ mr: 1 }} />}
					message="Selecciona una fecha y horario"
				>
					<Typography variant="h6" gutterBottom>
						{selectedDate.toLocaleString('es-ES', { month: 'long' })}
					</Typography>
					<DateCarouselCalendar
						selectedDate={selectedDate}
						setSelectedDate={setSelectedDate}
						onSelectDate={handleSelectDate}
					/>
					{isLoading ? (
						<Typography>Cargando...</Typography>
					) : (
						schedule && <SchedulePartOfDay schedule={schedule} />
					)}
				</CustomBox>

				{/* Service Information */}
				{cart?.service && (
					<CustomBox
						sx={{
							width: { xs: '100%', md: '40%', lg: '30%' },
							display: { xs: 'none', md: 'flex' },
						}}
						icon={<InfoOutlined sx={{ mr: 1 }} />}
						message="Detalles del Servicio"
					>
						<ServiceInfo cart={cart} date={selectedDate} />
					</CustomBox>
				)}
			</Box>
		</div>
	)
}

// Componente para mostrar la información del servicio //! TODO CHANGE CART TYPE !!!
const ServiceInfo = ({ cart, date }: { cart: any; date: Date }) => (
	<>
		<Typography
			variant="subtitle1"
			gutterBottom
			textTransform="capitalize"
		>
			<strong>
				{cart.service.name} con {cart.barber.name}
			</strong>
		</Typography>
		<div className="flex items-center justify-between text-sm">
			<span className="text-muted-foreground">Duración</span>
			<Badge>30 minutos</Badge>
		</div>
		<Typography variant="body1" gutterBottom>
			{formatPrice(cart.service.price)}
		</Typography>

		<Divider sx={{ my: 2 }} />

		{cart?.appointment && (
			<>
				<div className="tw-border tw-rounded-lg tw-p-3 tw-space-y-2 tw-bg-gray-100/80">
					<h4 className="tw-font-medium">Reserva seleccionada:</h4>
					<div className="tw-text-sm space-y-1">
						<p className="tw-flex tw-items-center tw-gap-2">
							{/* // TODO CHANGE TO CART DATE */}
							{date.toLocaleDateString('es-ES', {
								weekday: 'long',
								year: 'numeric',
								month: 'long',
								day: 'numeric',
							})}
						</p>
						<p className="tw-flex tw-items-center tw-gap-2">
							{cart.appointment.time}
						</p>
					</div>
				</div>
			</>
		)}
	</>
)

// CustomBox optimizado para mayor flexibilidad
const CustomBox = ({
	sx,
	icon,
	message,
	children,
}: {
	sx?: object
	icon?: React.ReactNode
	message: string
	children: React.ReactNode
}) => {
	const theme = useTheme()
	return (
		<Box
			sx={{
				...sx,
				borderRadius: 2,
				boxShadow: theme.shadows[3],
				overflow: 'hidden',
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: 'white',
			}}
		>
			<Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
				<Typography variant="h6" sx={{ px: 2, py: 1 }}>
					{icon && icon}
					{message}
				</Typography>
			</Box>
			<Box sx={{ padding: theme.spacing(2) }}>{children}</Box>
		</Box>
	)
}
