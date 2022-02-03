import React, { useState } from "react"
import "../../styles/Container.css"
import cart1 from "../../images/cart-1.png"
import cart2 from "../../images/cart-2.png"
import cart3 from "../../images/cart-3.png"
import cart4 from "../../images/cart-4.png"
import FeatureCart from "../../utils/FeatureCart"

export default function FeatureScreen() {
	const featureCart = [
		{
			className: "feature-cart1",
			noticeTitle: "We never use your Gmail content for any ads purposes",
			noticeDescription:
				" Gmail uses industry-leading encryption for all messages you receive and send. We never use your Gmail content to personalize ads."
		},
		{
			className: "feature-cart2",

			noticeTitle: "Gmail keeps over a billion people safe every day",
			noticeDescription:
				"Gmail blocks 99.9% of spam, malware, and dangerous links from ever reaching your inbox."
		},
		{
			className: "feature-cart3",
			noticeTitle: "The most advanced phishing protections available",
			noticeDescription:
				"When a suspecious email arrives that could be legitimate, Gmail lets you know,keeping you in control."
		},
		{
			className: "feature-cart4",
			noticeTitle: "Best-in-class controls over emails you send",
			noticeDescription:
				"Confidential Mode lets you set expirations and require receipients to verify by text.You can also remove options to forward,copy,download,and print."
		}
	]
	const image = [cart1, cart2, cart3, cart4]
	const [img, setImage] = useState(cart1)

	return (
		<div class="body-container-2">
			<section class="left-container-2">
				<div class="heading-container2">
					Email that's secure, private, and puts you in control.
				</div>
				{featureCart.map((card, index) => (
					<li>
						<FeatureCart
							className={card.className}
							noticeTitle={card.noticeTitle}
							noticeDescription={card.noticeDescription}
							setImage={setImage}
							image={image[index]}
						></FeatureCart>
					</li>
				))}
			</section>
			<section class="right-container-2">
				<img
					class="img-icon2 img-icon2-feature1"
					src={img}
					alt="image icon"
					title="Gamil feature Images"
				/>
			</section>
		</div>
	)
}
