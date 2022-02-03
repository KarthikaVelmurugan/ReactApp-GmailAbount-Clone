import React from "react"
import "../../styles/Buttons.css"
import "../../styles/Container.css"
import Button from "../../utils/Button"
export default function LandingScreenPage() {
	return (
		<div class="body-container-1">
			<div class="left-container-1">
				<div class="heading">Secure, smart, and easy to use email</div>
				<div class="description">
					Get more done with Gmail. Now integrated with Google Chat, Google Meet, and
					more, all in one place.
				</div>
				<div class="buttons">
					<Button className="action-btn filled-btn">Create an account</Button>
					<Button className="action-btn plain-btn">For work</Button>
					{/* <button class="action-btn filled-btn">Create an account</button>
          <button class="action-btn plain-btn">For work</button> */}
				</div>
			</div>
			<div class="right-container-1">
				<img
					class="img-icon"
					src="https://lh3.googleusercontent.com/wu38duO7lcEY0BCo6qTkwcrOx5oFwFNLHRYud6POTb-URmZ2jlXHLq5PAUFGCUcVew7zCK-C4aNKuMSF-SQxU-5Vu4fjM_E2WWp-S_Y=rw-e365-w2880"
					alt="Gmail inbox screen with enlarged function icons"
					title="Gmail inbox screen with enlarged function icons"
				/>
			</div>
		</div>
	)
}
