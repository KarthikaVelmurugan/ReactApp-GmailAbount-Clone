import React from "react"
const ObButton = ({ className, children }) => {
	return (
		<div>
			<button class={className}>{children}</button>
		</div>
	)
}

export default ObButton
