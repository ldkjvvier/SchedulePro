'use client'
import Link from 'next/link'
import { useBarberList } from '@/hooks/useBarberList'
import { FallbackImage } from '../components/FallbackImage'
import { BarberSummary } from '@/models/barber'
import {
	Box,
	Typography,
	Button,
	Card,
	CardContent,
	CardMedia,
	Grid,
	Container,
} from '@mui/material'

function BarberCard({ barber }: { barber: BarberSummary }) {
	return (
		<Card
			sx={{
				bgcolor: 'white',
				boxShadow: 3,
				borderRadius: 2,
				border: '1px solid',
				borderColor: 'primary.main',
				overflow: 'hidden',
				transition: 'transform 0.3s',
				'&:hover': {
					transform: 'scale(1.05)',
				},
			}}
		>
			<FallbackImage
				src={barber.image}
				alt={barber.name}
				width={300}
				height={200}
				style={{ objectFit: 'cover', width: '100%' }}
			/>
			<CardContent sx={{ p: { xs: 2, sm: 3 } }}>
				<Typography
					variant="h6"
					component="h2"
					sx={{
						fontWeight: 600,
						mb: 1,
						color: 'text.primary',
					}}
				>
					{barber.name}
				</Typography>
				<Typography
					variant="body2"
					sx={{ color: 'text.secondary', mb: 2 }}
				>
					{barber.specialty}
				</Typography>
				<Button
					component={Link}
					href={`/profesional/${barber.id}`}
					variant="contained"
					sx={{
						px: { xs: 2, sm: 3 },
						py: { xs: 1, sm: 1.5 },
						fontWeight: 500,
						borderRadius: 2,
						boxShadow: 2,
						bgcolor: 'primary.main',
						color: 'white',
						textTransform: 'none',
						'&:hover': {
							color: 'text.primary',
						},
					}}
				>
					Ver Servicios
				</Button>
			</CardContent>
		</Card>
	)
}

export default function Servicios() {
	const { data: barberList, isLoading, error } = useBarberList()

	const skeletonCard = (
		<Card
			sx={{
				bgcolor: 'white',
				boxShadow: 3,
				borderRadius: 2,
				border: '1px solid',
				borderColor: 'primary.main',
				overflow: 'hidden',
			}}
		>
			<Box
				sx={{
					width: '100%',
					height: { xs: 192, sm: 224, md: 256 },
					bgcolor: 'grey.300',
					animation: 'pulse 1.5s infinite',
				}}
			/>
			<CardContent sx={{ p: { xs: 2, sm: 3 } }}>
				<Box
					sx={{
						width: '75%',
						height: 16,
						mb: 1,
						bgcolor: 'grey.300',
						animation: 'pulse 1.5s infinite',
					}}
				/>
				<Box
					sx={{
						width: '50%',
						height: 16,
						mb: 2,
						bgcolor: 'grey.300',
						animation: 'pulse 1.5s infinite',
					}}
				/>
				<Box
					sx={{
						width: '50%',
						height: 16,
						bgcolor: 'grey.300',
						animation: 'pulse 1.5s infinite',
					}}
				/>
			</CardContent>
		</Card>
	)

	if (isLoading) {
		return (
			<>
				<Box
					sx={{
						bgcolor: 'primary.main',
						color: 'white',
						py: { xs: 6, md: 10 },
						width: '100%',
						textAlign: 'center',
					}}
				>
					<Container>
						<Typography
							variant="h2"
							component="h1"
							gutterBottom
							sx={{
								fontSize: { xs: '2rem', sm: '2.5rem', md: '2.75rem' },
							}}
						>
							Nuestros Barberos
						</Typography>
						<Typography
							variant="subtitle1"
							sx={{
								maxWidth: '800px',
								mx: 'auto',
								fontSize: { xs: '1rem', md: '1.1rem' },
							}}
						>
							Conoce a nuestro equipo de profesionales, expertos en
							diferentes estilos y técnicas de barbería, listos para
							ofrecerte el mejor servicio.
						</Typography>
					</Container>
				</Box>
				<Box
					sx={{
						py: 12,
						width: '100%',
						flex: 1,
					}}
				>
					<Box sx={{ maxWidth: '1200px', mx: 'auto', px: 2, py: 4 }}>
						<Grid container spacing={3}>
							{Array.from({ length: 4 }).map((_, index) => (
								<Grid item xs={12} sm={6} md={4} lg={3} key={index}>
									{skeletonCard}
								</Grid>
							))}
						</Grid>
					</Box>
				</Box>
			</>
		)
	}

	if (error)
		return (
			<Typography>
				Error al cargar los barberos: {error.message}
			</Typography>
		)

	if (!barberList || barberList.length === 0)
		return <Typography>No hay barberos disponibles</Typography>

	return (
		<>
			<Box
				sx={{
					bgcolor: 'primary.main',
					color: 'white',
					py: { xs: 6, md: 10 },
					width: '100%',
					textAlign: 'center',
				}}
			>
				<Container>
					<Typography
						variant="h2"
						component="h1"
						gutterBottom
						sx={{
							fontSize: { xs: '2rem', sm: '2.5rem', md: '2.75rem' },
						}}
					>
						Nuestros Barberos
					</Typography>
					<Typography
						variant="subtitle1"
						sx={{
							maxWidth: '800px',
							mx: 'auto',
							fontSize: { xs: '1rem', md: '1.1rem' },
						}}
					>
						Conoce a nuestro equipo de profesionales, expertos en
						diferentes estilos y técnicas de barbería, listos para
						ofrecerte el mejor servicio.
					</Typography>
				</Container>
			</Box>
			<Box
				sx={{
					py: 12,
					width: '100%',
					flex: 1,
				}}
			>
				<Box sx={{ maxWidth: '1200px', mx: 'auto', px: 2, py: 0 }}>
					<Grid container spacing={3}>
						{barberList.map((barber) => (
							<Grid item xs={12} sm={6} md={4} lg={3} key={barber.id}>
								<BarberCard barber={barber} />
							</Grid>
						))}
					</Grid>
				</Box>
			</Box>
		</>
	)
}
