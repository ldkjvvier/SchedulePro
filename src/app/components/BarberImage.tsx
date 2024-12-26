import Image from 'next/image'
import { useState } from 'react'

interface BarberImageProps {
	src: string
	alt: string
	width: number
	height: number
	fallbackSrc?: string
	[key: string]: any
}

export const BarberImage = ({
	src,
	alt,
	width,
	height,
	fallbackSrc = '/image_placeholder.svg',
	...props
}: BarberImageProps) => {
	const [imgSrc, setImgSrc] = useState(src)

	return (
		<Image
			src={imgSrc}
			alt={alt}
			{...props}
			width={width}
			height={height}
			onError={() => setImgSrc(fallbackSrc)}
		/>
	)
}
