import React, { useState } from "react"
import "../../styles/Container.css"
import cart1 from "../../images/cart-1.png"
import cart2 from "../../images/cart-2.png"
import cart3 from "../../images/cart-3.png"
import cart4 from "../../images/cart-4.png"
import Feature_Cart from "../../utils/Feature_Cart"

export default function Features_Screen() {
	const [image, setImage] = cart1

	return (
		<div class="body-container-2">
			<section class="left-container-2">
				<div class="heading-container2">
					Email that's secure, private, and puts you in control.
				</div>
				<li>
					{/* Reuse the Feature Component */}

					<Feature_Cart
						className="feature-cart1"
						noticeTitle="We never use your Gmail content for any ads purposes"
						noticeDescription="  Gmail uses industry-leading encryption for all messages you
                receive and send. We never use your Gmail content to personalize
                ads."
					></Feature_Cart>
					{/* <div class="notice-cart feature-cart1" onclick="changeImage(1)">
            <div class="divider">
              <div class="divider-filler"></div>
            </div>
            <div class="notice-info">
              <div class="notice-title">
                We never use your Gmail content for any ads purposes
              </div>
              <div class="notice-description">
                Gmail uses industry-leading encryption for all messages you
                receive and send. We never use your Gmail content to personalize
                ads.
              </div>
            </div>
          </div> */}
				</li>

				<li>
					<Feature_Cart
						className="feature-cart2"
						noticeTitle="Gmail keeps over a billion people safe every day"
						noticeDescription="Gmail blocks 99.9% of spam, malware, and dangerous links from
            ever reaching your inbox."
					></Feature_Cart>
					{/* <div class="notice-cart feature-cart2" onclick="changeImage(2)">
            <div class="divider">
              <div class="divider-filler"></div>
            </div>

            <div class="notice-info">
              <div class="notice-title">
                Gmail keeps over a billion people safe every day
              </div>
              <div class="notice-description">
                Gmail blocks 99.9% of spam, malware, and dangerous links from
                ever reaching your inbox.
              </div>
            </div>
          </div> */}
				</li>

				<li>
					<Feature_Cart
						className="feature-cart3"
						noticeTitle="The most advanced phishing protections available"
						noticeDescription="When a suspecious email arrives that could be legitimate, Gmail
            lets you know,keeping you in control."

						// onclick={()=>changeImage(cart3)
					></Feature_Cart>
					{/* <div class="notice-cart feature-cart3" onclick="changeImage(3)">
            <div class="divider">
              <div class="divider-filler"></div>
            </div>
            <div class="notice-info">
              <div class="notice-title">
                The most advanced phishing protections available
              </div>
              <div class="notice-description">
                When a suspecious email arrives that could be legitimate, Gmail
                lets you know,keeping you in control.
              </div>
            </div>
          </div> */}
				</li>

				<li>
					<Feature_Cart
						className="feature-cart4"
						noticeTitle="Best-in-class controls over emails you send"
						noticeDescription="Confidential Mode lets you set expirations and require
            receipients to verify by text.You can also remove options to
            forward,copy,download,and print."
					></Feature_Cart>
					{/* <div class="notice-cart feature-cart4" onclick="changeImage(4)">
            <div class="divider">
              <div class="divider-filler"></div>
            </div>
            <div class="notice-info">
              <div class="notice-title">
                Best-in-class controls over emails you send
              </div>
              <div class="notice-description">
                Confidential Mode lets you set expirations and require
                receipients to verify by text.You can also remove options to
                forward,copy,download,and print.
              </div>
            </div>
          </div> */}
				</li>
			</section>
			<section class="right-container-2">
				<img
					class="img-icon2 img-icon2-feature1"
					src={cart1}
					alt="image icon"
					title="Gamil feature Images"
				/>
				<img
					class="img-icon2 img-icon2-feature2"
					src={cart2}
					alt="image icon"
					title="Gamil feature Images"
				/>
				<img
					class="img-icon2 img-icon2-feature3"
					src={cart3}
					alt="image icon"
					title="Gamil feature Images"
				/>
				<img
					class="img-icon2 img-icon2-feature4"
					src={cart4}
					alt="image icon"
					title="Gamil feature Images"
				/>
			</section>
		</div>
	)
}
