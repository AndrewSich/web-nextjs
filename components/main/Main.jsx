import React from 'react'
import styles from '../../styles/components/main/main.module.css'

export const Main = () => {

	return (
	<>
		<main className={styles.main}>
			<h1 className={styles.word}>Welcome to Levxa.com</h1>
			<div className={styles.mainContent}>
				<div className={styles.mCL}>
					<div className={styles.latest}>
						<h2 className={styles.contentTitle}>Latest Content</h2>

						<div className={styles.latestOpening}>
							<li className={styles.preview}>
								<a href="#">
									<div className={styles.previewHead+" "+styles.lOHead}>
										<img src="../../wp-content/3.jpg" alt="" />
									</div>
									<div className={styles.previewBody+" "+styles.lOBody}>
										<h2>Block.one Settles for $27.5 Million in Eos ICO Class-Action in The Big Data Engine</h2>
										<p>In conversation with Venturebeat video game reporter Dean Takahashi. The dutch finance minister, wpke hoestra, said on friday than banning...</p>
										<div className={styles.pBDetail+" "+styles.lOBDetail}>
											<b>on Technology</b>
											<time>17 hour ago</time>
											<button className={styles.readBtn}>read</button>
										</div>
									</div>
								</a>
							</li>
						</div>

						<div className={styles.cC}>
							<ul className={styles.previewContainer}>

								<li className={styles.preview}>
									<a href="#">
										<div className={styles.previewHead}>
											<img src="../../wp-content/1.jpeg" alt="" />
										</div>
										<div className={styles.previewBody}>
											<h2>The Chronical of Basic by Literals of Chronium Optical</h2>
											<p>Bitcoin Is Cryptocurrency Based on C++ Programming Language Created By Satoshi Nakamoto On 2009 with Anouncement In StackOverFlow</p>
											<div className={styles.pBDetail}>
												<b>on Science</b>
												<time>12 minute ago</time>
												<button className={styles.readBtn}>read</button>
											</div>
										</div>
									</a>
								</li>

								<li className={styles.preview}>
									<a href="#">
										<div className={styles.previewHead}>
											<img src="../../wp-content/2.png" alt="" />
										</div>
										<div className={styles.previewBody}>
											<h2>Ethereum Moves Toward ETH 2.0 With 'Super Experimental' Testnet</h2>
											<p>Bitcoin Is Cryptocurrency Based on C++ Engine Language Created By Satoshi Nakamoto On 2009 with Anouncement In StackOverFlow</p>
											<div className={styles.pBDetail}>
												<b>on Anime</b>
												<time>2 minute ago</time>
												<button className={styles.readBtn}>read</button>
											</div>
										</div>
									</a>
								</li>

								<li className={styles.preview}>
									<a href="#">
										<div className={styles.previewHead}>
											<img src="../../wp-content/3.jpg" alt="" />
										</div>
										<div className={styles.previewBody}>
											<h2>Coinbase To Acquire Crypto Data Service SkewCoinbase To Acquires</h2>
											<p>Bitcoin Is Cryptocurrency Based on C++ Engine Language Created By Satoshi Nakamoto On 2009 with Anouncement In StackOverFlow</p>
											<div className={styles.pBDetail}>
												<b>on Games</b>
												<time> 17 minute ago</time>
												<button className={styles.readBtn}>read</button>
											</div>
										</div>
									</a>
								</li>

								<li className={styles.preview}>
									<a href="#">
										<div className={styles.previewHead}>
											<img src="../../wp-content/4.jpg" alt="" />
										</div>
										<div className={styles.previewBody}>
											<h2>The Chronical of Basic by Literals of Chronium Optical Base Engine</h2>
											<p>Bitcoin Is Cryptocurrency Based on C++ Engine Language Created By Satoshi Nakamoto On 2009 with Anouncement In StackOverFlow</p>
											<div className={styles.pBDetail}>
												<b>on Technology</b>
												<time>45 minute ago</time>
												<button className={styles.readBtn}>read</button>
											</div>
										</div>
									</a>
								</li>

								<li className={styles.preview}>
									<a href="#">
										<div className={styles.previewHead}>
											<img src="../../wp-content/5.jpg" alt="" />
										</div>
										<div className={styles.previewBody}>
											<h2>Ethereum moves Toward ETH 2.0 With 'Super Experiental' Testnet</h2>
											<p>Bitcoin Is Cryptocurrency Based on C++ Engine Language Created By Satoshi Nakamoto On 2009 with Anouncement In StackOverFlow</p>
											<div className={styles.pBDetail}>
												<b>on Science</b>
												<time>20 minute ago</time>
												<button className={styles.readBtn}>read</button>
											</div>
										</div>
									</a>
								</li>

							</ul>
						</div>
					</div>
				</div>
				<div className={styles.mCR}>
					<div className={styles.player}>
							<button className={styles.button+" "+styles.play}></button>
					</div>
					<h2 className={styles.contentTitle}>Top Content</h2>
				</div>
			</div>
		</main>
	</>
	)
}
