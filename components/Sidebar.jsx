import React, { useState } from 'react'
import styles from '../styles/components/sidebar.module.css'

export const Sidebar = () => {

	return(
	<>
		<sidebar className={styles.sidebar + ' ' + styles.active}>
			<div className={styles.sidebarBrand}>
				<a href='##'>
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