import {
	Skeleton,
	Accordion,
	AccordionSummary,
	Typography,
	AccordionDetails,
} from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

export const LoadingSkeleton = () => {
	return (
		<div className="tw-bg-secondary tw-flex-1 tw-w-full tw-py-12">
			<div className="tw-container tw-mx-auto tw-px-4 tw-py-8">
				<div className="tw-flex tw-items-center tw-gap-4 tw-mb-8">
					<Skeleton variant="circular" width={100} height={100} />
					<div>
						<Skeleton variant="text" width={200} height={40} />
						<Skeleton variant="text" width={150} height={30} />
					</div>
				</div>
				<Accordion
					sx={{
						boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
					}}
					defaultExpanded
				>
					<AccordionSummary
						expandIcon={<ArrowDropDownIcon />}
						aria-controls="panel2-content"
						id="panel2-header"
					>
						<Typography>Servicios de Barberia</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<AccordionSkeleton />
					</AccordionDetails>
				</Accordion>
			</div>
		</div>
	)
}

export const AccordionSkeleton = () => {
	return (
		<div className="tw-grid md:tw-grid-cols-2 tw-grid-flow-row">
			{[1, 2, 3, 4].map((item) => (
				<div
					key={item}
					className="tw-flex tw-flex-col tw-border tw-border-red-500 tw-rounded-md tw-text-start tw-justify-start tw-p-4 tw-m-2"
				>
					<Skeleton variant="text" width={150} height={30} />
					<Skeleton variant="text" width={100} height={20} />
					<Skeleton variant="text" width={80} height={20} />
				</div>
			))}
		</div>
	)
}
