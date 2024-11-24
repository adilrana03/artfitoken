"use client";
import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Contact2 } from "lucide-react";
import Image from "next/image";
import p from "../../assets/payments-column (2).svg";
import footer from "../../assets/investing-floor 1.svg";
import a from "../../assets/ArtinalsNewLogo.svg";
import Link from "next/link";

const slides = [
	{
		title: "What it is?",
		content:
			" A revolutionary platform designed to empower creators and developers within the Sui Ecosystem. Our no-code approach simplifies the management of digital assets, enabling you to leverage the full potential of the ART20 token standard with ease.   ",
		content2:
			"Artinals Protocol seamlessly integrates with the Sui blockchain, offering unparalleled capabilities for managing both fungible and non-fungible tokens under a single contract.",
		type: "single",
	},

	{
		title: "Royalties",
		content:
			"Easily set and manage royalty percentages, with options for freezing to ensure security.",
		type: "double",
	},
	{
		title: "Creator specific controls",
		content:
			"Grant creators full control over their digital assets, from metadata management to compliance authority transfers.",
		type: "double",
	},
	{
		title: "Compliance Controls",
		content:
			"Easily set and manage royalty percentages, with options for freezing to ensure security.",
		type: "double",
	},
	{
		title: "Batch Transactions (PTBs)",
		content:
			"Grant creators full control over their digital assets, from metadata management to compliance authority transfers.",
		type: "double",
	},
	{
		title: "Advanced Features",
		content:
			"Explore advanced features like metadata management and compliance authority transfers.",
		type: "double",
	},
	{
		title: "Security Measures",
		content:
			"Implement robust security measures to protect digital assets and ensure transaction integrity.",
		type: "double",
	},
	{
		title: "And lastly...",
		content:
			"Embrace the future of digital asset management with Artinals Protocol, and unlock innovative use cases that push the boundaries of what's possible in the blockchain space.",
		type: "single",
	},
];

