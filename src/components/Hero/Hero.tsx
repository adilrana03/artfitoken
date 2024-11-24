import React, { useState } from "react";
import { Copy, Menu, X } from "lucide-react";
import logo from "@/assets/token-logo.svg";
import Image from "next/image";
const TokenDashboard = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const contractAddress =
		"286f101ee91305382d0ab83f9d35cdaf60692032feda4c44bfdd926ee29298b8";

	const copyToClipboard = () => {
		navigator.clipboard.writeText(contractAddress);
	};

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className='lg:min-h-screen bg-[#0a0a1a] text-white p-8'>
			<nav className='flex items-center justify-between lg:mb-16'>
				<div>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='32'
						height='32'
						viewBox='0 0 32 32'
						fill='none'>
						<path
							d='M0 8.71383C0 3.90129 3.90199 0 8.71386 0H22.4935C22.5351 0 22.5692 0.0335997 22.5692 0.074986V6.78382C22.5692 7.96205 21.6134 8.91713 20.4358 8.91713H0.203733C0.0906632 8.91713 0 8.82604 0 8.71383Z'
							fill='white'
						/>
						<path
							d='M0 9.4292H8.88026V31.9972C3.97558 31.9972 0 28.0213 0 23.1168V9.4292Z'
							fill='white'
						/>
						<path
							d='M9.43262 23.083H22.6063V32H9.43262V23.083Z'
							fill='white'
						/>
						<path
							d='M23.1201 23.083H32.0004V32H23.1201V23.083Z'
							fill='#7A84FB'
						/>
						<path
							d='M23.1201 0C28.0248 0 32.0004 3.97585 32.0004 8.88044V22.6414H23.1201V0Z'
							fill='white'
						/>
					</svg>
				</div>

				{/* Hamburger menu for mobile/medium screens */}
				<button
					className='lg:hidden text-white hover:text-gray-300'
					onClick={toggleMenu}>
					{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>

				{/* Desktop navigation */}
				<div className='hidden lg:flex gap-10 text-[20px] text-white font-medium'>
					<a href='/Artfi-whitepaper.pdf' target='_blank'>
						<button className='px-6 py-2 rounded-full bg-black bg-opacity-20 text-blue-400 rounded-[40px] border-[3px] border-[#4467FF]'>
							Whitepapers
						</button>
					</a>
					<a href='/Artfi-Tokenomics.pdf' target='_blank'>
						<button className='px-6 py-2 rounded-full  rounded-[40px] border-[1px] border-gray-400 bg-black'>
							Tokenomics
						</button>
					</a>
					<a href='https://dashboard.artfitoken.io/' target='_blank'>
						<button className='px-6 py-2 rounded-full  rounded-[40px] border-[1px] border-gray-400 bg-black'>
							Dashboard
						</button>
					</a>
				</div>
				<div className='hidden lg:flex'></div>

				{/* Mobile/Medium screen navigation overlay */}
				{isMenuOpen && (
					<div className='lg:hidden fixed inset-0 z-50 bg-[#0a0a1a] bg-opacity-95'>
						<div className='flex flex-col items-center justify-center h-full space-y-6'>
							<button
								className='absolute top-8 right-8 text-white hover:text-gray-300'
								onClick={toggleMenu}>
								<X size={24} />
							</button>
							<a href='/Artfi-whitepaper.pdf' target='_blank'>
								<button className='px-6 py-2 w-48 rounded-full bg-blue-600 bg-opacity-20 text-blue-400'>
									Whitepapers
								</button>
							</a>
							<a href='/Artfi-Tokenomics.pdf' target='_blank'>
								<button className='px-6 py-2 w-48 rounded-full bg-gray-800'>
									Tokenomics
								</button>
							</a>
							<a
								href='https://dashboard.artfitoken.io/'
								target='_blank'>
								<button className='px-6 py-2 w-48 rounded-full bg-gray-800'>
									Dashboard
								</button>
							</a>
						</div>
					</div>
				)}
			</nav>

			<main className='mx-auto text-center bg-[#0a0a1a] lg:pb-[600px] md:pb-[100px] pb-[250px] mt-[10%]'>
				<div className='bg max-w-7xl mx-auto bg-gradient-to-b from-[#0a0a1a] via-[#0a0a1a] to-[#7A84FB] md:h-[600px] h-[300px] rounded-3xl'>
					<div className='mx-auto text-center mb-8 mt-10 '>
						<Image src={logo} alt='logo' className='mx-auto' />
					</div>
					<h2 className='text-[20px] md:text-[32px] lg:text-[46px] xl:text-[48px] 2xl:text-[52px] font-medium text-[#627FFF] mb-12'>
						Artfi Ecosystem Utility Token
					</h2>

					<div className='hidden md:block md:bg-[rgba(255,255,255,0.13)] bg-opacity-50 rounded-lg lg:p-4 p-2 md:flex items-center justify-between mb-8 max-w-5xl mx-auto'>
						<div className='bg-[rgba(255,255,255,0.13)] md:bg-transparent bg-opacity-50 md:p-0 p-2 rounded-xl mb-2 md:mb-0 flex items-center '>
							<span className='text-gray-200 truncate text-[10px] md:text-[12px] lg:text-[14px] xl:text-[14px] 2xl:text-[18px]'>
								<span className='font-bold'>
									Contract Address:
								</span>{" "}
								{contractAddress}
							</span>
							<button
								onClick={copyToClipboard}
								className='text-gray-400 hover:text-white'>
								<Copy size={20} />
							</button>
						</div>
						<a
							href='https://suiscan.xyz/mainnet/coin/0x706fa7723231e13e8d37dad56da55c027f3163094aa31c867ca254ba0e0dc79f::artfi::ARTFI/txs'
							target='_blank'>
							<div className='text-nowrap flex lg:p-4 p-2 border rounded-xl border-[#4467FF] shadow shadow-[#74F] md:ml-4 text-[16px] md:text-[18px] lg:text-[24px] xl:text-[24px] 2xl:text-[28px] flex justify-center'>
								View on Explorer
							</div>
						</a>
					</div>

					{/* Video Container */}
					<div className='absolute left-1/2 transform -translate-x-1/2 mt-8 w-[90%] px-4 max-w-[1182px]'>
						<div className='bg-black rounded-3xl overflow-hidden'>
							<video
								className='w-full h-[179px] md:h-[378px] lg:h-[670px] rounded-3xl object-cover'
								controls
								autoPlay
								loop
								muted>
								<source
									src='https://s3-figma-videos-production-sig.figma.com/video/1158077750918977223/TEAM/0c70/4a99/-2220-429f-8ae7-92c2cff4f0cf?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XziDR6PYo9aRQqKZeNsHrKcUop0KEhNOd-FNLR6PxOVzbceCJGZg7mqMjw-DgI4pQZibPao-hJX4gi7k9684DiOzrkz96yq6WtqhpjUUmzdZO8oZP1fhquUJLRlj7AsauTpAEtyDip~OxJ76XJhqcpcyMW3rdgZcbj2f5bx7uzX3l2ydbdreEmJnoQu2dmGIGlo4HGGzv8UGH5CYmrRLiQf6DU5tSS-t4LGf6yC30idsi8OmIN9mUNvcLbzTkiPZQkHKU4wPt3L6RhJSxmit7zZebZTJR27HyA7~SjgfYrlp5oTHcKIctrmRnxeqNXAb6S5tuayhPdg1Et1AXahhTQ__'
									type='video/mp4'
								/>
								Your browser does not support the video tag.
							</video>
						</div>
					</div>

					<div className='mt-[100%] z-40 md:hidden md:bg-[rgba(255,255,255,0.13)] bg-opacity-50 rounded-lg lg:p-4 p-2 md:flex items-center justify-between mb-8 max-w-4xl mx-auto'>
						<div className='bg-[rgba(255,255,255,0.13)] md:bg-transparent bg-opacity-50 md:p-0 p-2 rounded-xl mb-2 md:mb-0 flex items-center '>
							<span className='text-gray-200 truncate text-[10px] md:text-[12px] lg:text-[14px] xl:text-[14px] 2xl:text-[18px]'>
								<span className='font-bold'>
									Contract Address:
								</span>{" "}
								{contractAddress}
							</span>
							<button
								onClick={copyToClipboard}
								className='text-gray-400 hover:text-white'>
								<Copy size={20} />
							</button>
						</div>
						<a
							href='https://suiscan.xyz/mainnet/coin/0x706fa7723231e13e8d37dad56da55c027f3163094aa31c867ca254ba0e0dc79f::artfi::ARTFI/txs'
							target='_blank'>
							<div className='text-nowrap flex lg:p-4 p-2 border rounded-xl border-[#4467FF] shadow shadow-[#74F] md:ml-4 text-[16px] md:text-[18px] lg:text-[24px] xl:text-[24px] 2xl:text-[28px] flex justify-center'>
								View on Explorer
							</div>
						</a>
					</div>
				</div>
			</main>
		</div>
	);
};

