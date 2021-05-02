import styles from '../../styles/components/items/SearchBox.module.css'

export const SearchBox = () => {

	return (
	<>
		<div className={styles.searchBox}>
			<form action="~">
				<input className={styles.searchBoxInput} type="text" name="search" placeholder="Search" />
				<button className={styles.searchBoxBotton}><img src='/components/navbar/search.svg' /></button>
			</form>
		</div>
	</>
	)
}