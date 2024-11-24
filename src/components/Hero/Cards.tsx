"use client";
import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import one from "@/assets/1.png";
import two from "@/assets/2.png";
import three from "@/assets/3.png";

const PlatformCard = ({
	name,
	icon,
	index,
	isExpanded,
	screenWidth,
	link,
}: any) => {
	const getCardStyle = () => {
		const baseRotation = 20;
		const initialRotation = (index - 1) * baseRotation;
		const marginTop = index === 1 ? 0 : -40;

		const expandedSpacing = {
			lg: 440,
			md: 260,
			sm: 220,
		};

		const stackedMarginLeft = index === 1 ? 0 : index === 0 ? -190 : 190;

		const getSpacing = () => {
			if (screenWidth >= 1024) return expandedSpacing.lg;
			if (screenWidth >= 768) return expandedSpacing.md;
			return expandedSpacing.sm;
		};

		const spacing = getSpacing();
		const totalWidth = spacing * 2;
		const startOffset = -totalWidth / 2;

		if (!isExpanded) {
			return {
				transform: `rotate(${initialRotation}deg)`,
				zIndex: index === 1 ? 3 : 1,
				marginTop: `${marginTop}px`,
				marginLeft: `${stackedMarginLeft}px`,
			};
		}

		return {
			transform: `translateX(${
				startOffset + index * spacing
			}px) rotate(0deg)`,
			zIndex: 3,
			marginTop: `${marginTop}px`,
			marginLeft: 0,
		};
	};


      const handleCardClick = (e: React.MouseEvent) => {
			e.preventDefault();
			e.stopPropagation();
			window.open(link, "_blank", "noopener,noreferrer");
		};

	// Mobile card component
	// Updated Mobile Card component to match the design
	const MobileCard = () => (
		<div className='bg-[#0A0A1A] rounded-2xl overflow-hidden h-full'>
			<a
				href={link}
				target='_blank'
				rel='noopener noreferrer'
				className='relative flex flex-col h-full p-6'
				onClick={(e) => e.stopPropagation()}>
				{" "}
				<div className='relative flex flex-col h-full p-6'>
					{/* Icon container */}
					<div className='relative mb-auto'>
						<Image
							src={icon}
							alt={name}
							className='mx-auto rounded-2xl object-cover w-[120px] h-[120px]'
						/>
					</div>

					{/* Bottom section with View link and arrow */}
					<div className='mt-auto'>
						<div className='flex items-center justify-between mb-4'>
							<span className='text-[#627FFF] text-lg underline cursor-pointer'>
								View
							</span>
							<div className='bg-[#627FFF] bg-opacity-20 p-2 rounded-full'>
								<ArrowUpRight className='text-[#627FFF] w-5 h-5' />
							</div>
						</div>

						<h3 className='text-2xl font-bold text-white mt-2'>
							{name}
						</h3>
					</div>
				</div>
			</a>
		</div>
	);

	return screenWidth < 768 ? (
		<MobileCard />
	) : (
		<div
			className='absolute transition-all duration-500 ease-out p-[1px] bg-gradient-to-r from-[#4467FF] to-[#7241FF] rounded-2xl cursor-pointer hover:scale-[1.02] group z-50'
			style={getCardStyle()}
			onClick={handleCardClick}
			role='button'
			tabIndex={0}>
			<div className='relative bg-black backdrop-blur-sm rounded-2xl p-4 border border-blue-500/20 lg:w-[430px] lg:h-[465px] md:w-[235px] md:h-[320px] sm:w-[200px] sm:h-[280px] group-hover:bg-black/90 transition-colors'>
				<div className='border-4 border-gray-800 p-5 rounded-2xl'>
					<div className='relative mb-8'>
						<Image
							src={icon}
							alt={name}
							className='mx-auto rounded-2xl object-cover lg:w-[174px] lg:h-[177px] md:w-[95px] md:h-[95px] sm:w-[80px] sm:h-[80px]'
						/>
						<div className='absolute inset-0 rounded-2xl shadow-inner' />
					</div>
					<div className='flex items-center justify-between mb-4'>
						<span className='text-blue-400 underline cursor-pointer lg:text-[28px] md:text-[15.6px] sm:text-sm'>
							View
						</span>
						<div className='bg-blue-500/20 p-1.5 rounded-full'>
							<ArrowUpRight size={16} className='text-blue-400' />
						</div>
					</div>
				</div>

				<h3
					className='font-bold lg:text-[29px] md:text-[15.6px] sm:text-sm lg:mt-10 mt-3'
					style={{
						background:
							"radial-gradient(70.71% 70.71% at 50% 50%, #FFF 30%, rgba(255, 255, 255, 0.50) 84.77%)",
						backgroundClip: "text",
						WebkitBackgroundClip: "text",
						WebkitTextFillColor: "transparent",
					}}>
					{name}
				</h3>
			</div>
		</div>
	);
};

