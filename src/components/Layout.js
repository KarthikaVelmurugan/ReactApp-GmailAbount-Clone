import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Landing_Screen from "./Containers/Landing_Screen"
import Features_Screen from "./Containers/Features_Screen"
import Feature_Screen_list from "./Containers/Feature_Screen_list"
import Feature_slide from "./Containers/Feature_slide"
import Gmail_Apps from "./Containers/Gmail_Apps"
import FAQ_Screen from "./Containers/FAQ_Screen"
import Account_Screen from "./Containers/Account_Screen"
import Footer_Wider_Image from "./Containers/Footer_Wider_Image"

export default function Layout() {
	return (
		<div>
			<Header></Header>
			<Landing_Screen></Landing_Screen>
			<Features_Screen></Features_Screen>
			<Feature_Screen_list></Feature_Screen_list>
			<Feature_slide></Feature_slide>
			<Gmail_Apps></Gmail_Apps>
			<FAQ_Screen></FAQ_Screen>
			<Account_Screen></Account_Screen>
			<Footer_Wider_Image></Footer_Wider_Image>

			<Footer></Footer>
		</div>
	)
}
