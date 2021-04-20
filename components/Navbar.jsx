import React, { useState } from 'react'
import Modal from 'react-modal'
import styles from '../styles/components/navbar.module.css'
import { Sidebar } from '../components/Sidebar'

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [sbIsOpen, sbSetIsOpen] = useState(false)

	return (
		<div>
			<nav className={styles.navbar}>
				<div className={styles.navMenu}>
					<a onClick={() => sbIsOpen(true)}>
						<img alt='' src='/components/navbar/menu.svg' className={styles.navMenuImg} />
					</a>
				</div>

				<div className={styles.navBrand}>
					<a href='#'>
						<img alt='' src='/components/navbar/brand.png' className={styles.navBrandImg} />
						<img alt='' src='/components/navbar/brand-word.png' className={styles.navBrandWord} />
					</a>
				</div>

				<div className={styles.navSign}>
					<a onClick={() => setIsOpen(true)}>
						<img href='#Home' alt='' src='/components/navbar/log-in.svg' className={styles.navSignImg} />
					</a>

					<Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}
					className={styles.signModal}
					style={
						{
							overlay: {
								backgroundColor: 'rgba(0,0,0,0.5)'
							}
						}
					}>
						<div className={styles.signModalH}>
							<h2>SIGN IN</h2>
							<a onClick={() => setIsOpen(false)}>
								<img className={styles.xClose} src='/components/navbar/x.svg' />
							</a>
						</div>
						<img className={styles.signModalB} alt='' src='/components/navbar/comingsoon.png'/>
						<img className={styles.signModalF} alt='' src='/components/navbar/getapps.png'/>
						<p>Don't miss a beat with notifications.</p>
					</Modal>

				</div>
			</nav>

			<Sidebar isOpen={sbIsOpen} />
		</div>
	)
}
