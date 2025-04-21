'use client'

import {
	Card,
	CardContent,
	CardMedia,
	Grid,
	Typography,
	Box,
} from '@mui/material'
import { FallbackImage } from './FallbackImage'

export const BestCuts = () => {
	const cuts = [
		{
			id: 1,
			name: 'Corte Clásico',
			description: 'Un estilo atemporal que nunca pasa de moda.',
			image: '/user.png',
		},
		{
			id: 2,
			name: 'Estilo Moderno',
			description: 'Para quienes buscan un look más contemporáneo.',
			image: '/user.png',
		},
		{
			id: 3,
			name: 'Fade Perfecto',
			description: 'Detalles precisos para un acabado profesional.',
			image: '/user.png',
		},
	]

	return (
		<Box sx={{ my: 8, py: 6, textAlign: 'center' }}>
			<Typography
				variant="h3"
				fontWeight="bold"
				color="text.primary"
				gutterBottom
			>
				Nuestros Mejores Cortes
			</Typography>
			<Grid container spacing={4} justifyContent="center">
				{cuts.map((cut) => (
					<Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={cut.id}>
						<Card
							sx={{
								borderRadius: 3,
								boxShadow: 4,
								transition: 'transform 0.3s ease-in-out',
								'&:hover': { transform: 'scale(1.05)' },
							}}
						>
							<CardMedia>
								<FallbackImage
									src={cut.image}
									alt={cut.name}
									width={300}
									height={200}
									className="tw-w-full tw-object-cover"
								/>
							</CardMedia>
							<CardContent
								sx={{
									bgcolor: 'background.paper', // Fondo neutro
									color: 'text.primary', // Color principal del tema
								}}
							>
								<Typography
									variant="h5"
									fontWeight="bold"
									color="primary.main"
								>
									{cut.name}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{cut.description}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	)
}
