export interface Barber {
	id: string
	name: string
	email: string
	image: string
	specialties: string[]
	availability: Availability
	bio: string
	contactNumber: string
}

export interface Availability {
	monday: string
	tuesday: string
	wednesday: string
	thursday: string
	friday: string
	saturday: string
	sunday: string
}

export interface BarberSummary {
	id: string
	name: string
	image: string
	specialty: string
	biography: string
}
