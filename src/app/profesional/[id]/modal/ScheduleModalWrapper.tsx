import {
	IconButton,
	Modal,
	Slide,
	Paper,
	useTheme,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import { SchedulePicker } from './SchedulePicker'
import { Header } from './Header'
import { Footer } from './Footer'

interface ScheduleModalWrapperProps {
	children: React.ReactNode
}

export const ScheduleModalWrapper = ({
	children,
}: ScheduleModalWrapperProps) => {
	const [open, setOpen] = useState(false)
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
							position: 'fixed',
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
						<Header />

						<IconButton
							onClick={handleClose}
							sx={{
								position: 'absolute',
								top: 8,
								right: 8,
								color: theme.palette.text.primary,
							}}
							aria-label="Cerrar"
						>
							<CloseIcon />
						</IconButton>

						{/* Contenido del modal */}
						<SchedulePicker />
						<Footer />
					</Paper>
				</Slide>
			</Modal>
		</>
	)
}
