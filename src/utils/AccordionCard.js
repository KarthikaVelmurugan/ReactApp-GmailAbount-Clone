import React from "react"
import Button from "./Button"
const AccordionCard = ({ title, description, isButtonExist }) => {
	return (
		<details>
			<summary class="list-line">
				<h1 class="q1">{title}</h1>
			</summary>

			<div class="summary-content">{description}</div>

			{isButtonExist == 1 ? (
				<Button className="action-btn plain-btn">Learn more</Button>
			) : (
				""
			)}
		</details>
	)
}
export default AccordionCard
