import Link from 'next/link'
import Image from 'next/image'

const barbers = [
	{
		id: 1,
		name: 'Juan Pérez',
		specialty: 'Cortes clásicos',
		image: '/user.png',
	},
	{
		id: 2,
		name: 'María García',
		specialty: 'Barbas y afeitados',
		image: '/user.png',
	},
	{
		id: 3,
		name: 'Carlos Rodríguez',
		specialty: 'Estilos modernos',
		image: '/user.png',
	},
	{
		id: 4,
		name: 'Ana López',
		specialty: 'Cortes de cabello',
		image: '/user.png',
	},
]

export default function Servicios() {
	return (
		<div className="tw-bg-secondary tw-flex-1 tw-w-full tw-py-12">
			<div className="tw-container tw-mx-auto tw-px-4 tw-py-8">
				<h1 className="tw-text-center tw-text-4xl tw-font-bold tw-mb-4 tw-text-text-main">
					Nuestros Barberos
				</h1>
				<div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-12">
					{barbers.map((barber) => (
						<div
							key={barber.id}
							className="tw-bg-white tw-shadow-lg tw-rounded-lg tw-border tw-border-accent tw-overflow-hidden tw-transform tw-transition-transform tw-duration-300 hover:tw-scale-105"
						>
							<Image
								src={barber.image}
								alt={barber.name}
								width={300}
								height={200}
								className="tw-w-full tw-h-64 tw-object-cover"
							/>
							<div className="tw-p-6">
								<h2 className="tw-text-2xl tw-font-semibold tw-mb-2 tw-text-text-main">
									{barber.name}
								</h2>
								<p className="tw-text-text-secondary tw-mb-4 tw-text-sm">
									{barber.specialty}
								</p>
								<Link
									href={`/barberos/${barber.id}`}
									className="tw-inline-block tw-bg-button-primary tw-text-white tw-px-6 tw-py-3 tw-rounded-md tw-font-medium tw-shadow hover:tw-bg-button-secondary hover:tw-text-text-main tw-no-underline tw-transition-colors"
								>
									Ver Servicios
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
