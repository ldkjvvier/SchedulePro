import React from 'react'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

const Footer = () => {
	return (
		<footer className="tw-bg-primary tw-px-12 tw-py-6 tw-border-t tw-border-accent tw-w-full">
			<div className="tw-px-12">
				<div className="tw-flex tw-justify-between tw-items-center tw-flex-col sm:tw-flex-row">
					<Typography
						variant="body2"
						className="tw-text-text-secondary tw-mb-4 sm:tw-mb-0"
					>
						© 2023 ShedulePro. Todos los derechos reservados.
					</Typography>
					<nav className="tw-text-center">
						<Link
							href="/privacidad"
							className="tw-text-text-main hover:tw-text-accent tw-mr-4 tw-transition-colors"
							underline="hover"
						>
							Política de Privacidad
						</Link>
						<Link
							href="/terminos"
							className="tw-text-text-main hover:tw-text-accent tw-transition-colors"
							underline="hover"
						>
							Términos de Servicio
						</Link>
					</nav>
				</div>
			</div>
		</footer>
	)
}

export default Footer
