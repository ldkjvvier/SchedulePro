'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { TextField, Button, Box, Typography } from '@mui/material'

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
}

export function ContactForm({ onSubmit }: ContactFormProps) {
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
				padding: 3,
				borderRadius: 2,
				boxShadow: 3,
				backgroundColor: 'background.paper',
			}}
		>
			<Typography variant="h5" sx={{ textAlign: 'center', mb: 2 }}>
				Datos de contacto
			</Typography>
			<TextField
				label="Nombre completo"
				{...register('name')}
				error={!!errors.name}
				helperText={errors.name?.message}
				fullWidth
			/>
			<TextField
				label="Email"
				type="email"
				{...register('email')}
				error={!!errors.email}
				helperText={errors.email?.message}
				fullWidth
			/>
			<TextField
				label="Teléfono"
				type="tel"
				{...register('phone')}
				error={!!errors.phone}
				helperText={errors.phone?.message}
				fullWidth
			/>
			<TextField
				label="Notas adicionales (opcional)"
				multiline
				rows={4}
				{...register('notes')}
				fullWidth
			/>
			<Button
				type="submit"
				variant="contained"
				sx={{
					backgroundColor: 'primary.main',
					color: 'white',
					mt: 2,
					'&:hover': { backgroundColor: 'primary.dark' },
				}}
			>
				Enviar
			</Button>
		</Box>
	)
}
