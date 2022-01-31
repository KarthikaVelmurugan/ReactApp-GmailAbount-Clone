import React from "react"
import "../../styles/Container.css"
import { FaCheck, FaWifi, FaRegShareSquare } from "react-icons/fa"
import Feature_Slide from "../../utils/Feature_Slide"

export default function Feature_slide() {
	return (
		<div class="body-container-4">
			{/* Reuse the Feature Slide Components */}

			<Feature_Slide
				rootClassName="container-left-4"
				iconID="1"
				slideTitle="Work with other tools"
				slideDescription=" Gmail works great with desktop clients like Microsoft Outlook, Apple Mail and Mozilla Thunderbird,
          including contact and event sync."
			></Feature_Slide>

			{/* <div class="container-left-4">
      <div class='container-4-icon'>
     
           <div class="icon">
           <FaCheck /> 

          </div>  
      </div>
      <h1 class="container-4-header">
          Work with other tools
      </h1>
      <h4 class="container-4-description">
          Gmail works great with desktop clients like Microsoft Outlook, Apple Mail and Mozilla Thunderbird,
          including contact and event sync.
      </h4>
  </div> */}

			<Feature_Slide
				rootClassName="container-middle-4"
				iconID="2"
				slideTitle="Stay productive, even offline"
				slideDescription="Gmail offline lets you read, reply, delete, and search your Gmail messages when you’re not connected
        to the internet."
			></Feature_Slide>

			{/* <div class="container-middle-4">
      <div class='container-4-icon'>
      <div class="icon">
           <FaWifi /> 

          </div>

      </div>
      <h1 class="container-4-header">
          Stay productive, even offline
      </h1>
      <h4 class="container-4-description">
          Gmail offline lets you read, reply, delete, and search your Gmail messages when you’re not connected
          to the internet.
      </h4>
  </div> */}

			<Feature_Slide
				rootClassName="container-right-4"
				iconID="3"
				slideTitle="Experience Gmail on any device"
				slideDescription="Enjoy the ease and simplicity of Gmail, wherever you are."
			></Feature_Slide>
			{/* <div class="container-right-4">
        <div class="container-4-icon">
          <div class="icon">
            <FaRegShareSquare />
          </div>
        </div>
        <h1 class="container-4-header">Experience Gmail on any device</h1>
        <h4 class="container-4-description">
          Enjoy the ease and simplicity of Gmail, wherever you are.
        </h4>
      </div> */}
		</div>
	)
}
