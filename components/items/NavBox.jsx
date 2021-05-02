import styles from '../../styles/components/items/NavBox.module.css'

export const NavBox = () => {
	return (
	<>
		<div className={styles.navBox}>
			<ul>
				<li><a href='Internatonal'>International</a></li>
				<li><a href='diary'>Diary</a></li>
				<li><a href='opinion'>Opinion</a></li>
				<li><a href='learn'>Learn</a></li>
			</ul>
		</div>
	</>
	)
}