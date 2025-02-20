import {
	IconButton,
	Modal,
	Slide,
	Paper,
	useTheme,
	Box,
	Typography,
	Card,
	CardContent,
	CardHeader,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import { SchedulePicker } from './SchedulePicker'
import { Header } from './Header'
import { Footer } from './Footer'
import { Stepper } from './Stepper'
import { ContactForm, ContactFormData } from './ContactForm'

interface ScheduleModalWrapperProps {
	children: React.ReactNode
}
const STEPS = ['Fecha y hora', 'Datos de contacto', 'Confirmación']

export const ScheduleModalWrapper = ({
	children,
}: ScheduleModalWrapperProps) => {
	const [open, setOpen] = useState(false)
	const [currentStep, setCurrentStep] = useState(0)

	const handleNextStep = () => {
		if (currentStep === STEPS.length - 1) return
		setCurrentStep((prev) => prev + 1)
	}
	const handlePrevStep = () => setCurrentStep((prev) => prev - 1)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	const theme = useTheme()

	return (
		<>
			{/* Trigger para abrir el modal */}
			<div onClick={handleOpen} style={{ cursor: 'pointer' }}>
				{children}
			</div>

			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-title"
				aria-describedby="modal-description"
				closeAfterTransition
			>
				<Slide direction="up" in={open} mountOnEnter unmountOnExit>
					<Paper
						elevation={3}
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							bottom: 0,
							left: 0,
							width: '100%',
							height: '100%',
							maxHeight: '100dvh',
							bgcolor: theme.palette.background.default,
							boxShadow: theme.shadows[5],
							overflow: 'hidden',
						}}
					>
						<Header>
							<IconButton
								onClick={handleClose}
								sx={{
									color: theme.palette.text.primary,
								}}
								aria-label="Cerrar"
							>
								<CloseIcon />
							</IconButton>
						</Header>

						{/* Contenido del modal */}
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								width: '100%',
								padding: 2,
								mt: 1,
							}}
						>
							<Stepper steps={STEPS} currentStep={currentStep} />
							{currentStep === 0 && (
								<SchedulePicker nextStep={handleNextStep} />
							)}
							{currentStep === 1 && (
								<Box
									sx={{
										width: '100%',
										display: 'flex',
										justifyContent: 'center',
									}}
								>
									<Card
										sx={{
											backgroundColor: 'background.paper',
											display: 'flex',
											flexDirection: 'column',
											justifyContent: 'space-between',

											p: 3,
											borderRadius: 2,
											boxShadow: 3,
										}}
									>
										<CardContent sx={{ p: 0 }}>
											<ContactForm
												prevStep={handlePrevStep}
												onSubmit={(data: ContactFormData) => {
													console.log(data)
													handleNextStep()
												}}
											/>
										</CardContent>
									</Card>
								</Box>
							)}
						</Box>

						<Footer />
					</Paper>
				</Slide>
			</Modal>
		</>
	)
}
