import React from "react"
import "../styles/Footer.css"

// Footer section
export default function Footer() {
	return (
		<div class="footer-section">
			<div class="footer-nav-items">
				<img
					class="google-img"
					src="https://gstatic.com/images/branding/googlelogo/svg/googlelogo_dark54_clr_84x28px.svg"
					alt="google-footer-img"
				/>
				<div>Privacy</div>
				<div>Terms</div>
				<div>About Google</div>

				<div>Google Products</div>
				<div>Our policy</div>
			</div>

			<div class="footer-help-buttons">
				<div>help</div>
				<div>English(India)</div>
			</div>
		</div>
	)
}
