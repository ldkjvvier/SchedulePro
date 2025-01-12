import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

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
	const [hasError, setHasError] = useState(false)

	const handleError = () => {
		if (!hasError) {
			setImgSrc(fallbackSrc)
			setHasError(true)
		}
	}

	return (
		<Image {...props} src={imgSrc} alt={alt} onError={handleError} />
	)
}
