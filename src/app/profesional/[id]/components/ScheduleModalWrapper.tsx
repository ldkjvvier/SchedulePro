'use client'
import { IconButton, Modal } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import { SchedulePicker } from './SchedulePicker'

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
			>
				<div
					style={{
						position: 'relative',
						width: '100%',
						height: '100%',
					}}
				>
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
			</Modal>
		</>
	)
}
