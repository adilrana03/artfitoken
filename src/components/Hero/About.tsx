import React from "react";
import about from "@/assets/image 68 (1).svg";
import Image from "next/image";
const TokenAbout = () => {
	return (
		<div className='bg-[#0a0a1a] lg:min-h-screen p-8'>
			<div className='max-w-6xl mx-auto'>
				<div className='bg-black shadow-xl shadow-blue-800  rounded-3xl p-12 relative overflow-hidden border order-blue-900/20 border-[#4467FF] border-x-0'>
					{/* Blue glow effect at the border */}
					<div className='absolute inset-0 border border-blue-500/20 rounded-3xl shadow-[0_0_30px_rgba(0,0,255,0.1)] borde ' />

					<div className='relative md:flex justify-between items-center gap-5'>
						<div className='lg:max-w-2xl '>
							<h1
								className='text-[24px] md:text-[32px] lg:text-[44px] xl:text-[44px] 2xl:text-[50px] font-bold text-white mb-8'
								style={{
									background:
										"radial-gradient(70.71% 70.71% at 50% 50%, #FFF 30%, rgba(255, 255, 255, 0.50) 84.77%)",
									backgroundClip: "text",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
								}}>
								About
							</h1>

							<div className='space-y-6 text-[16px] md:text-[18px] lg:text-[24px] xl:text-[24px] 2xl:text-[28px] '>
								<p className='text-gray-400 leading-relaxed'>
									$ARTFI, powers the Artfi ecosystem on the
									Sui blockchain. It facilitates transactions
									across the Ecosystem, including payments for
									Art Offerings, Trade, and Protocol
									Activities.
								</p>

								<p className='text-gray-400 leading-relaxed'>
									Additionally, It enables Governance
									Participation, Staking Rewards, and use of
									the Artfi Debit Card, a revolutionary
									integration that allows seamless
									transactions within the ecosystem.
								</p>
							</div>
						</div>

						{/* Token Icon */}
						<div className='relative flex justify-center items-center  my-auto'>
							<Image src={about} alt='image' className=' ' />
						</div>
					</div>

					{/* Divider */}
					<div className='mt-8 border-t border-gray-800' />
				</div>
			</div>
		</div>
	);
};

export default TokenAbout;
