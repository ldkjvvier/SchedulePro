import React, {
	useState,
	useMemo,
	Dispatch,
	SetStateAction,
	useRef,
} from 'react'
import Slider from 'react-slick'
import { format, addDays, differenceInCalendarDays } from 'date-fns'
import { Box, IconButton } from '@mui/material'
import { DateItem } from './DateItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface DateCarouselCalendarProps {
	selectedDate: Date
	onSelectDate: (date: Date) => void
	setSelectedDate: Dispatch<SetStateAction<Date>>
}

export const DateCarouselCalendar: React.FC<
	DateCarouselCalendarProps
> = ({ onSelectDate, selectedDate, setSelectedDate }) => {
	const [currentDate] = useState<Date>(new Date()) // Mantener fija la fecha de referencia

	// Generar rango de fechas para el carrusel
	const dates = useMemo(() => {
		const datesArray = []
		for (let i = -100; i <= 100; i++) {
			datesArray.push(addDays(currentDate, i))
		}
		return datesArray
	}, [currentDate])

	// Calcular el índice inicial para centrar la fecha actual
	const initialIndex = useMemo(() => {
		return differenceInCalendarDays(selectedDate, currentDate) + 100
	}, [selectedDate, currentDate])

	// Manejar selección de fecha
	const handleDateSelect = (date: Date) => {
		setSelectedDate(date)
		onSelectDate(date)
	}

	// Configuración del carrusel
	const sliderSettings = {
		dots: false,
		infinite: false, // Desactivar bucle para evitar fechas incoherentes
		speed: 500,
		slidesToShow: 8,
		slidesToScroll: 8,
		centerMode: true,
		focusOnSelect: true,
		centerPadding: '0px',
		initialSlide: initialIndex, // Establecer índice inicial
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
				},
			},
		],
	}

	const sliderRef = useRef<Slider>(null)

	// Navegación manual
	const goToPrev = () => sliderRef.current?.slickPrev()
	const goToNext = () => sliderRef.current?.slickNext()

	return (
		<Box
			sx={{
				position: 'relative',
				maxWidth: '90%',
				margin: 'auto',
			}}
		>
			<IconButton
				onClick={goToPrev}
				sx={{
					position: 'absolute',
					left: -20,
					top: '50%',
					transform: 'translateY(-50%)',
					zIndex: 1,
				}}
			>
				&#8249;
			</IconButton>
			<Slider ref={sliderRef} {...sliderSettings}>
				{dates.map((date) => (
					<DateItem
						key={date.toISOString()}
						date={date}
						isSelected={
							date.toDateString() === selectedDate.toDateString()
						}
						onSelect={handleDateSelect}
					/>
				))}
			</Slider>
			<IconButton
				onClick={goToNext}
				sx={{
					position: 'absolute',
					right: -20,
					top: '50%',
					transform: 'translateY(-50%)',
					zIndex: 1,
				}}
			>
				&#8250;
			</IconButton>
		</Box>
	)
}
