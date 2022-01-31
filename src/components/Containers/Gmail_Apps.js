import React from "react"
import "../../styles/Container.css"
import ObButton from "../../utils/ObButton"
import Google_Icon from "../../utils/Google_Icon"
export default function Gmail_Apps() {
	return (
		<div class="body-container-5">
			<div class="icons-list">
				{/* Reuse the Google Apps */}
				<Google_Icon
					source="https://www.google.com/gmail/about/static-2.0/images/logo-gmail.png?fingerprint=c2eaf4aae389c3f885e97081bb197b97"
					alt="Gmail Icon"
					title="Gmail Icon"
				></Google_Icon>

				<Google_Icon
					source="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/2048px-Google_Calendar_icon_%282020%29.svg.png"
					alt="Google Calendar Icon"
					title="Google Calendar Icon"
				></Google_Icon>

				<Google_Icon
					source="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png"
					alt="Google Drive Icon"
					title="Google Drive Icon"
				></Google_Icon>

				<Google_Icon
					source="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Google_Docs_icon_%282020%29.svg/1200px-Google_Docs_icon_%282020%29.svg.png"
					alt="Google Docs Icon"
					title="Google Docs Icon"
				></Google_Icon>

				<Google_Icon
					source="https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-96dp/logo_meet_2020q4_color_2x_web_96dp.png"
					alt="Gmeet Icon"
					title="Gmeet Icon"
				></Google_Icon>
				{/* <img
          class="logo"
          src="https://www.google.com/gmail/about/static-2.0/images/logo-gmail.png?fingerprint=c2eaf4aae389c3f885e97081bb197b97"
          alt="Gmail icon"
        />

        <img
          class="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/2048px-Google_Calendar_icon_%282020%29.svg.png"
          alt="Gmail icon"
        />
        <img
          class="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png"
          alt="Gmail icon"
        />
        <img
          class="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Google_Docs_icon_%282020%29.svg/1200px-Google_Docs_icon_%282020%29.svg.png"
          alt="Gmail icon"
        />
        <img
          class="logo"
          src="https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-96dp/logo_meet_2020q4_color_2x_web_96dp.png"
          alt="Gmail icon"
        /> */}
			</div>
			<div class="container-5-content">
				<h1 class="cotainer-5-heading">Gmail is now part of Google Workspace</h1>
				<h3 class="container-5-sub-title">
					Collaborate faster, from any device, anytime, all in one place.
				</h3>
				<h5 class="container-5-description">
					Google Workspace is a set of productivity and collaboration tools that
					helps individuals, teams, and businesses stay on top of everything. It is a
					flexible, innovative solution that includes all your favorite apps like
					Gmail, Calendar, Drive, Docs, Meet, and more.
				</h5>
				<ObButton className="action-btn plain-btn">Learn more</ObButton>
				{/* <button class='action-btn plain-btn'>Learn more</button> */}
			</div>
		</div>
	)
}
