'use client'
import Link from 'next/link'
import { useBarberList } from '@/hooks/useBarberList'
import { FallbackImage } from '../components/FallbackImage'
import { BarberSummary } from '@/models/barber'

function BarberCard({ barber }: { barber: BarberSummary }) {
	return (
		<div className="tw-bg-white tw-shadow-lg tw-rounded-lg tw-border tw-border-accent tw-overflow-hidden tw-transform tw-transition-transform tw-duration-300 hover:tw-scale-105">
			<FallbackImage
				src={barber.image}
				alt={barber.name}
				width={300}
				height={200}
				className="tw-w-full tw-h-48 sm:tw-h-56 md:tw-h-64 tw-object-cover"
			/>
			<div className="tw-p-4 sm:tw-p-6">
				<h2 className="tw-text-xl sm:tw-text-2xl tw-font-semibold tw-mb-2 tw-text-text-main">
					{barber.name}
				</h2>
				<p className="tw-text-text-secondary tw-mb-4 tw-text-sm">
					{barber.specialty}
				</p>
				<Link
					href={`/profesional/${barber.id}`}
					className="tw-inline-block tw-bg-button-primary tw-text-white tw-px-4 sm:tw-px-6 tw-py-2 sm:tw-py-3 tw-rounded-md tw-font-medium tw-shadow hover:tw-bg-button-secondary hover:tw-text-text-main tw-no-underline tw-transition-colors"
				>
					Ver Servicios
				</Link>
			</div>
		</div>
	)
}

export default function Servicios() {
	const { data: barberList, isLoading, error } = useBarberList()

	if (isLoading)
		return (
			<div className="tw-bg-secondary tw-flex-1 tw-w-full tw-py-12">
				<div className="tw-container tw-mx-auto tw-px-4 tw-py-8">
					<h1 className="tw-text-center tw-text-3xl sm:tw-text-4xl tw-font-bold tw-mb-4 tw-text-text-main">
						Nuestros Barberos
					</h1>
					<div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-6">
						{Array.from({ length: 4 }).map((_, index) => (
							<div
								className="tw-bg-white tw-shadow-lg tw-rounded-lg tw-border tw-border-accent tw-overflow-hidden"
								aria-hidden="true"
								key={index}
							>
								<div className="tw-w-full tw-h-48 sm:tw-h-56 md:tw-h-64 tw-bg-gray-200 tw-animate-pulse"></div>
								<div className="tw-p-4 sm:tw-p-6">
									<div className="tw-w-3/4 tw-h-4 tw-mb-2 tw-bg-gray-200 tw-animate-pulse"></div>
									<div className="tw-w-1/2 tw-h-4 tw-mb-4 tw-bg-gray-200 tw-animate-pulse"></div>
									<div className="tw-w-1/2 tw-h-4 tw-mb-4 tw-bg-gray-200 tw-animate-pulse"></div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		)

	if (error)
		return <p>Error al cargar los barberos: {error.message}</p>
	if (!barberList || barberList.length === 0)
		return <p>No hay barberos disponibles</p>

	return (
		<div className="tw-bg-secondary tw-flex-1 tw-w-full tw-py-12">
			<div className="tw-container tw-mx-auto tw-px-4 tw-py-8">
				<h1 className="tw-text-center tw-text-3xl sm:tw-text-4xl tw-font-bold tw-mb-4 tw-text-text-main">
					Nuestros Barberos
				</h1>
				<div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-6">
					{barberList.map((barber) => (
						<BarberCard key={barber.id} barber={barber} />
					))}
				</div>
			</div>
		</div>
	)
}
