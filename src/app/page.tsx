'use client'
import TokenAbout from "@/components/Hero/About";
import Cards from "@/components/Hero/Cards";
import TokenDashboard from "@/components/Hero/Hero";
import TokenomicsInfo from "@/components/Hero/Info";
import SocialIcons from "@/components/Hero/SocialIcons";
export default function Home() {


	return (
		<div className=''>
			<TokenDashboard />
			<TokenAbout />
			<Cards />
			<TokenomicsInfo/>
			<SocialIcons/>
		</div>
	);
}
