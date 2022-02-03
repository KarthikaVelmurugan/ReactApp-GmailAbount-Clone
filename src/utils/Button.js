import React from "react"
const Button = ({ className, children }) => {
	return (
		<div>
			<button class={className}>{children}</button>
		</div>
	)
}

export default Button
