import React from "react"
import "../../styles/Container.css"
import FeatureSlide from "../../utils/FeatureSlide"

export default function FeatureSlidePage() {
	const slide = [
		{
			rootClassName: "container-left-4",
			iconID: "1",
			slideTitle: "Work with other tools",
			slideDescription:
				" Gmail works great with desktop clients like Microsoft Outlook, Apple Mail and Mozilla Thunderbird, including contact and event sync."
		},
		{
			rootClassName: "container-middle-4",
			iconID: "2",
			slideTitle: "Stay productive, even offline",
			slideDescription:
				"Gmail offline lets you read, reply, delete, and search your Gmail messages when you’re not connected to the internet."
		},
		{
			rootClassName: "container-right-4",
			iconID: "3",
			slideTitle: "Experience Gmail on any device",
			slideDescription: "Enjoy the ease and simplicity of Gmail, wherever you are."
		}
	]
	return (
		<div class="body-container-4">
			{/* Reuse the Feature Slide Components */}
			{slide.map((card) => (
				<FeatureSlide
					rootClassName={card.rootClassName}
					iconID={card.iconID}
					slideTitle={card.slideTitle}
					slideDescription={card.slideDescription}
				></FeatureSlide>
			))}
		</div>
	)
}
