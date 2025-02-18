import React from 'react'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import Image from 'next/image'
import HeaderBase from '@/app/components/HeaderBase'

interface HeaderProps {
	children?: React.ReactNode
}

export const Header = ({ children }: HeaderProps) => {
	return (
		<HeaderBase>
			<Link className="tw-flex tw-items-center" href="/">
				<Image
					src="/page_logo.png"
					alt="Barbería Logo"
					width={40}
					height={40}
				/>
				<Typography
					variant="h6"
					className="tw-ml-3 tw-text-text-main tw-text-xl tw-font-semibold"
				>
					SchedulePro
				</Typography>
			</Link>

			{children}
		</HeaderBase>
	)
}
