import { Facebook, Instagram } from '@mui/icons-material'
import {
	Box,
	Container,
	Typography,
	Paper,
	IconButton,
} from '@mui/material'
import Map from './components/Map'
import { BestCuts } from './components/BestCuts'

export default function Home() {
	return (
		<Box
			sx={{
				bgcolor: 'background.paper',
				minHeight: '100vh',
			}}
		>
			{/* Fondo extendido */}
			<Paper
				sx={{
					position: 'relative',
					py: 6,
					px: { xs: 3, sm: 6, md: 8, lg: 12 },
					bgcolor: 'background.default',
					borderColor: 'transparent',
				}}
				elevation={0}
			>
				{/* Sección Bienvenida */}
				<Box textAlign="center" mb={6}>
					<Typography
						variant="h3"
						fontWeight="bold"
						color="text.primary"
						gutterBottom
					>
						Bienvenido a SchedulePro
					</Typography>
					<Typography variant="h6" color="text.secondary">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ullam cupiditate ut vitae autem necessitatibus.
					</Typography>
				</Box>

				{/* Sección Sobre Nosotros */}
				<Box
					display="grid"
					gap={4}
					gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }}
				>
					<Box>
						<Typography
							variant="h4"
							fontWeight="bold"
							color="text.primary"
							gutterBottom
						>
							Sobre Nosotros
						</Typography>
						<Typography color="text.secondary">
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Est veniam quibusdam doloremque aliquid
							aspernatur, explicabo magnam mollitia ipsam
							reprehenderit illo corporis. Non voluptatibus,
							architecto doloremque accusantium quis quidem excepturi
							ea.
						</Typography>
					</Box>
					<Map />
				</Box>
			</Paper>
			<Container>
				{/* Fondo extendido */}

				{/* Sección BestCuts */}
				<Box my={6}>
					<BestCuts />
				</Box>

				{/* Redes Sociales */}
				<Paper
					sx={{
						textAlign: 'center',
						bgcolor: 'background.default',
						py: 4,
						px: 2,
						mb: 4,
						borderRadius: 2,
						boxShadow: 3,
						border: '1px solid',
						borderColor: 'grey.300',
					}}
				>
					<Typography
						variant="h4"
						fontWeight="bold"
						color="text.primary"
						gutterBottom
					>
						Síguenos en Redes Sociales
					</Typography>
					<Box display="flex" justifyContent="center" gap={3}>
						<IconButton
							href="https://facebook.com"
							target="_blank"
							color="primary"
						>
							<Facebook />
						</IconButton>
						<IconButton
							href="https://instagram.com"
							target="_blank"
							color="primary"
						>
							<Instagram />
						</IconButton>
					</Box>
				</Paper>
			</Container>
		</Box>
	)
}
