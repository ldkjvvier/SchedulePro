import Image, { ImageProps } from 'next/image'
import { useState, useEffect } from 'react'

interface FallbackImageProps extends ImageProps {
	fallbackSrc?: string
}

export const FallbackImage: React.FC<FallbackImageProps> = ({
	src,
	alt,
	fallbackSrc = '/image_placeholder.svg',
	...props
}) => {
	const [imgSrc, setImgSrc] = useState(src)

	useEffect(() => {
		setImgSrc(src) // Reinicia el src si cambia el prop src
	}, [src])

	const handleError = () => {
		setImgSrc(fallbackSrc) // Cambia al fallback si ocurre un error
	}

	return (
		<Image
			{...props}
			src={imgSrc || fallbackSrc}
			alt={alt || 'Image'}
			onError={handleError}
			placeholder="blur"
			blurDataURL={fallbackSrc}
		/>
	)
}
