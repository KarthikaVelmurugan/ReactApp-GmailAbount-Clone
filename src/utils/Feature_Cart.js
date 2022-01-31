import React from "react"

const Feature_Cart = ({ className, noticeTitle, noticeDescription }) => {
	return (
		<div class={`notice-cart ${className}`}>
			<div class="divider">
				<div class="divider-filler"></div>
			</div>
			<div class="notice-info">
				<div class="notice-title">{noticeTitle}</div>
				<div class="notice-description">{noticeDescription}</div>
			</div>
		</div>
	)
}
export default Feature_Cart
