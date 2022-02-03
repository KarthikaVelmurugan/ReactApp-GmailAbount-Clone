import React from "react"
import "../styles/Footer.css"
const Image = ({ source, alt, title, className }) => {
	console.log(className)
	return (
		<img
			class={className ? className : "logo"}
			src={source}
			alt={alt}
			title={title}
		/>
	)
}
export default Image
