import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import one from "@/assets/1.png";
import two from "@/assets/2.png";
import three from "@/assets/3.png";

const PlatformCard = ({ name, icon, index, isExpanded }: any) => {
	const getCardStyle = () => {
		const baseRotation = 20;
		const initialRotation = (index - 1) * baseRotation;
		const marginTop = index === 1 ? 0 : -40;

		// Responsive spacing for different screen sizes
		const expandedSpacing = {
			lg: 440,
			md: 260,
			sm: 220,
		};

		const stackedMarginLeft = index === 1 ? 0 : index === 0 ? -190 : 190;

		// Adjust spacing based on screen size
		const getSpacing = () => {
			if (window.innerWidth >= 1024) return expandedSpacing.lg;
			if (window.innerWidth >= 768) return expandedSpacing.md;
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

	return (
		<div
			className='absolute transition-all duration-500 ease-out p-[1px] bg-gradient-to-r from-[#4467FF] to-[#7241FF] rounded-2xl'
			style={getCardStyle()}>
			<div
				className='relative bg-black backdrop-blur-sm rounded-2xl p-4 border border-blue-500/20
          lg:w-[430px] lg:h-[465px] 
          md:w-[235px] md:h-[320px]
          sm:w-[200px] sm:h-[280px]'>
				<div className='border-4 border-gray-800 p-5 rounded-2xl'>
					<div className='relative mb-8'>
						<Image
							src={icon}
							alt={name}
							className='mx-auto rounded-2xl object-cover
                lg:w-[174px] lg:h-[177px]
                md:w-[95px] md:h-[95px]
                sm:w-[80px] sm:h-[80px]'
						/>
						<div className='absolute inset-0 rounded-2xl shadow-inner' />
					</div>

					<div className='flex items-center justify-between mb-4'>
						<span
							className='text-blue-400 underline cursor-pointer
              lg:text-[28px] md:text-[15.6px] sm:text-sm'>
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
	const [isExpanded, setIsExpanded] = useState(false);

	const platforms = [
		{ name: "Cetus", icon: one },
		{ name: "CoinMarketCap", icon: two },
		{ name: "CoinGecko", icon: three },
	];

	return (
		<div className='bg-[#0a0a1a] w-full'>
			{/* Desktop and Tablet View */}
			<div className='hidden md:flex items-center justify-center'>
				<div
					className='relative  h-[600px] w-full max-w-[1800px] flex items-center justify-center'
					onMouseEnter={() => setIsExpanded(true)}
					onMouseLeave={() => setIsExpanded(false)}>
					<div className='absolute h-full w-full flex items-center justify-center'>
						<div className='relative lg:h-[500px] lg:w-[30%] md:w-[235px] md:h-[253px]'>
							{platforms.map((platform, index) => (
								<PlatformCard
									key={platform.name}
									{...platform}
									index={index}
									isExpanded={isExpanded}
								/>
							))}
						</div>
					</div>
					<div className='absolute inset-0 bg-blue-500/15 rounded-full blur-[100px] z-40' />
				</div>
			</div>

			{/* Mobile View with Horizontal Scroll */}
			<div className='md:hidden w-full overflow-x-auto px-4 py-8'>
				<div className='flex gap-4 min-w-max'>
					{platforms.map((platform, index) => (
						<div
							key={platform.name}
							className='w-[200px] p-[1px] bg-gradient-to-r from-[#4467FF] to-[#7241FF] rounded-2xl'>
							{/* Mobile card content - similar to PlatformCard but simplified */}
							<div className='bg-black rounded-2xl p-4 h-[280px]'>
								{/* <PlatformCard
									key={platform.name}
									{...platform}
									index={index}
									isExpanded={isExpanded}
								/> */}
							</div>
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
