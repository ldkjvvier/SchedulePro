'use client'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { useEffect, useState } from 'react'
import { getBarber, getBarberServices } from '@/services'
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
	return (
		<div className="tw-bg-secondary tw-flex-1 tw-w-full tw-py-12">
			<div className="tw-container tw-mx-auto tw-px-4 tw-py-8">
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
						<div className="tw-grid tw-grid-cols-2 tw-grid-flow-row">
							{services.map((service) => (
								<div
									key={service.id}
									className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-4 tw-rounded-lg tw-m-2"
									style={{
										border: '1px solid #f56565', // Borde rojo (#f56565 es el código de color para rojo en Tailwind)
									}}
								>
									<h3 className="tw-text-lg tw-font-semibold">
										{service.name}
									</h3>
									<p className="tw-text-sm tw-text-center">
										{service.description}
									</p>
									<p className="tw-text-lg tw-font-semibold">
										${service.price}
									</p>
									<p className="tw-text-sm">{service.duration}</p>
								</div>
							))}
						</div>
					</AccordionDetails>
				</Accordion>
			</div>
		</div>
	)
}
