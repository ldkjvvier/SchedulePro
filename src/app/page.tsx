import Link from 'next/link'
import { Facebook, Instagram } from '@mui/icons-material'
import Header from './components/Header'
import Footer from './components/Footer'
import Map from './components/Map'

export default function Home() {
	return (
		<>
			<Header />

			<>
				<div className="tw-mx-auto tw-px-16 tw-py-8">
					{/* Sección de Bienvenida */}
					<section className="tw-mb-12 tw-text-center">
						<h1 className="tw-text-4xl tw-font-bold tw-mb-4 tw-text-text-main">
							Bienvenido a ShedulePro
						</h1>
						<p className="tw-text-xl tw-mb-6 tw-text-text-secondary">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Ullam cupiditate ut vitae autem necessitatibus.
						</p>
					</section>

					<section className="tw-grid tw-grid-rows-2 tw-gap-4 md:tw-grid-cols-2">
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

					{/* Redes Sociales */}
					<section className="tw-text-center tw-bg-primary tw-p-8 tw-rounded-lg tw-shadow-md tw-border tw-border-accent">
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
			<Footer />
		</>
	)
}