const Cards = () => {
	// Initialize with null to indicate we don't know the screen width yet
	const [screenWidth, setScreenWidth] = useState<number | null>(null);
	const [isExpanded, setIsExpanded] = useState(false);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		// Mark that we're client-side
		setIsClient(true);

		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};

		// Set initial width
		handleResize();

		// Add event listener
		window.addEventListener("resize", handleResize);

		// Cleanup
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Don't render anything until we know we're client-side and have a screen width
	if (!isClient || screenWidth === null) {
		return null;
	}

	const platforms = [
		{
			name: "Cetus",
			icon: one,
			link: "https://app.cetus.zone/new-position-detail/?collect=undefined&&&token=undefined&address=0x5fc8de3d91652c61771b34e4aa7dce9d8fd8d837e06b465ef2df9b1d7741aa8b&pos=0x011e8b402c0a57e71eeb1f57142e04fac761cf5d54bdd01b0fe1feba6293f91b",
		},
		{
			name: "CoinMarketCap",
			icon: two,
			link: "https://coinmarketcap.com/currencies/artfi/",
		},
		{
			name: "CoinGecko",
			icon: three,
			link: "https://www.coingecko.com/en/coins/artfi",
		},
	];

	return (
		<div className='bg-[#0a0a1a] w-full'>
			{/* Desktop and Tablet View */}
			<div className='hidden md:flex items-center justify-center'>
				<div
					className='relative h-[600px] w-full max-w-[1800px] flex items-center justify-center'
					onMouseEnter={() => setIsExpanded(true)}
					onMouseLeave={() => setIsExpanded(false)}>
					<div className='absolute h-full w-full flex items-center justify-center pointer-events-auto'>
						<div className='relative lg:h-[500px] lg:w-[30%] md:w-[235px] md:h-[253px]'>
							{platforms.map((platform, index) => (
								<PlatformCard
									key={platform.name}
									{...platform}
									index={index}
									isExpanded={isExpanded}
									screenWidth={screenWidth}
								/>
							))}
						</div>
					</div>
					<div className='absolute inset-0 bg-blue-500/15 rounded-full blur-[100px] pointer-events-none' />
				</div>
			</div>

			{/* Mobile View with Horizontal Scroll */}
			<div className='md:hidden w-full overflow-x-auto scrollbar-hide'>
				<div className='flex gap-4 px-4 py-8 min-w-max'>
					{platforms.map((platform, index) => (
						<div
							key={platform.name}
							className='flex-none w-[340px] h-[340px] rounded-2xl bg-gradient-to-b from-[#627FFF] to-[#7241FF] p-[1px] shadow-[0_0_20px_rgba(98,127,255,0.2)]'>
							<PlatformCard
								{...platform}
								index={index}
								isExpanded={false}
								screenWidth={screenWidth}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Cards;












// import React, { useState } from "react";
// import { ArrowUpRight } from "lucide-react";
// import Image from "next/image";
// import one from "@/assets/1.png";
// import two from "@/assets/2.png";
// import three from "@/assets/3.png";

// const PlatformCard = ({ name, icon, index, isExpanded }: any) => {
// 	const getCardStyle = () => {
// 		const baseRotation = 20;
// 		const initialRotation = (index - 1) * baseRotation;
// 		const marginTop = index === 1 ? 0 : -40;
// 		// Space between expanded cards
// 		const expandedSpacing = 440;
// 		// Calculate stacked position
// 		const stackedMarginLeft = index === 1 ? 0 : index === 0 ? -190 : 190;
// 		// Calculate expanded position
// 		// Adjust the offset to center all cards
// 		const totalWidth = expandedSpacing * 2; // Total width of expanded layout
// 		const startOffset = -totalWidth / 2; // Starting point to center the cards

// 		if (!isExpanded) {
// 			return {
// 				transform: `rotate(${initialRotation}deg)`,
// 				zIndex: index === 1 ? 3 : 1,
// 				marginTop: `${marginTop}px`,
// 				marginLeft: `${stackedMarginLeft}px`,
// 			};
// 		}

// 		return {
// 			transform: `
//         translateX(${startOffset + index * expandedSpacing}px)
//         rotate(0deg)
//       `,
// 			zIndex: 3,
// 			marginTop: `${marginTop}px`,
// 			marginLeft: 0,
// 		};
// 	};

// 	return (
// 		<div
// 			className='absolute transition-all duration-500 ease-out p-[1px] bg-gradient-to-r from-[#4467FF] to-[#7241FF]  rounded-2xl '
// 			style={getCardStyle()}>
// 			<div className='relative  lg:w-[430px] lg:h-[465px] md:w-[235px]    bg-black backdrop-blur-sm rounded-2xl p-4  border border-blue-500/20'>
// 				{/* App Icon */}
// 				<div className='border-4 border-gray-800 p-5 rounded-2xl'>
// 					<div className='relative mb-8'>
// 						<Image
// 							src={icon}
// 							alt={name}
// 							className='lg:w-[174px] md:w-[95px] lg:h-[177px] md:h-[95px] rounded-2xl object-cover mx-auto'
// 						/>
// 						<div className='absolute inset-0 rounded-2xl shadow-inner' />
// 					</div>

// 					{/* View Link & Arrow */}
// 					<div className='flex items-center justify-between mb-4'>
// 						<span className='text-blue-400 lg:text-[28px] text-[15.6px] underline cursor-pointer'>
// 							View
// 						</span>
// 						<div className='bg-blue-500/20 p-1.5 rounded-full'>
// 							<ArrowUpRight size={16} className='text-blue-400' />
// 						</div>
// 					</div>
// 				</div>

// 				{/* Platform Name with Gradient */}
// 				<h3
// 					className='lg:text-[29px] text-[15.6px] font-bold lg:mt-10 mt-3 '
// 					style={{
// 						background:
// 							"radial-gradient(70.71% 70.71% at 50% 50%, #FFF 30%, rgba(255, 255, 255, 0.50) 84.77%)",
// 						backgroundClip: "text",
// 						WebkitBackgroundClip: "text",
// 						WebkitTextFillColor: "transparent",
// 					}}>
// 					{name}
// 				</h3>
// 			</div>
// 		</div>
// 	);
// };

// const Cards = () => {
// 	const [isExpanded, setIsExpanded] = useState(false);

// 	const platforms = [
// 		{ name: "Cetus", icon: one },
// 		{ name: "CoinMarketCap", icon: two },
// 		{ name: "CoinGecko", icon: three },
// 	];

// 	return (
// 		<div className='bg-[#0a0a1a]  w-full flex items-center justify-center '>
// 			<div
// 				className='relative h-[600px] w-[1800px] flex items-center justify-center'
// 				onMouseEnter={() => setIsExpanded(true)}
// 				onMouseLeave={() => setIsExpanded(false)}>
// 				<div className='absolute h-full w-full flex items-center justify-center'>
// 					<div className='relative lg:h-[500px] lg:w-[30%]  md:w-[235px] md:h-[253px]   '>
// 						{platforms.map((platform, index) => (
// 							<PlatformCard
// 								key={platform.name}
// 								{...platform}
// 								index={index}
// 								isExpanded={isExpanded}
// 							/>
// 						))}
// 					</div>
// 				</div>
// 				{/* Decorative glow effects */}
// 				<div className='absolute inset-0 bg-blue-500/15 rounded-full blur-[100px] z-40' />
// 			</div>
// 		</div>
// 	);
// };

// export default Cards;
