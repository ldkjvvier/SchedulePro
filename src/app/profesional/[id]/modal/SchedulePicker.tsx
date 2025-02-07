import { useState, useEffect, useCallback } from 'react'
import {
	Typography,
	Box,
	useTheme,
	Divider,
	Badge,
	Stack,
	Chip,
	Paper,
} from '@mui/material'
import {
	CalendarMonthOutlined,
	CalendarTodayOutlined,
	InfoOutlined,
	LockClockOutlined,
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
							width: { xs: '100%', md: '30%', lg: '25%' },
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

// Componente para mostrar la información del servicio //! TODO CHANGE CART TYPE AND REMOVE PROP DATE !!!
const ServiceInfo = ({ cart, date }: { cart: any; date: Date }) => (
	<Stack spacing={2}>
		<Typography
			variant="subtitle1"
			fontWeight="bold"
			textTransform="capitalize"
		>
			{cart.service.name} con {cart.barber.name}
		</Typography>

		{/* Duración del servicio */}
		<Stack
			direction="row"
			justifyContent="space-between"
			alignItems="center"
			spacing={1}
		>
			<Typography variant="body2" color="text.secondary">
				Duración
			</Typography>
			<Chip
				label={`${cart.service.duration} min`}
				size="small"
				color="primary"
				variant="outlined"
			/>
		</Stack>

		{/* Precio */}
		<Stack
			direction="row"
			justifyContent="space-between"
			alignItems="center"
			spacing={1}
			sx={{ mt: 1 }}
		>
			<Typography variant="body2" color="text.secondary">
				Precio
			</Typography>
			<Typography
				variant="h6"
				fontWeight="bold"
				color="primary"
				sx={{ textAlign: 'right' }}
			>
				{formatPrice(cart.service.price)}
			</Typography>
		</Stack>

		{/* Información de la reserva */}
		{cart?.appointment && (
			<Paper variant="outlined" sx={{ p: 2, bgcolor: 'grey.100' }}>
				<Typography variant="subtitle2" fontWeight="medium">
					Reserva seleccionada:
				</Typography>
				<Stack spacing={1} mt={1}>
					<Stack direction="row" alignItems="center" spacing={1}>
						<CalendarTodayOutlined fontSize="small" />
						<Typography variant="body2">
							{date.toLocaleDateString('es-ES', {
								weekday: 'long',
								year: 'numeric',
								month: 'long',
								day: 'numeric',
							})}
						</Typography>
					</Stack>
					<Stack direction="row" alignItems="center" spacing={1}>
						<LockClockOutlined fontSize="small" />
						<Typography variant="body2">
							{cart.appointment.time}
						</Typography>
					</Stack>
				</Stack>
			</Paper>
		)}
	</Stack>
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
