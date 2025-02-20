import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
	Box,
	Typography,
	TextField,
	Button,
	FormControl,
	FormHelperText,
} from '@mui/material'

const formSchema = z.object({
	name: z
		.string()
		.min(2, 'El nombre debe tener al menos 2 caracteres'),
	email: z.string().email('Email inválido'),
	phone: z.string().min(8, 'Número de teléfono inválido'),
	notes: z.string().optional(),
})

export type ContactFormData = z.infer<typeof formSchema>

interface ContactFormProps {
	onSubmit: (data: ContactFormData) => void
	prevStep: () => void
}

export function ContactForm({
	onSubmit,
	prevStep,
}: ContactFormProps) {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<ContactFormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			notes: '',
		},
	})

	return (
		<Box
			component="form"
			onSubmit={handleSubmit(onSubmit)}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 2,
				maxWidth: 400,
				margin: 'auto',
			}}
		>
			<Typography variant="h5" sx={{ textAlign: 'center', mb: 2 }}>
				Datos de contacto
			</Typography>

			{/* Nombre */}
			<FormControl fullWidth error={!!errors.name}>
				<Controller
					name="name"
					control={control}
					render={({ field }) => (
						<TextField
							label="Nombre completo"
							placeholder="Tu nombre"
							variant="outlined"
							{...field}
						/>
					)}
				/>
				<FormHelperText>{errors.name?.message}</FormHelperText>
			</FormControl>

			{/* Email */}
			<FormControl fullWidth error={!!errors.email}>
				<Controller
					name="email"
					control={control}
					render={({ field }) => (
						<TextField
							label="Email"
							type="email"
							placeholder="tu@gmail.com"
							variant="outlined"
							{...field}
						/>
					)}
				/>
				<FormHelperText>{errors.email?.message}</FormHelperText>
			</FormControl>

			{/* Teléfono */}
			<FormControl fullWidth error={!!errors.phone}>
				<Controller
					name="phone"
					control={control}
					render={({ field }) => (
						<TextField
							label="Teléfono"
							type="tel"
							placeholder="+56 9 1234 5678"
							variant="outlined"
							{...field}
						/>
					)}
				/>
				<FormHelperText>{errors.phone?.message}</FormHelperText>
			</FormControl>

			{/* Notas */}
			<FormControl fullWidth>
				<Controller
					name="notes"
					control={control}
					render={({ field }) => (
						<TextField
							label="Notas adicionales (opcional)"
							multiline
							rows={4}
							placeholder="Información adicional para el barbero..."
							variant="outlined"
							{...field}
						/>
					)}
				/>
			</FormControl>

			{/* Botones */}
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					mt: 3,
				}}
			>
				<Button variant="outlined" onClick={prevStep}>
					Atrás
				</Button>
				<Button
					type="submit"
					variant="contained"
					sx={{
						backgroundColor: 'primary.main',
						color: 'white',
						'&:hover': { backgroundColor: 'primary.dark' },
					}}
				>
					Enviar
				</Button>
			</Box>
		</Box>
	)
}
