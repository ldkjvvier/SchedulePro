import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
	TextField,
	Button,
	Box,
	Typography,
	FormControl,
	FormLabel,
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
		register,
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

			<FormControl fullWidth>
				<FormLabel>Nombre completo</FormLabel>
				<TextField
					{...register('name')}
					error={!!errors.name}
					helperText={errors.name?.message}
				/>
			</FormControl>

			<FormControl fullWidth>
				<FormLabel>Email</FormLabel>
				<TextField
					type="email"
					{...register('email')}
					error={!!errors.email}
					helperText={errors.email?.message}
				/>
			</FormControl>

			<FormControl fullWidth>
				<FormLabel>Teléfono</FormLabel>
				<TextField
					type="tel"
					{...register('phone')}
					error={!!errors.phone}
					helperText={errors.phone?.message}
				/>
			</FormControl>

			<FormControl fullWidth>
				<FormLabel>Notas adicionales (opcional)</FormLabel>
				<TextField multiline rows={4} {...register('notes')} />
			</FormControl>

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
