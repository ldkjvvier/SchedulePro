import { IconButton, Modal, Slide } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import { SchedulePicker } from './SchedulePicker'
import { Header } from './Header'

interface ScheduleModalWrapperProps {
	children: React.ReactNode
}

export const ScheduleModalWrapper = ({
	children,
}: ScheduleModalWrapperProps) => {
	const [open, setOpen] = useState(false)

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<>
			<div onClick={handleOpen}>{children}</div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-title"
				aria-describedby="modal-description"
				closeAfterTransition
			>
				<Slide direction="up" in={open} mountOnEnter unmountOnExit>
					<div className="tw-fixed tw-flex-1 tw-bottom-0 tw-left-0 tw-w-full tw-h-full tw-bg-secondary tw-overflow-auto">
						<Header />
						<IconButton
							onClick={handleClose}
							sx={{
								position: 'absolute',
								top: 8,
								right: 8,
								zIndex: 1400,
							}}
						>
							<CloseIcon />
						</IconButton>
						<SchedulePicker />
					</div>
				</Slide>
			</Modal>
		</>
	)
}
