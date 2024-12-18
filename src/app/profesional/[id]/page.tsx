'use client'
import {
	Typography,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import Image from 'next/image'
import { Services } from './components/services'
import { useBarber } from '@/hooks/useBarber'
export default function Profesional({
	params,
}: {
	params: { id: string }
}) {
	const { data: user, isLoading, error } = useBarber(params.id)

	if (!user) return <p>User not found</p>
	if (!params.id) return <p>Barber ID is missing</p>
	if (isLoading) return <p>Loading events...</p>
	if (error) return <p>Error loading events: {error.message}</p>

	return (
		<div className="tw-bg-secondary tw-flex-1 tw-w-full tw-py-12">
			<div className="tw-container tw-mx-auto tw-px-4 tw-py-8">
				<div className="tw-flex tw-items-center tw-gap-4 tw-mb-8">
					<Image
						src={user.image}
						alt={user.name}
						width={100}
						height={100}
						className="tw-rounded-full"
					/>
					<div>
						<Typography
							variant="h4"
							color="text.primary"
							sx={{ fontWeight: 'bold' }}
						>
							{user.name}
						</Typography>
						<Typography variant="body1" color="text.secondary">
							{user.email}
						</Typography>
						<Typography variant="body1" color="text.secondary">
							{user.contactNumber}
						</Typography>
						<Typography variant="body1" color="text.secondary">
							{user.bio}
						</Typography>
					</div>
				</div>
				<Accordion
					sx={{
						boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
					}}
					defaultExpanded
				>
					<AccordionSummary
						expandIcon={<ArrowDropDownIcon />}
						aria-controls="panel2-content"
						id="panel2-header"
					>
						<Typography>Servicios de Barberia</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Services barberId={user.id} />
					</AccordionDetails>
				</Accordion>
			</div>
		</div>
	)
}
