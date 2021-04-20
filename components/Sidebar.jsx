import React, { useState } from 'react'
import styles from '../styles/components/sidebar.module.css'

export const Sidebar = () => {
	const [sbIsOpen, sbSetIsOpen] = useState(false)

	return(
	<>
		<sidebar className={styles.sidebar}>
			<div className={styles.sidebarBrand}>
				<a onClick={() => sbSetIsOpen(false)}>
					<img className={styles.sidebarXClose} src='/components/navbar/x.svg' />
				</a>
				<div className={styles.sBContainer}>
					<a href='##'>
						<img className={styles.sidebarBrandImg} alt='' src='../components/navbar/brand.png'/>
						<img className={styles.sidebarBrandWord} alt='' src='../components/navbar/brand-word.png'/>
					</a>
				</div>
			</div>
		</sidebar>
	</>
	)
}
