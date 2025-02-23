import { useState, useEffect, useCallback } from 'react'
import {
	Typography,
	Box,
	useTheme,
	Stack,
	Chip,
	Paper,
	Button,
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

interface SchedulePickerProps {
	nextStep: () => void
}

export const SchedulePicker: React.FC<SchedulePickerProps> = ({
	nextStep,
}: SchedulePickerProps) => {
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

	useEffect(() => {
		refetch()
	}, [selectedDate, refetch])

	const handleSelectDate = useCallback((date: Date) => {
		setSelectedDate(date)
	}, [])

	return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			width="100%"
			height="100%"
			color={theme.palette.text.primary}
		>
			<Box
				width={{ xs: '100%', sm: '90%', md: '85%', lg: '75%' }}
				height="auto"
				padding={theme.spacing(2)}
				display="flex"
				flexDirection={{ xs: 'column', md: 'row' }}
				alignItems={{ xs: 'center', md: 'start' }}
				justifyContent="center"
				gap={4}
			>
				<CustomBox
					sx={{ width: { xs: '100%', sm: '80%', md: '60%' } }}
					icon={
						<CalendarMonthOutlined sx={{ mr: 1 }} color="primary" />
					}
					message="Selecciona Fecha y Hora"
				>
					<Typography
						variant="h6"
						gutterBottom
						color={theme.palette.primary.main}
					>
						{selectedDate.toLocaleString('es-ES', { month: 'long' })}
					</Typography>
					<DateCarouselCalendar
						selectedDate={selectedDate}
						setSelectedDate={setSelectedDate}
						onSelectDate={handleSelectDate}
					/>
					{isLoading ? (
						<Typography color="text.secondary">
							Cargando...
						</Typography>
					) : (
						schedule && <SchedulePartOfDay schedule={schedule} />
					)}
				</CustomBox>

				{cart?.service && (
					<CustomBox
						sx={{
							width: { xs: '100%', md: '30%', lg: '25%' },
							display: { xs: 'none', md: 'block' },
						}}
						icon={<InfoOutlined sx={{ mr: 1 }} color="primary" />}
						message="Detalles del Servicio"
					>
						<ServiceInfo cart={cart}>
							<Button
								variant="contained"
								color="primary"
								size="large"
								onClick={nextStep}
							>
								Continuar
							</Button>
						</ServiceInfo>
					</CustomBox>
				)}
			</Box>
		</Box>
	)
}

const ServiceInfo = ({
	cart,
	children,
}: {
	cart: any
	children?: React.ReactNode
}) => {
	const theme = useTheme()

	return (
		<Stack spacing={2}>
			<Typography
				variant="subtitle1"
				fontWeight="bold"
				textTransform="capitalize"
				color={theme.palette.primary.main}
			>
				{cart.service.name} con {cart.barber.name}
			</Typography>
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
					label={`${cart.service.duration}`}
					size="small"
					color="default"
					variant="filled"
				/>
			</Stack>
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
				<Typography variant="h6" fontWeight="bold">
					{formatPrice(cart.service.price)}
				</Typography>
			</Stack>
			{cart?.appointment && (
				<>
					<Paper
						variant="outlined"
						sx={{ p: 2, bgcolor: theme.palette.background.default }}
					>
						<Typography variant="subtitle2" fontWeight="medium">
							Reserva seleccionada:
						</Typography>
						<Stack spacing={1} mt={1}>
							<Stack direction="row" alignItems="center" spacing={1}>
								<CalendarTodayOutlined
									fontSize="small"
									color="primary"
								/>
								<Typography variant="body2">
									{new Date(cart.appointment.date).toLocaleDateString(
										'es-ES',
										{
											weekday: 'long',
											year: 'numeric',
											month: 'long',
											day: 'numeric',
										}
									)}
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
					<Stack>{children}</Stack>
				</>
			)}
		</Stack>
	)
}

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
				borderRadius: 2,
				boxShadow: theme.shadows[3],
				overflow: 'hidden',
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: theme.palette.background.paper,
				...sx,
			}}
		>
			<Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
				<Typography variant="h6" sx={{ px: 2, py: 1 }}>
					{icon} {message}
				</Typography>
			</Box>
			<Box sx={{ padding: theme.spacing(2) }}>{children}</Box>
		</Box>
	)
}
