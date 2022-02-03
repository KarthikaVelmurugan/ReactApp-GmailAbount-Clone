import React from "react"
import "../../styles/Container.css"
import Button from "../../utils/Button"
import Image from "../../utils/Image"
export default function GmailApps() {
	const googelIcons = [
		{
			source:
				"https://www.google.com/gmail/about/static-2.0/images/logo-gmail.png?fingerprint=c2eaf4aae389c3f885e97081bb197b97",
			alt: "Gmail Icon",
			title: "Gmail Icon"
		},
		{
			source:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/2048px-Google_Calendar_icon_%282020%29.svg.png",
			alt: "Gmail Calendar Icon",
			title: "Gmail Calendar Icon"
		},
		{
			source:
				"https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png",
			alt: "Gmail Drive Icon",
			title: "Gmail Drive Icon"
		},
		{
			source:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Google_Docs_icon_%282020%29.svg/1200px-Google_Docs_icon_%282020%29.svg.png",
			alt: "Google Docs Icon",
			title: "Google Docs Icon"
		},
		{
			source:
				"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-96dp/logo_meet_2020q4_color_2x_web_96dp.png",
			alt: "Gmeet Icon",
			title: "Gmeet Icon"
		}
	]
	return (
		<div class="body-container-5">
			<div class="icons-list">
				{/* Reuse the Google Apps */}
				{googelIcons.map((icons) => (
					<Image source={icons.source} alt={icons.alt} title={icons.title}></Image>
				))}
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
				<Button className="action-btn plain-btn">Learn more</Button>
				{/* <button class='action-btn plain-btn'>Learn more</button> */}
			</div>
		</div>
	)
}
