import { Facebook, Instagram } from '@mui/icons-material'
import Map from './components/Map'
import { BestCuts } from './components/BestCuts'

export default function Home() {
	return (
		<>
			{/* Ajustar padding horizontal responsivo */}
			<div className="tw-grid tw-grid-flow-row tw-mx-auto tw-bg-primary tw-px-4 sm:tw-px-8 md:tw-px-16 lg:tw-px-32 xl:tw-px-64">
				{/* Contenedor del fondo extendido */}
				<div className="tw-relative tw-py-8">
					{/* Sección de fondo secundario */}
					<div className="tw-absolute tw-inset-0 tw-bg-secondary tw--mx-4 sm:tw--mx-8 md:tw--mx-16 lg:tw--mx-32 xl:tw--mx-64 tw-z-0" />
					{/* Contenido principal */}
					<section className="tw-mb-12 tw-text-center tw-relative tw-z-10">
						<h1 className="tw-text-4xl tw-font-bold tw-mb-4 tw-text-text-main">
							Bienvenido a ShedulePro
						</h1>
						<p className="tw-text-xl tw-mb-6 tw-text-text-secondary">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Ullam cupiditate ut vitae autem necessitatibus.
						</p>
					</section>

					<section className="tw-grid tw-gap-4 md:tw-grid-cols-2 tw-relative tw-z-10">
						{/* Sección Sobre Nosotros */}
						<div className="tw-mb-12">
							<h2 className="tw-text-2xl tw-font-bold tw-mb-4 tw-text-text-main">
								Sobre Nosotros
							</h2>
							<p className="tw-mb-4 tw-text-text-secondary">
								Lorem ipsum dolor sit amet consectetur, adipisicing
								elit. Est veniam quibusdam doloremque aliquid
								aspernatur, explicabo magnam mollitia ipsam
								reprehenderit illo corporis. Non voluptatibus,
								architecto doloremque accusantium quis quidem
								excepturi ea.
							</p>
						</div>

						{/* Componente del Mapa */}
						<Map />
					</section>
				</div>

				<BestCuts />

				{/* Redes Sociales */}
				<section className="tw-text-center tw-bg-secondary tw-my-8 tw-p-8 tw-rounded-lg tw-shadow-md tw-border tw-border-accent">
					<h2 className="tw-text-2xl tw-font-bold tw-mb-4 tw-text-text-main">
						Síguenos en Redes Sociales
					</h2>
					<div className="tw-flex tw-justify-center tw-space-x-6">
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noopener noreferrer"
							className="tw-text-text-secondary hover:tw-text-accent tw-transition-colors"
						>
							<Facebook />
						</a>
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							className="tw-text-text-secondary hover:tw-text-accent tw-transition-colors"
						>
							<Instagram />
						</a>
					</div>
				</section>
			</div>
		</>
	)
}
