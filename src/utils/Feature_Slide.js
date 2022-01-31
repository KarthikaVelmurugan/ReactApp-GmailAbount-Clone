import React from "react"

import "../styles/Container.css"
import { FaCheck, FaWifi, FaRegShareSquare } from "react-icons/fa"
const Feature_Slide = ({
	rootClassName,
	iconID,
	slideTitle,
	slideDescription
}) => {
	return (
		<div class={rootClassName}>
			<div class="container-4-icon">
				<div class="icon">
					{iconID == 1 ? (
						<FaCheck />
					) : iconID == 2 ? (
						<FaWifi />
					) : (
						<FaRegShareSquare />
					)}
				</div>
			</div>
			<h1 class="container-4-header">{slideTitle}</h1>
			<h4 class="container-4-description">{slideDescription}</h4>
		</div>
	)
}

export default Feature_Slide
