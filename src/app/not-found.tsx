import styles from './not-found.module.css'

export default function Custom404({
	message = '',
}: {
	message: string
}) {
	return (
		<div>
			<div className={styles['not-found']}>404</div>
			{message && (
				<p className={styles['error-message']}>{message}</p>
			)}
		</div>
	)
}
