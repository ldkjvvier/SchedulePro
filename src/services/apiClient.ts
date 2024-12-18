import axios from 'axios'

const apiClient = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json',
	},
})

apiClient.interceptors.response.use(
	(response) => response,
	(error) => {
		const message =
			error.response?.data?.message || 'An error occurred'
		return Promise.reject(new Error(message))
	}
)

export default apiClient
