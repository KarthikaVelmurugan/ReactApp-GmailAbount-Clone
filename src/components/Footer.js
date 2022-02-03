import React from "react"
import "../styles/Footer.css"
import Image from "../utils/Image"
// Footer section
export default function Footer() {
	const footerContents = [
		"Privacy",
		"Terms",
		"About Google",
		"Google Products",
		"Our Policy"
	]
	return (
		<div class="footer-section">
			<div class="footer-nav-items">
				<Image
					source="https://gstatic.com/images/branding/googlelogo/svg/googlelogo_dark54_clr_84x28px.svg"
					alt="google-footer-img"
					title="google-footer-img"
					className="google-img"
				></Image>

				{footerContents.map((content, index) => (
					<div>{content}</div>
				))}
			</div>

			<div class="footer-help-buttons">
				<div>help</div>
				<div>English(India)</div>
			</div>
		</div>
	)
}
