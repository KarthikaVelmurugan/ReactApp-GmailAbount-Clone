import React from "react"
import "../../styles/Container.css"
import "../../styles/Buttons.css"
import ObButton from "../../utils/ObButton"
export default function Account_Screen() {
	return (
		<div class="body-container-7">
			<div class="icons-list">
				<img
					class="logo"
					src="https://www.google.com/gmail/about/static-2.0/images/logo-gmail.png?fingerprint=c2eaf4aae389c3f885e97081bb197b97"
					alt="Gmail icon"
				/>
			</div>
			<div class="details">
				<h1>Show the world how it’s done.</h1>
				<h3>Get started with a more powerful Gmail.</h3>
			</div>

			<div class="btns">
				<ObButton className="action-btn filled-btn">Create an account</ObButton>
				<ObButton className="action-btn plain-btn">For work</ObButton>
				{/* <button class='action-btn filled-btn'>Create an account</button>
      <button class='action-btn plain-btn'>For work</button> */}
			</div>
		</div>
	)
}
