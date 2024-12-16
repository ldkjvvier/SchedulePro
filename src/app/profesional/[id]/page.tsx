'use client'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { useEffect, useState } from 'react'
import { getBarber, getBarberServices } from '@/services'
import { Button } from '@mui/material'
import Image from 'next/image'
export default function Profesional({
	params,
}: {
	params: { id: string }
}) {
	const [user, setUser] = useState<any>(null)
	const [services, setServices] = useState<any[]>([])
	useEffect(() => {
		;(async () => {
			try {
				const barber = await getBarber(params.id)
				setUser(barber)

				const services = await getBarberServices(params.id)
				setServices(services)
			} catch (error) {
				console.error(error)
			}
		})()
	}, [params.id])
	console.log(user)
	console.log(services)

	const formatPrice = (price: number) => {
		return new Intl.NumberFormat('es-CL', {
			style: 'currency',
			currency: 'CLP',
		}).format(price)
	}
	return (
		<div className="tw-bg-secondary tw-flex-1 tw-w-full tw-py-12">
			<div className="tw-container tw-mx-auto tw-px-4 tw-py-8">
				<div>
					<Image
						src={user?.profilePicture}
						alt={user?.name}
						width={200}
						height={200}
						className="tw-rounded-full"
					/>
					<Typography
						variant="h4"
						color="text.primary"
						sx={{ fontWeight: 'bold' }}
					>
						{user?.name}
					</Typography>
					<Typography variant="body1" color="text.secondary">
						{user?.email}
					</Typography>
					<Typography variant="body1" color="text.secondary">
						{user?.contactNumber}
					</Typography>
					<Typography variant="body1" color="text.secondary">
						{user?.bio}
					</Typography>
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
						<div className="tw-grid md:tw-grid-cols-2 tw-grid-flow-row">
							{services.map((service) => (
								<div
									key={service.id}
									className="tw-flex tw-flex-col tw-border tw-border-red-500 tw-rounded-md tw-text-start tw-justify-start tw-p-4 tw-m-2"
								>
									<Typography
										variant="h6"
										sx={{
											fontWeight: 'bold',
											fontSize: '0.9rem',
											textTransform: 'capitalize',
										}}
									>
										{service.name}
									</Typography>

									<Typography variant="body2" color="text.secondary">
										{service.duration}
									</Typography>
									<Typography
										variant="body2"
										color="text.secondary"
										sx={{ fontWeight: 'bold' }}
									>
										{formatPrice(service.price)}
									</Typography>
									<Typography
										variant="body2"
										color="text.secondary"
										marginTop={1}
										sx={{
											fontWeight: 'semibold',
										}}
									>
										{service.description}
									</Typography>
									<div className="tw-flex tw-items-end tw-w-full tw-justify-end tw-p-4 tw-h-full">
										<Button
											variant="contained"
											color="primary"
											size="small"
											sx={{
												backgroundColor: '#ff0000',
												color: 'white',
												fontWeight: 'bold',
											}}
										>
											Agendar Servicio
										</Button>
									</div>
								</div>
							))}
						</div>
					</AccordionDetails>
				</Accordion>
			</div>
		</div>
	)
}