export default TokenDashboard;

// import React from "react";
// import { Copy } from "lucide-react";
// import logo from "@/assets/token-logo.svg";
// import Image from "next/image";
// import TokenAbout from "./About";
// import Cards from "./Cards";
// const TokenDashboard = () => {
// 	const contractAddress =
// 		"286f101ee91305382d0ab83f9d35cdaf60692032feda4c44bfdd926ee29298b8";

// 	const copyToClipboard = () => {
// 		navigator.clipboard.writeText(contractAddress);
// 	};

// 	return (
// 		<div className='lg:min-h-screen bg-[#0a0a1a] text-white p-8'>
// 			<nav className='flex items-center justify-between lg:mb-16 '>
// 				<div className='w-8 h-8 bg-white rounded-lg' />
// 				<div className='flex gap-4'>
// 					<button className='px-6 py-2 rounded-full bg-blue-600 bg-opacity-20 text-blue-400'>
// 						Whitepapers
// 					</button>
// 					<button className='px-6 py-2 rounded-full bg-gray-800'>
// 						Tokenomics
// 					</button>
// 					<button className='px-6 py-2 rounded-full bg-gray-800'>
// 						Dashboard
// 					</button>
// 				</div>
// 			</nav>

// 			<main className='mx-auto text-center bg-[#0a0a1a] lg:pb-[600px] md:pb-[100px]'>
// 				<div className='bg max-w-7xl mx-auto bg-gradient-to-b from-[#0a0a1a] via-[#0a0a1a] to-[#7A84FB] h-[600px] rounded-3xl '>
// 					<div className='mx-auto text-center mb-8'>
// 						<Image src={logo} alt='logo' className='mx-auto' />
// 					</div>
// 					<h2 className='text-[20px] md:text-[32px] lg:text-[46px] xl:text-[48px] 2xl:text-[52px] font-medium text-[#627FFF] mb-12'>
// 						Artfi Ecosystem Utility Token
// 					</h2>

