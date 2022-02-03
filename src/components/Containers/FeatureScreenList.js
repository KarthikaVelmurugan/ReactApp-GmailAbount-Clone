import React, { useState } from "react"
import "../../styles/Container.css"
import cart5 from "../../images/cart-5.png"
import cart6 from "../../images/cart-6.png"
import cart7 from "../../images/cart-7.png"
import FeatureCart from "../../utils/FeatureCart"
export default function FeatureScreenList() {
	const featureCart = [
		{
			className: "feature-cart5",
			index: "5",
			noticeTitle: "Stay connected and get organized",
			noticeDescription:
				"Start a Chat,jump into a video call with Meet,or collaborate in a Doc,all right from Gmail."
		},
		{
			className: "feature-cart6",
			index: "6",
			noticeTitle: "Get more done faster",
			noticeDescription:
				"Write emails and messages faster with features like Smart Compose to spend more time doing what you love."
		},
		{
			className: "feature-cart7",
			index: "7",
			noticeTitle: "Never forget to reply",
			noticeDescription: "Gentle nudges help you stay on top of everything."
		}
	]
	const image = [cart5, cart6, cart7]
	const [img, setImage] = useState(cart5)
	return (
		<div class="body-container-3">
			<div class="left-container-3">
				<img
					class="img-icon3"
					id="img-icon-3-id"
					src={img}
					alt="image icon"
					title="Gamil feature Images"
				/>
			</div>
			<div class="right-container-3">
				<div class="heading-container3">Get more done with Gmail</div>

				{featureCart.map((card, index) => (
					<li>
						<FeatureCart
							className={card.className}
							index={card.index}
							noticeTitle={card.noticeTitle}
							noticeDescription={card.noticeDescription}
							setImage={setImage}
							image={image[index]}
						></FeatureCart>
					</li>
				))}
			</div>
		</div>
	)
}
