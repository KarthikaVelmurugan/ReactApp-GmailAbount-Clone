import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import LandingScreenPage from "./Containers/LandingScreenPage"
import FeatureScreen from "./Containers/FeatureScreen"
import FeatureScreenList from "./Containers/FeatureScreenList"
import FeatureSlidePage from "./Containers/FeatureSlidePage"
import GmailApps from "./Containers/GmailApps"
import FAQScreen from "./Containers/FAQScreen"
import LandingScreen from "./Containers/LandingScreen"
import FooterWiderImage from "./Containers/FooterWiderImage"

export default function Layout() {
	return (
		<div>
			<Header></Header>
			<LandingScreenPage></LandingScreenPage>
			<FeatureScreen></FeatureScreen>
			<FeatureScreenList></FeatureScreenList>
			<FeatureSlidePage></FeatureSlidePage>
			<GmailApps></GmailApps>
			<FAQScreen></FAQScreen>
			<LandingScreen></LandingScreen>
			<FooterWiderImage></FooterWiderImage>

			<Footer></Footer>
		</div>
	)
}