// 					<div className='bg-[rgba(255,255,255,0.13)] bg-opacity-50 rounded-lg lg:p-4 p-2 flex items-center justify-between mb-8 max-w-4xl mx-auto'>
// 						<span className='text-gray-200 truncate text-[10px] md:text-[12px] lg:text-[14px] xl:text-[14px] 2xl:text-[18px]'>
// 							<span className='font-bold'>Contract Address:</span>{" "}
// 							{contractAddress}
// 						</span>
// 						<button
// 							onClick={copyToClipboard}
// 							className='text-gray-400 hover:text-white'>
// 							<Copy size={20} />
// 						</button>
// 						<div className='text-nowrap flex lg:p-4 p-2 border rounded-xl border-blue-400 ml-4 text-[16px] md:text-[18px] lg:text-[24px] xl:text-[24px] 2xl:text-[28px]'>
// 							View on Explorer
// 						</div>
// 					</div>

// 					<div className='bg-black absolute z-40 lg:ml-10 ml-[10%] mt-10 text-center rounded-3xl mx-auto flex justify-center'>
// 						<video
// 							className='lg:w-[1182px] md:w-[670px] md:h-[378px] lg:h-[670px]  rounded-3xl mx-auto'
// 							controls
// 							autoPlay
// 							loop
// 							muted>
// 							<source
// 								src='https://s3-figma-videos-production-sig.figma.com/video/1158077750918977223/TEAM/0c70/4a99/-2220-429f-8ae7-92c2cff4f0cf?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XziDR6PYo9aRQqKZeNsHrKcUop0KEhNOd-FNLR6PxOVzbceCJGZg7mqMjw-DgI4pQZibPao-hJX4gi7k9684DiOzrkz96yq6WtqhpjUUmzdZO8oZP1fhquUJLRlj7AsauTpAEtyDip~OxJ76XJhqcpcyMW3rdgZcbj2f5bx7uzX3l2ydbdreEmJnoQu2dmGIGlo4HGGzv8UGH5CYmrRLiQf6DU5tSS-t4LGf6yC30idsi8OmIN9mUNvcLbzTkiPZQkHKU4wPt3L6RhJSxmit7zZebZTJR27HyA7~SjgfYrlp5oTHcKIctrmRnxeqNXAb6S5tuayhPdg1Et1AXahhTQ__'
// 								type='video/mp4'
// 							/>
// 							Your browser does not support the video tag.
// 						</video>
// 					</div>
// 				</div>
// 			</main>

// 		</div>
// 	);
// };

// export default TokenDashboard;
