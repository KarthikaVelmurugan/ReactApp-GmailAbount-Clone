import React from "react"
import "../../styles/Container.css"
import Button from "../../utils/Button"
import AccordionCard from "../../utils/AccordionCard"

export default function FAQScreen() {
	const accordionCard = [
		{
			title: "How does Gmail keep my email communications secure and private?",
			description:
				" Gmail has always had strong security as a foundation. We work hard to protect you from spam, phishing, and malware, before they reach your inbox. Our AI-enhanced spam-filtering capabilities block nearly 10 million spam emails every minute.",
			isButtonExist: "0"
		},
		{
			title: "Do you use my email for ads?",
			description:
				"No. While you may see ads in your free Gmail account, your emails are private. Google does not scan or process Gmail content for advertising purposes.",
			isButtonExist: "0"
		},
		{
			title: "How can I keep my emails even more safe and secure?",
			description:
				"While Gmail’s features are secure enough for most users, some accounts may require additional layers of safety. Google's Advanced Protection Program safeguards users with high visibility and sensitive information, who are at risk of targeted online attacks.",
			isButtonExist: "1"
		},
		{
			title: "What if I want to use Gmail for work or my business?",
			description:
				"Gmail is part of Google Workspace where you can choose from different plans. In addition to what you love about Gmail, you get a custom email address (@yourcompany.com), unlimited group email addresses, 99.9% guaranteed uptime, twice the storage of personal Gmail, zero ads, 24/7 support, Google Workspace Sync for Microsoft Outlook, and more.",
			isButtonExist: "1"
		}
	]

	return (
		<div class="body-container-6">
			<div class="left-container-6">
				<h1 class="container-left-6-head">Find the answers you need</h1>
				<div class="cart">
					<h1>Need more help?</h1>
					<h4 class="desc">
						Browse tips and step-by-step guides made for both new users and power
						users.
					</h4>
					<Button className="action-btn outline-btn">Help Center</Button>
					{/* <button class='action-btn outline-btn'>Help Center</button> */}
				</div>
			</div>
			<div class="right-container-6">
				{accordionCard.map((card) => (
					<div>
						<li>
							<AccordionCard
								title={card.title}
								description={card.description}
								isButtonExist={card.isButtonExist}
							></AccordionCard>
						</li>
						<div class="divider-tab"></div>
						<h1></h1>
					</div>
				))}
			</div>
		</div>
	)
}
