import React from "react"

const FeatureCart = ({
	className,
	noticeTitle,
	noticeDescription,
	setImage,
	image
}) => {
	return (
		<div class={`notice-cart ${className}`} onMouseEnter={() => setImage(image)}>
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
export default FeatureCart
