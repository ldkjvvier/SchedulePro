import { validate, format } from 'rut.js'

export const validateRut = (rut: string): boolean => {
	return validate(rut)
}

export const formatRut = (rut: string): string => {
	return format(rut)
}

export const cleanRut = (rut: string): string => {
	return format(rut, {
		dots: false,
	})
}
