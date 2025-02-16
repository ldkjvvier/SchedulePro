import {
	IconButton,
	Modal,
	Slide,
	Paper,
	useTheme,
	Box,
	Button,
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
							justifyContent: 'center',
							alignItems: 'center',
							position: 'fixed',
							bottom: 0,
							left: 0,
							width: '100%',
							maxHeight: '100dvh',
							bgcolor: theme.palette.background.default,
							boxShadow: theme.shadows[5],
							overflow: 'hidden',
						}}
					>
						<Header />

						<IconButton
							onClick={handleClose}
							sx={{
								position: 'absolute',
								top: 8,
								right: 8,
								zIndex: 1000,
								color: theme.palette.text.primary,
							}}
							aria-label="Cerrar"
						>
							<CloseIcon />
						</IconButton>

						{/* Contenido del modal */}
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
								width: '100%',
								padding: 2,
								mt: 4,
							}}
						>
							<Stepper steps={STEPS} currentStep={currentStep} />
						</Box>
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
										backgroundColor: 'transparent',
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'space-between',
										maxWidth: 500,
										width: '100%',
									}}
								>
									<CardHeader>
										<h2 className="text-xl font-semibold">
											Datos de contacto
										</h2>
									</CardHeader>
									<CardContent>
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

						<Footer />
					</Paper>
				</Slide>
			</Modal>
		</>
	)
}
