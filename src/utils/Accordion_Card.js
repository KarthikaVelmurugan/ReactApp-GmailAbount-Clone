import React from "react"
import ObButton from "./ObButton"
const Accordion_Card = ({ title, description, isButtonExist }) => {
	return (
		<details>
			<summary class="list-line">
				<h1 class="q1">{title}</h1>
			</summary>

			<div class="summary-content">{description}</div>

			{isButtonExist == 1 ? (
				<ObButton className="action-btn plain-btn">Learn more</ObButton>
			) : (
				""
			)}
		</details>
	)
}
export default Accordion_Card
