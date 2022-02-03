import React from "react"
import "../styles/Header.css"
import "../styles/Buttons.css"

import Button from "../utils/Button"

export default function Header() {
	return (
		<div class="header-section">
			<div class="header-logo-container">
				<img
					class="logo"
					src="https://www.google.com/gmail/about/static-2.0/images/logo-gmail.png?fingerprint=c2eaf4aae389c3f885e97081bb197b97"
					alt="Gmail icon"
				/>
				<div class="title">Gmail</div>
			</div>
			<div class="header-action-buttons-container">
				{/* Button Resuablitiy Code  */}
				<Button className="action-btn plain-btn">For Work</Button>
				<Button className="action-btn outline-btn">Sign in</Button>
				<Button className="action-btn filled-btn">Create an account</Button>
				{/* <button class="action-btn plain-btn">For work</button> */}
				{/* <button class="action-btn outline-btn">Sign in</button>
        <button class="action-btn filled-btn">Create an account</button> */}
			</div>
		</div>
	)
}
