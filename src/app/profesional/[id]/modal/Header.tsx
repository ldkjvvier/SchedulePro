import React from 'react'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import Image from 'next/image'
import HeaderBase from '@/app/components/HeaderBase'

export const Header = () => {
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
		</HeaderBase>
	)
}
