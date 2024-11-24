import React from "react";
import revenue from '@/assets/revenue.png'
import mechanism from '@/assets/mechanism.png'
import Image from "next/image";
const InfoCard = ({ title, content, children }: any) => (
	<div className='bg-black rounded-3xl md:px-[46px] px-4 py-[42px] border border-[#4467FF] shadow shadow-xl border-r-0 min-w-[320px] min-h-[600px] md:min-h-[300px]'>
		<h2 className='text-[24px] lg:text-[38px]  font-medium text-white mb-6'>
			{title}
		</h2>
		<div className='text-white opacity-80 text-[16px] lg:text-[20px] font-light leading-[139%] mb-5'>
			{content}
		</div>
		{children}
	</div>
);

const TokenomicsInfo = () => {
	return (
		<div className='bg-[#0a0a1a] min-h-screen md:p-8 pl-8 pr-4 w-full overflow-x-auto '>
			<div className='md:max-w-7xl w-full mx-auto  gap-10 flex w-full overflow-x-auto  md:grid md:grid-cols-1 lg:grid-cols-2 '>
				{/* Revenue Sharing Card */}
				<div className=" ">
					<InfoCard
						title='Revenue Sharing'
						content={
							<>
								<p className='mb-4'>
									Artfi has implemented a deflationary model,
									dedicating 30% of its revenue to buy back
									and burn tokens, thus increasing value for
									token holders.
								</p>
								<p className='mb-4'>
									Each part of the Artfi ecosystem has its own
									revenue stream, and our revenue share,
									buyback, and burn mechanism will be based on
									the total revenue generated by the entire
									Artfi Ecosystem.
								</p>
								<p>
									As the Artfi ecosystem expands, early
									adopters and investors stand to benefit from
									the growing value of it
								</p>
							</>
						}>
						<div className='flex justify-center'>
							<div className=' flex items-center justify-center'>
								<Image
									src={revenue}
									alt='revenue'
									className='lg:w-[360px] w-[211px] h-[135px] lg:h-[230px] mx-auto'
								/>
							</div>
						</div>
					</InfoCard>
				</div>

				{/* Mechanism Card */}
				<div className=" ">
					<InfoCard
						title='Mechanism'
						content={
							<p>
								At the heart of Artfi&apos;s approach is our
								commitment to a deflationary mechanism, where
								every dollar of revenue is used to buy back
								$ARTFI tokens. This strategy not only
								strengthens token value but also solidifies
								Artfi&apos;s position as a pioneering platform
								in the RWA space. By keeping our revenue-sharing
								activities on-chain, we offer full transparency,
								ensuring that every sale, revenue allocation,
								and token buyback is verifiable by our community
							</p>
						}>
						<div className='flex justify-center items-baseline md:mt-16'>
							<div className=' flex items-end justify-center'>
								{/* Replace with your actual icon/illustration */}
								<Image
									src={mechanism}
									alt='mechanism'
									className='lg:h-[212px] lg:w-[520px] md:h-[124px] md:w-[305px]'
								/>
							</div>
						</div>
					</InfoCard>
				</div>

				{/* Vision & Utility Card - Full Width */}
				<div className='lg:col-span-2 '>
					<InfoCard
						title='Vision & Utility'
						content='$ARTFI powers governance, offers staking rewards, enables seamless transactions within the ecosystem, and facilitates art purchases through our single and fractional ownership, marketplace fees, subscription-based payments, and all other payments across the ecosystem'
					/>
				</div>
			</div>
		</div>
	);
};

export default TokenomicsInfo;





//grid md:grid-cols-1 lg:grid-cols-2