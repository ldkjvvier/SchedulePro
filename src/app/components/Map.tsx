import React from 'react'

const Map = () => {
	return (
		<div className="tw-w-full tw-h-64 tw-bg-gray-300 tw-flex tw-items-center tw-justify-center">
			{/* MAPA CON GOOGLE MAPS */}
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.9355773567695!2d-70.7892253!3d-33.5030532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c2b7cc60afa5%3A0xa2ea572a5ad69f15!2sLibertador%20Bernardo%20O&#39;Higgins%202381%2C%20Maip%C3%BA%2C%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1733101538795!5m2!1ses-419!2scl"
				className="tw-w-full tw-h-full"
				style={{ border: 0 }}
				allowFullScreen
				loading="lazy"
				title="Mapa de schedulePro"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	)
}

export default Map
