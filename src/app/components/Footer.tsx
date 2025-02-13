import React from 'react'
import {
	Box,
	Container,
	Typography,
	Link,
	Stack,
} from '@mui/material'

const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<Box
			component="footer"
			sx={{
				bgcolor: 'background.paper',
				borderTop: 1,
				borderColor: 'divider',
				py: 3,
			}}
		>
			<Container>
				<Stack
					direction={{ xs: 'column', sm: 'row' }}
					justifyContent="space-between"
					alignItems="center"
				>
					<Typography
						variant="body2"
						color="text.secondary"
						sx={{ mb: { xs: 2, sm: 0 } }}
					>
						© {currentYear} SchedulePro. Todos los derechos
						reservados.
					</Typography>
					<Stack direction="row" spacing={2}>
						<Link
							href="/privacidad"
							color="text.primary"
							underline="hover"
						>
							Política de Privacidad
						</Link>
						<Link
							href="/terminos"
							color="text.primary"
							underline="hover"
						>
							Términos de Servicio
						</Link>
					</Stack>
				</Stack>
			</Container>
		</Box>
	)
}

export default Footer
