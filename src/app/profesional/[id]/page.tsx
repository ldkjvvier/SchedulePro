'use client'
import {
	Typography,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { Services } from './components/Services'
import { useBarber } from '@/hooks/useBarber'
import { LoadingSkeleton } from './components/loadingSkeleton'
import Custom404 from '@/app/not-found'
import { BarberImage } from '@/app/components/BarberImage'
export default function Profesional({
	params,
}: {
	params: { id: string }
}) {
	const { data: user, isLoading } = useBarber(params.id)

	if (isLoading) return <LoadingSkeleton />
	if (!user) return <Custom404 message="Barber not found" />

	return (
		<div className="tw-bg-secondary tw-flex-1 tw-w-full tw-py-12">
			<div className="tw-container tw-mx-auto tw-px-4 tw-py-8">
				<div className="tw-flex tw-items-center tw-gap-4 tw-mb-8">
					<BarberImage
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