const ArtinalsProtocolPresentation = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const handlePrev = () => {
		setCurrentSlide((prev) => Math.max(0, prev === 1 ? 0 : prev - 2));
	};

	const handleNext = () => {
		setCurrentSlide((prev) =>
			Math.min(slides.length - 1, prev === 0 ? 1 : prev + 2)
		);
	};

	const isFirstSlide = currentSlide === 0;
	const isLastSlide = currentSlide === slides.length - 1;
	const isDoubleSlide =
		currentSlide !== 0 && currentSlide !== slides.length - 1;

	return (
		<>
			<div className='lg:hidden'>
				<div
					className={`${
						isFirstSlide
							? ""
							: isLastSlide
							? "lg:-mt-[100px]"
							: "lg:-mt-48  md:ml-[3%] lg:ml-0"
					}`}>
					<div
						className={`absolute transform -m-3 z-40 md:mt-[159px] mt-[110px] ${
							isFirstSlide
								? "lg:ml-64 md:ml-[150px] ml-12"
								: isLastSlide
								? "lg:translate-x-[820px] md:ml-[580px] ml-[220px] "
								: "lg:translate-x-[390px] md:ml-[320px]  ml-[140px]"
						}`}>
						<Image src={a} alt='Artinals-Logo-ball' />
					</div>
					<div
						className={`absolute transform  z-30 md:mt-[250px] mt-[200px] ${
							isFirstSlide
								? "lg:-translate-x-[300px] md:-ml-[320px] -ml-[421px]"
								: isLastSlide
								? "lg:translate-x-[510px] md:ml-[110px] -ml-[250px]"
								: "lg:translate-x-20 md:-ml-[152px] -ml-[275px]"
						}`}>
						<Image
							src={p}
							alt='Pillar'
							className={`${
								isDoubleSlide ? "w-[88%] md:w-auto" : ""
							} `}
						/>
					</div>
				</div>
			</div>

			<div className='bg-white mx-auto relative lg:h-screen md:h-[900px] h-[700px] w-full overflow-hidden'>
				<h1
					className={`lg:text-[40px] md:text-[32px] font-extrabold leading-[100%] lg:-mb-6  md:mb-32 px-10  transition-transform duration-300 font-agrandir ${
						isFirstSlide
							? "text-left "
							: isLastSlide
							? "text-right"
							: "text-center  lg:mt-0"
					}`}>
					Artinals protocol
				</h1>

				{/* S I D E      B	U  T  T  O  N   S */}
				<div className='flex items-center justify-between mb-8 relative'>
					{!isFirstSlide && (
						<svg
							onClick={handlePrev}
							className={`w-[30px] md:w-[40px] lg:w-[50px] rounded-full z-10 absolute ${
								isFirstSlide
									? " lg:ml-[420px] lg:top-52 md:ml-[320px] md:top-52"
									: isLastSlide
									? "lg:ml-[67%] lg:mt-[420px] md:ml-[50%] md:mt-[100px] mt-[300px] ml-[150px]"
									: "lg:ml-[38%] lg:mt-[420px] md:ml-[270px] md:mt-[100px] mt-[300px] ml-[70px]"
							} `}
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 50 50'
							fill='none'>
							<rect
								x='-0.59875'
								y='-0.59875'
								width='48.8025'
								height='48.8025'
								rx='24.4012'
								transform='matrix(1.31134e-07 -1 -1 -1.31134e-07 48.8025 48.8025)'
								fill='white'
								stroke='#0184F9'
								stroke-width='1.1975'
							/>
							<path
								d='M16.7966 24.4948C16.4061 24.8853 16.4061 25.5185 16.7966 25.909L23.1606 32.273C23.5511 32.6635 24.1843 32.6635 24.5748 32.273C24.9653 31.8824 24.9653 31.2493 24.5748 30.8588L18.9179 25.2019L24.5748 19.5451C24.9653 19.1545 24.9653 18.5214 24.5748 18.1308C24.1843 17.7403 23.5511 17.7403 23.1606 18.1308L16.7966 24.4948ZM32.9004 24.2019L17.5037 24.2019L17.5037 26.2019L32.9004 26.2019L32.9004 24.2019Z'
								fill='#0184F9'
							/>
						</svg>
					)}
					{!isLastSlide && (
						<svg
							onClick={handleNext}
							className={`z-10 absolute w-[30px] md:w-[40px] lg:w-[50px] ${
								isFirstSlide
									? " lg:ml-[420px] lg:top-48  md:ml-[300px] md:top-4 top-32 ml-44"
									: isDoubleSlide
									? "lg:ml-[54%] lg:top-[90px]  md:ml-[476px] md:mt-[100px] mt-[300px] ml-[280px]"
									: " lg:ml-[55%] lg:mt-[420px] md:ml-[56%] md:mt-[520px] "
							} `}
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 42 43'
							fill='none'>
							<rect
								x='1.55896'
								y='42.2789'
								width='40.8986'
								height='39.8423'
								rx='19.9211'
								transform='rotate(-90 1.55896 42.2789)'
								fill='white'
								stroke='#0184F9'
								stroke-width='1.1975'
							/>
							<path
								d='M28.3402 21.2925C28.7308 21.683 28.7308 22.3162 28.3402 22.7067L21.9763 29.0707C21.5857 29.4612 20.9526 29.4612 20.5621 29.0707C20.1715 28.6801 20.1715 28.047 20.5621 27.6565L26.2189 21.9996L20.5621 16.3427C20.1715 15.9522 20.1715 15.3191 20.5621 14.9285C20.9526 14.538 21.5857 14.538 21.9763 14.9285L28.3402 21.2925ZM14.9956 20.9996L27.6331 20.9996L27.6331 22.9996L14.9956 22.9996L14.9956 20.9996Z'
								fill='#0184F9'
							/>
						</svg>
					)}
				</div>
				{/* S V  G    F  O  R    B A C K G R O U N D    */}
				<svg
					className={`absolute transform -m-3 -z-1  lg:-mt-20 md:-mt-48  lg:w-[1360px]  lg:h-[800px]  ${
						isFirstSlide
							? "lg:-ml-[370px] md:-ml-[380px] -ml-28 "
							: isLastSlide
							? "lg:translate-x-[460px] md:translate-x-[220px] translate-x-12"
							: "lg:translate-x-[0px] md:-translate-x-6 2xl:translate-x-[15%] 3xl:translate-x-[18%] "
					}`}
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1362 750'
					fill='none'>
					<g opacity='0.5'>
						<path
							d='M461.888 44.4708L97.3177 -376.644L461.888 44.4708ZM523.497 53.6304L464.796 -37.9431L523.497 53.6304ZM573.994 21.3748L481.652 -241.809L573.994 21.3748ZM642.038 97.8504L614.974 -93.9029L642.038 97.8504ZM685.679 60.8999L697.754 -97.9075L685.679 60.8999ZM729.106 24.6946L823.885 -376.151L729.106 24.6946ZM774.554 63.5952L983.279 -376.151L774.554 63.5952ZM858.473 33.2899L1078.42 -257.602L858.473 33.2899ZM1008.44 -8.73889L1362.56 -315.123L1008.44 -8.73889ZM993.881 83.7933L1361.32 -141.738L993.881 83.7933ZM905.559 200.282L1366.63 33.75L905.559 200.282ZM1062.9 230.647L1267.52 203.662L1062.9 230.647ZM965.842 305.277L1361.32 335.462L965.842 305.277ZM989.473 361.439L1239.67 420.648L989.473 361.439ZM1063.07 469.321L1361.32 611.508L1063.07 469.321ZM1069.31 589.535L1361.32 813.664L1069.31 589.535ZM811.777 447.348L1276.29 984.639L811.777 447.348ZM821.952 532.89L1104.87 984.639L821.952 532.89ZM762.008 533.559L897.213 908.618L762.008 533.559ZM691.659 450.033L767.051 984.639L691.659 450.033ZM655.477 497.704L623.281 984.634L655.477 497.704ZM601.666 570.646L506.225 984.639L601.666 570.646ZM582.537 472.701L401.09 860.306L582.537 472.701ZM433.904 593.846L140.263 984.634L433.904 593.846ZM417.497 502.245L139.288 745.072L417.497 502.245ZM233.251 556.562L88.1339 647.116L233.251 556.562ZM283.59 424.904L1 524.175L283.59 424.904ZM372.35 327.211L85.3136 367.071L372.35 327.211ZM292.231 257.869L84.1362 241.494L292.231 257.869ZM398.187 223.542L1 130.637L398.187 223.542ZM274.433 100.611L50.528 -5.95047L274.433 100.611ZM292.078 2.47501L121.622 -128.443L292.078 2.47501ZM637.772 193.04L601.321 95.3907L637.772 193.04ZM653.878 188.788L652.092 176.068L653.878 188.788ZM677.858 187.446L678.34 180.39L677.858 187.446ZM680.12 142.941L683.625 105.186L680.12 142.941ZM696.105 166.07L709.807 107.278L696.105 166.07ZM724.758 169.757L754.122 107.081L724.758 169.757ZM765.726 155.717L830.15 72.3658L765.726 155.717ZM786.361 183.529L840.555 138.154L786.361 183.529ZM876.047 106.062L972.408 22.7169L876.047 106.062ZM745.152 219.302L750.261 214.919L745.152 219.302ZM770.031 223.076L953.827 110.176L770.031 223.076ZM765.195 251.076L808.814 235.271L765.195 251.076ZM861.907 258.455L967.025 245.214L861.907 258.455ZM812.795 294.266L918.028 301.837L812.795 294.266ZM769.696 310.24L888.451 337.916L769.696 310.24ZM763.07 329.852L765.496 330.997L763.07 329.852ZM858.747 374.85L969.358 426.728L858.747 374.85ZM751.597 348.949L755.54 353.37L751.597 348.949ZM722.956 374.543L732.424 389.657L722.956 374.543ZM862.712 434.601L961.297 509.312L862.712 434.601ZM763.191 439L791.952 483.05L763.191 439ZM706.795 382.311L741.148 479.286L706.795 382.311ZM681.993 388.096L682.623 392.528L681.993 388.096ZM663.532 394.643L659.381 440.588L663.532 394.643ZM645.022 385.116L641.769 403.819L645.022 385.116ZM624.628 477.495L612.071 525.955L624.628 477.495ZM607.099 365.312L508.563 497.331L607.099 365.312ZM593.003 350.959L516.997 418.259L593.003 350.959ZM503.426 388.901L344.152 487.712L503.426 388.901ZM575.845 319.411L406.796 381.725L575.845 319.411ZM571.382 298.588L501.679 309.413L571.382 298.588ZM507.424 273.323L423.061 267.22L507.424 273.323ZM573.326 265.543L498.032 247.942L573.326 265.543ZM580.747 244.299L375.548 146.815L580.747 244.299ZM591.13 227.289L580.883 219.543L591.13 227.289ZM525.687 177.81L374.207 64.3512L525.687 177.81ZM560.298 158.335L528.853 121.911L560.298 158.335ZM601.584 180.44L564.454 121.007L601.584 180.44Z'
							fill='black'
						/>
						<path
							d='M601.584 180.44L564.454 121.007M461.888 44.4708L97.3177 -376.644L461.888 44.4708ZM523.497 53.6304L464.796 -37.9431L523.497 53.6304ZM573.994 21.3748L481.652 -241.809L573.994 21.3748ZM642.038 97.8504L614.974 -93.9029L642.038 97.8504ZM685.679 60.8999L697.754 -97.9075L685.679 60.8999ZM729.106 24.6946L823.885 -376.151L729.106 24.6946ZM774.554 63.5952L983.279 -376.151L774.554 63.5952ZM858.473 33.2899L1078.42 -257.602L858.473 33.2899ZM1008.44 -8.73888L1362.56 -315.123L1008.44 -8.73888ZM993.881 83.7933L1361.32 -141.738L993.881 83.7933ZM905.559 200.282L1366.63 33.75L905.559 200.282ZM1062.9 230.647L1267.52 203.662L1062.9 230.647ZM965.842 305.277L1361.32 335.462L965.842 305.277ZM989.473 361.439L1239.67 420.648L989.473 361.439ZM1063.07 469.321L1361.32 611.508L1063.07 469.321ZM1069.31 589.535L1361.32 813.664L1069.31 589.535ZM811.777 447.348L1276.29 984.639L811.777 447.348ZM821.952 532.89L1104.87 984.639L821.952 532.89ZM762.008 533.559L897.213 908.618L762.008 533.559ZM691.659 450.033L767.051 984.639L691.659 450.033ZM655.477 497.704L623.281 984.633L655.477 497.704ZM601.666 570.646L506.225 984.639L601.666 570.646ZM582.537 472.701L401.09 860.306L582.537 472.701ZM433.904 593.846L140.263 984.633L433.904 593.846ZM417.497 502.245L139.288 745.072L417.497 502.245ZM233.251 556.562L88.1339 647.116L233.251 556.562ZM283.59 424.904L1 524.175L283.59 424.904ZM372.35 327.211L85.3136 367.071L372.35 327.211ZM292.231 257.869L84.1362 241.494L292.231 257.869ZM398.187 223.542L1 130.637L398.187 223.542ZM274.433 100.611L50.528 -5.95047L274.433 100.611ZM292.078 2.475L121.622 -128.443L292.078 2.475ZM637.772 193.04L601.321 95.3907L637.772 193.04ZM653.877 188.788L652.092 176.068L653.877 188.788ZM677.858 187.446L678.34 180.39L677.858 187.446ZM680.12 142.941L683.625 105.186L680.12 142.941ZM696.105 166.07L709.807 107.278L696.105 166.07ZM724.758 169.757L754.122 107.081L724.758 169.757ZM765.726 155.717L830.15 72.3658L765.726 155.717ZM786.361 183.529L840.555 138.153L786.361 183.529ZM876.047 106.062L972.408 22.7169L876.047 106.062ZM745.152 219.302L750.261 214.919L745.152 219.302ZM770.03 223.076L953.827 110.176L770.03 223.076ZM765.195 251.076L808.814 235.271L765.195 251.076ZM861.907 258.455L967.025 245.214L861.907 258.455ZM812.795 294.266L918.028 301.837L812.795 294.266ZM769.696 310.24L888.451 337.916L769.696 310.24ZM763.07 329.852L765.496 330.997L763.07 329.852ZM858.747 374.85L969.358 426.728L858.747 374.85ZM751.597 348.949L755.54 353.37L751.597 348.949ZM722.956 374.543L732.424 389.657L722.956 374.543ZM862.712 434.601L961.297 509.312L862.712 434.601ZM763.191 439L791.952 483.05L763.191 439ZM706.795 382.311L741.148 479.286L706.795 382.311ZM681.993 388.096L682.623 392.528L681.993 388.096ZM663.532 394.643L659.381 440.588L663.532 394.643ZM645.022 385.116L641.769 403.819L645.022 385.116ZM624.628 477.495L612.071 525.955L624.628 477.495ZM607.099 365.312L508.563 497.331L607.099 365.312ZM593.003 350.959L516.997 418.259L593.003 350.959ZM503.426 388.901L344.152 487.712L503.426 388.901ZM575.845 319.411L406.796 381.725L575.845 319.411ZM571.382 298.588L501.679 309.413L571.382 298.588ZM507.424 273.322L423.061 267.22L507.424 273.322ZM573.326 265.543L498.032 247.942L573.326 265.543ZM580.747 244.299L375.548 146.815L580.747 244.299ZM591.13 227.289L580.883 219.543L591.13 227.289ZM525.687 177.81L374.207 64.3512L525.687 177.81ZM560.298 158.335L528.853 121.911L560.298 158.335Z'
							stroke='#0163F5'
							stroke-opacity='0.1'
							stroke-width='2'
							stroke-miterlimit='10'
						/>
					</g>
				</svg>

				{isDoubleSlide ? (
					<div className='flex justify-between md:px-6 px-3 lg:gap-x-60 lg:items-center lg:mt-64 md:mt-14 mt-48 lg:max-w-6xl mx-auto  '>
						<div className='lg:w-[366px]  md:w-[220px] w-[108px] '>
							<h3 className='lg:text-[22px] md:text-[18px] text-[12px] font-agrandir font-extrabold mb-2'>
								{slides[currentSlide].title}
							</h3>
							<p className='lg:text-[16px] md:text-[14px] text-[10px] font-mulish leading-[157%] md:tracking-[0.3px] tracking-[0.188px]'>
								{slides[currentSlide].content}
							</p>
						</div>
						<div className='lg:w-[420px] md:w-[250px] w-[108px] md:pl-4 pl-[22px]'>
							<h3 className='lg:text-[22px] md:text-[18px] text-[12px] font-agrandir font-extrabold mb-2'>
								{slides[currentSlide + 1].title}
							</h3>
							<p className='lg:text-[16px] md:text-[14px] text-[10px] font-mulish leading-[150%] md:tracking-[0.3px] tracking-[0.188px]'>
								{slides[currentSlide + 1].content}
							</p>
						</div>
					</div>
				) : isFirstSlide ? (
					<div
						className={`${
							isFirstSlide
								? "text-left lg:mt-56 md:mt-12 mt-48 lg:ml-[40%] md:ml-[50%] ml-[52%] "
								: "text-center mx-auto"
						} lg:w-[700px] md:w-[350px] w-[180px] `}>
						<h2 className='lg:text-[22px] md:text-[18px] text-[12px] font-extrabold font-agrandir mb-3'>
							{slides[currentSlide].title}
						</h2>
						<p className='lg:text-[16px] md:text-[14px] text-[9px] font-mulish leading-[150%] tracking-[0.188px] md:tracking-[0.3px]'>
							{slides[currentSlide].content}
						</p>
						<p className='lg:text-[16px] md:text-[14px] text-[9px] font-mulish mt-3 md:mt-4 leading-[140%] tracking-[0.188px] md:tracking-[0.3px]'>
							{slides[currentSlide].content2
								? slides[currentSlide].content2
								: ""}
						</p>
					</div>
				) : isLastSlide ? (
					<div
						className={`${
							isLastSlide
								? "text-left lg:mt-40 md:mt-20 lg:ml-40 md:ml-16 mt-48 ml-6"
								: "text-center"
						} max-w-lg mx-auto md:w-[370px] w-[160px] md:tracking-[0.3px]`}>
						<h2 className='2xl:text-[26px] 3xl:text-[28px] 4xl:text-[32px] 5xl:text-[36px] lg:text-[22px] md:text-[18px] text-[12px] font-agrandir font-extrabold mb-4 tracking-[0.3px] '>
							{slides[currentSlide].title}
						</h2>
						<p className='text-gray-600   lg:text-[16px] md:text-[14px] text-[10px] font-mulish tracking-[0.3px] leading-[157%]'>
							{slides[currentSlide].content}
						</p>
					</div>
				) : (
					""
				)}

				<div
					className={`hidden lg:block ${
						isFirstSlide
							? "lg:-mt-[230px] md:-mt-[305px]"
							: isLastSlide
							? "lg:-mt-[140px] "
							: "lg:-mt-48 md:-mt-[175px] "
					}`}>
					<div
						className={`absolute transform -m-3 z-40 lg:ml-60   ${
							isFirstSlide
								? "lg:ml-64  ml-[150px]"
								: isLastSlide
								? "lg:translate-x-[820px] 2xl:translate-x-[920px] 3xl:translate-x-[1080px] 4xl:translate-x-[1190px] 5xl:translate-x-[1390px] 6xl:translate-x-[1900px] "
								: "lg:translate-x-[390px] 2xl:translate-x-0 md:translate-x-[320px] 2xl:ml-[45%]"
						}`}>
						<Image src={a} alt='Logo' />
					</div>
					<div
						className={`absolute transform mt-20 z-30 lg:ml-20 ${
							isFirstSlide
								? "lg:-translate-x-[300px] md:-translate-x-[320px]"
								: isLastSlide
								? "lg:translate-x-[510px] 2xl:translate-x-[610px] 3xl:translate-x-[770px] 4xl:translate-x-[880px] 5xl:translate-x-[1080px] 6xl:translate-x-[1590px] "
								: "lg:translate-x-20 2xl:translate-x-0 md:-translate-x-40 2xl:ml-[250px] 3xl:ml-[19%]  4xl:ml-[20.6%] 5xl:ml-[23%] 6xl:ml-[28.6%]"
						}`}>
						<Image src={p} alt='Pillar' />
					</div>
				</div>

				<div className='absolute bottom-0 left-0 right-0 md:h-[400px] lg:h-[300px] h-[260px]'>
					<Image
						src={footer}
						alt='footer image'
						layout='fill'
						objectFit='cover'
						className='w-full h-full'
					/>
				</div>

				<div className='flex justify-between w-full lg:px-20 md:px-12 px-6 absolute bottom-6'>
					<div className='text-white'>© 2024 | Artinals</div>
					{/* Social Media Icons */}
					<div className='flex space-x-6 right-4 a '>
						<div>
							<Link
								href={"https://t.me/artfi_announcement"}
								target='_blank'>
								<svg
									width='21'
									height='20'
									viewBox='0 0 21 20'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M18.6903 0.136826C18.9466 0.0156739 19.2272 -0.0261107 19.5029 0.015821C19.7785 0.0577526 20.039 0.181868 20.2574 0.375248C20.4758 0.568629 20.6441 0.824205 20.7447 1.11537C20.8453 1.40654 20.8745 1.72266 20.8294 2.03083L18.4766 18.0553C18.2484 19.601 16.738 20.4875 15.4755 19.7175C14.4194 19.0734 12.8509 18.0809 11.4401 17.0454C10.7347 16.5271 8.5738 14.8672 8.83937 13.6861C9.06759 12.6762 12.6984 8.88116 14.7732 6.6249C15.5875 5.73847 15.2161 5.22711 14.2545 6.04248C11.8664 8.06695 8.03229 11.1456 6.76462 12.0122C5.64632 12.7763 5.06332 12.9068 4.3662 12.7763C3.09438 12.5387 1.91488 12.1706 0.952195 11.7222C-0.348675 11.1165 -0.285395 9.1083 0.951158 8.52356L18.6903 0.136826Z'
										fill='white'
									/>
								</svg>
							</Link>
						</div>
						<div>
							<Link
								href={"https://x.com/artinalsnetwork"}
								target='_blank'
								rel='noopener'>
								<svg
									width='22'
									height='18'
									viewBox='0 0 22 18'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M17.3875 0.5H20.6084L13.5734 7.70097L21.85 17.5H15.3702L10.2947 11.5559L4.48691 17.5H1.26473L8.78929 9.79724L0.849976 0.5H7.49516L12.0823 5.93179L17.3875 0.5ZM16.2587 15.7742H18.0437L6.52391 2.13552H4.61029L16.2587 15.7742Z'
										fill='white'
									/>
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ArtinalsProtocolPresentation;
