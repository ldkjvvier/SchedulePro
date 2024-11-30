import Image from 'next/image'
export default function Home() {
	return (
		<>
			<div>
				<h2>
					This is a base project with Theme UI and Material UI
					components.
				</h2>
				<p className="tw-text-center">
					You can start editing the page by modifying the{' '}
					<code>src/app/page.tsx</code> file.
				</p>
				{/* LOGO ROTATING  */}
				<div className="tw-flex tw-justify-center tw-items-center tw-h-96">
					<div className="tw-w-32 tw-h-32 tw-bg-gray-200 tw-rounded-full tw-flex tw-justify-center tw-items-center  tw-animate-pulse">
						<Image
							width={96}
							height={96}
							src="/next.svg"
							alt="logo"
						/>
					</div>
				</div>
			</div>
		</>
	)
}
