import { Box, Typography } from '@mui/material'

export default function Custom404({
	message = '',
}: {
	message: string
}) {
	return (
		<Box sx={{ textAlign: 'center' }}>
			<Typography
				variant="h1"
				sx={{
					color: '#fff',
					fontSize: '12em',
					fontWeight: 'bold',
					fontFamily: 'Helvetica',
					textShadow: `
						0 1px 0 #ccc,
						0 2px 0 #c9c9c9,
						0 3px 0 #bbb,
						0 4px 0 #b9b9b9,
						0 5px 0 #aaa,
						0 6px 1px rgba(0, 0, 0, 0.1),
						0 0 5px rgba(0, 0, 0, 0.1),
						0 1px 3px rgba(0, 0, 0, 0.3),
						0 3px 5px rgba(0, 0, 0, 0.2),
						0 5px 10px rgba(0, 0, 0, 0.25),
						0 10px 10px rgba(0, 0, 0, 0.2),
						0 20px 20px rgba(0, 0, 0, 0.15)
					`,
				}}
			>
				404
			</Typography>

			<Typography
				variant="h4"
				sx={{
					color: '#fff',
					fontSize: '2em',
					fontWeight: 'bold',
					fontFamily: 'Helvetica',
					mt: 2,
					textShadow: `
						0 1px 0 #ccc,
						0 2px 0 #c9c9c9,
						0 3px 0 #bbb,
						0 4px 0 #b9b9b9,
						0 5px 0 #aaa,
						0 6px 1px rgba(0, 0, 0, 0.1),
						0 0 5px rgba(0, 0, 0, 0.1),
						0 1px 3px rgba(0, 0, 0, 0.3),
						0 3px 5px rgba(0, 0, 0, 0.2),
						0 5px 10px rgba(0, 0, 0, 0.25),
						0 10px 10px rgba(0, 0, 0, 0.2),
						0 20px 20px rgba(0, 0, 0, 0.15)
					`,
				}}
			>
				{message || 'La página que buscas no existe'}
			</Typography>
		</Box>
	)
}
