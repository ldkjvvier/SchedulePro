'use client'
import React from 'react'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import HeaderBase from '@/app/components/HeaderBase'
import { Box } from '@mui/material'

interface HeaderProps {
	children?: React.ReactNode
}

export const Header = ({ children }: HeaderProps) => {
	return (
		<HeaderBase>
			<Box
				component={'link'}
				sx={{ display: 'flex', alignItems: 'center' }}
			>
				<Image
					src="/page_logo.png"
					alt="Barbería Logo"
					width={40}
					height={40}
				/>
				<Typography
					variant="h6"
					sx={{
						fontStyle: 'semibold',
						fontSize: '1.5rem',
						textDecoration: 'none',
					}}
				>
					SchedulePro
				</Typography>
			</Box>

			{children}
		</HeaderBase>
	)
}
