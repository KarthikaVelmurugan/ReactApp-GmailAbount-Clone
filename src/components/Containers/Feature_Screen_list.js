import React from "react"
import "../../styles/Container.css"
import cart5 from "../../images/cart-5.png"
import Feature_Cart from "../../utils/Feature_Cart"
export default function Feature_Screen_list() {
	return (
		<div class="body-container-3">
			<div class="left-container-3">
				<img
					class="img-icon3"
					id="img-icon-3-id"
					src={cart5}
					alt="image icon"
					title="Gamil feature Images"
				/>
			</div>
			<div class="right-container-3">
				<div class="heading-container3">Get more done with Gmail</div>
				<li>
					<Feature_Cart
						className="feature-cart5"
						index="5"
						noticeTitle="Stay connected and get organized"
						noticeDescription=" Start a Chat,jump into a video call with Meet,or collaborate in
            a Doc,all right from Gmail."
					></Feature_Cart>
					{/* <div class="notice-cart" onclick="changeImage1(5)">
            <div class="divider">
              <div class="divider-filler"></div>
            </div>
            <div class="notice-info">
              <div class="notice-title">Stay connected and get organized</div>
              <div class="notice-description">
                Start a Chat,jump into a video call with Meet,or collaborate in
                a Doc,all right from Gmail.
              </div>
            </div>
          </div> */}
				</li>
				<li>
					<Feature_Cart
						className="feature-cart6"
						index="6"
						noticeTitle="Get more done faster"
						noticeDescription="Write emails and messages faster with features like Smart
            Compose to spend more time doing what you love."
					></Feature_Cart>
					{/* <div class="notice-cart" onclick="changeImage1(6)">
            <div class="divider">
              <div class="divider-filler"></div>
            </div>
            <div class="notice-info">
              <div class="notice-title">Get more done faster</div>
              <div class="notice-description">
                Write emails and messages faster with features like Smart
                Compose to spend more time doing what you love.
              </div>
            </div>
          </div> */}
				</li>
				<li>
					<Feature_Cart
						className="feature-cart7"
						index="7"
						noticeTitle="Never forget to reply"
						noticeDescription="Gentle nudges help you stay on top of everything."
					></Feature_Cart>
					{/* <div class="notice-cart" onclick="changeImage1(7)">
            <div class="divider">
              <div class="divider-filler"></div>
            </div>
            <div class="notice-info">
              <div class="notice-title">Never forget to reply</div>
              <div class="notice-description">
                Gentle nudges help you stay on top of everything.
              </div>
            </div>
          </div> */}
				</li>
			</div>
		</div>
	)
}
