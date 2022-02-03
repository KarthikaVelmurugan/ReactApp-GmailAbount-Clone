import React from "react"
import "../../styles/Container.css"
import "../../styles/Buttons.css"
import Button from "../../utils/Button"
import Image from "../../utils/Image"
export default function LandingScreen() {
	return (
		<div class="body-container-7">
			<div class="icons-list">
				<Image
					source="https://www.google.com/gmail/about/static-2.0/images/logo-gmail.png?fingerprint=c2eaf4aae389c3f885e97081bb197b97"
					title="Gmail icon"
					alt="Gmail icon"
				/>
			</div>
			<div class="details">
				<h1>Show the world how it’s done.</h1>
				<h3>Get started with a more powerful Gmail.</h3>
			</div>

			<div class="btns">
				<Button className="action-btn filled-btn">Create an account</Button>
				<Button className="action-btn plain-btn">For work</Button>
			</div>
		</div>
	)
}
