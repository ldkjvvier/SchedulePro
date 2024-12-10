// components/BestCuts.tsx
import Image from 'next/image'

export const BestCuts = () => {
	const cuts = [
		{
			id: 1,
			name: 'Corte Clásico',
			description: 'Un estilo atemporal que nunca pasa de moda.',
			image: '/user.png',
		},
		{
			id: 2,
			name: 'Estilo Moderno',
			description: 'Para quienes buscan un look más contemporáneo.',
			image: '/user.png',
		},
		{
			id: 3,
			name: 'Fade Perfecto',
			description: 'Detalles precisos para un acabado profesional.',
			image: '/user.png',
		},
	]

	return (
		<section className="tw-my-12 tw-py-8">
			<h2 className="tw-text-3xl tw-font-bold tw-mb-6 tw-text-center tw-text-text-main">
				Nuestros Mejores Cortes
			</h2>
			<div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-6">
				{cuts.map((cut) => (
					<div
						key={cut.id}
						className="tw-bg-primary tw-rounded-lg tw-overflow-hidden tw-shadow-lg tw-border tw-border-accent"
					>
						<Image
							src={cut.image}
							alt={cut.name}
							width={300}
							height={250}
							className="tw-w-full tw-h-62 tw-object-cover"
						/>
						<div className="tw-p-4">
							<h3 className="tw-text-xl tw-font-bold tw-mb-2 tw-text-text-main">
								{cut.name}
							</h3>
							<p className="tw-text-text-secondary">
								{cut.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
