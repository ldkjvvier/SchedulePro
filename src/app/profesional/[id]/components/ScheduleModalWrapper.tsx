'use client'
import { Modal } from '@mui/material'
import { useState } from 'react'
import { SchedulePicker } from './ShedulePicker'

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
				<SchedulePicker />
			</Modal>
		</>
	)
}
