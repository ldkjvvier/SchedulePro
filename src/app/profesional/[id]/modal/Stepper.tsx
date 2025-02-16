import { Check } from '@mui/icons-material'
import {
	Stepper as MuiStepper,
	Step,
	StepLabel,
	Box,
	stepConnectorClasses,
	StepConnector,
	styled,
} from '@mui/material'

interface StepperProps {
	steps: string[]
	currentStep: number
}

const CustomConnector = styled(StepConnector)(({ theme }) => ({
	[`&.${stepConnectorClasses.alternativeLabel}`]: {
		top: 10,
		left: 'calc(-50% + 16px)',
		right: 'calc(50% + 16px)',
	},
	[`&.${stepConnectorClasses.active}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			borderColor: theme.palette.primary.main,
		},
	},
	[`&.${stepConnectorClasses.completed}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			borderColor: theme.palette.primary.main,
		},
	},
	[`& .${stepConnectorClasses.line}`]: {
		borderColor: theme.palette.grey[400],
		borderTopWidth: 3,
		borderRadius: 1,
	},
}))

const CustomStepLabel = styled(StepLabel)(({ theme }) => ({
	'& .MuiStepLabel-label': {
		color: theme.palette.text.secondary,
		fontSize: '0.875rem',
		fontWeight: 500,
		transition: 'color 0.3s ease-in-out',
	},
	'&.Mui-active .MuiStepLabel-label': {
		color: theme.palette.primary.main,
		fontWeight: 700,
	},
	'&.Mui-completed .MuiStepLabel-label': {
		color: theme.palette.primary.dark,
	},
}))

export function Stepper({ steps, currentStep }: StepperProps) {
	return (
		<Box sx={{ width: '100%', py: 2 }}>
			<MuiStepper
				connector={<CustomConnector />}
				activeStep={currentStep}
				alternativeLabel
			>
				{steps.map((label) => (
					<Step key={label}>
						<CustomStepLabel>{label}</CustomStepLabel>
					</Step>
				))}
			</MuiStepper>
		</Box>
	)
}
