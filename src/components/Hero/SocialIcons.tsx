import React from "react";
import logo from "@/assets/Artfi Token Logo.png";
import Image from "next/image";
import bg from "@/assets/Rectangle 143.png";
const SocialIcon = ({ href, children }: any) => (
	<a
		href={href}
		target='_blank'
		rel='noopener noreferrer'
		className='block relative z-50 hover:scale-105 transition-transform'
		onClick={(e) => {
			e.stopPropagation();
			window.open(href, "_blank", "noopener,noreferrer");
		}}>
		{children}
	</a>
);
const SocialIcons = ({ href, children }: any) => {
	return (
		<div className='bg-black p-8 mx-auto text-center relative'>
			<div className='max-w-7xl w-[90%] mx-auto'>
				{/* Image overlay layer */}
				<div className='absolute inset-0 pointer-events-none'>
					<Image
						src={bg}
						alt='background'
						className='w-full h-[300px] md:-mt-10 object-cover'
					/>
				</div>

				<div className='max-w-7xl lg:flex justify-between items-center  md:gap-4 gap-2 py-5 '>
					<div className='lg:w-[30%] mb-5 lg:mb-0'>
						<Image src={logo} alt='logo' className='mx-auto' />
					</div>
					<div className='flex flex-wrap gap-4 items-center justify-center lg:justify-end relative z-20'>
						<div>
							<SocialIcon href='https://discord.gg/artfiglobal'>
								{/* <a href='https://discord.gg/artfiglobal'> */}
								<svg
									className='lg:w-[48px] md:w-[32px] w-[50px] border border-blue-500 border-r-0 rounded-xl'
									viewBox='0 0 48 48'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<circle
										cx='24'
										cy='24'
										r='24'
										fill='#090909'
									/>
									<path
										d='M19.8583 29.7009L18.675 32.0675C17.1678 31.4394 15.607 30.8114 13.9477 29.7304C13.3691 29.3534 13.0182 28.7128 13.0043 28.0223C12.9321 24.4777 13.7637 20.9142 15.8692 17.1465C16.1448 16.6534 16.6039 16.2919 17.1364 16.1028C18.4067 15.652 19.2691 15.3035 20.7458 15.0574L21.6333 16.6844C21.6333 16.6844 22.5208 16.3886 23.9999 16.3886C25.4791 16.3886 26.3666 16.6844 26.3666 16.6844L27.254 15.0574C28.7308 15.3035 29.5932 15.652 30.8634 16.1028C31.3959 16.2919 31.8551 16.6534 32.1306 17.1465C34.2362 20.9142 35.0677 24.4777 34.9957 28.0223C34.9817 28.7128 34.6308 29.3534 34.0522 29.7304C32.3929 30.8114 30.8322 31.4394 29.3248 32.0675L28.1415 29.7009M18.0834 28.5175C18.0834 28.5175 21.0417 29.9967 23.9999 29.9967C26.9582 29.9967 29.9165 28.5175 29.9165 28.5175'
										stroke='white'
										strokeWidth='1.77497'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M20.3018 26.4469C21.3638 26.4469 22.2247 25.4536 22.2247 24.2282C22.2247 23.0029 21.3638 22.0095 20.3018 22.0095C19.2398 22.0095 18.3789 23.0029 18.3789 24.2282C18.3789 25.4536 19.2398 26.4469 20.3018 26.4469Z'
										fill='white'
									/>
									<path
										d='M27.6983 26.4469C28.7603 26.4469 29.6212 25.4536 29.6212 24.2282C29.6212 23.0029 28.7603 22.0095 27.6983 22.0095C26.6363 22.0095 25.7754 23.0029 25.7754 24.2282C25.7754 25.4536 26.6363 26.4469 27.6983 26.4469Z'
										fill='white'
									/>
								</svg>
								{/* </a> */}
							</SocialIcon>
						</div>
						<div>
							<SocialIcon href='https://t.me/Artfiglobalchat'>
								{/* <a href='https://t.me/Artfiglobalchat'> */}
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='lg:w-[48px] md:w-[32px] w-[50px] border border-blue-500 border-r-0 rounded-xl'
									viewBox='0 0 48 48'
									fill='none'>
									<circle
										cx='24'
										cy='24'
										r='24'
										fill='#090909'
									/>
									<path
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M31.6903 14.1368C31.9466 14.0157 32.2272 13.9739 32.5029 14.0158C32.7785 14.0578 33.039 14.1819 33.2574 14.3752C33.4758 14.5686 33.6441 14.8242 33.7447 15.1154C33.8453 15.4065 33.8745 15.7227 33.8294 16.0308L31.4766 32.0553C31.2484 33.601 29.738 34.4875 28.4755 33.7175C27.4194 33.0734 25.8509 32.0809 24.4401 31.0454C23.7347 30.5271 21.5738 28.8672 21.8394 27.6861C22.0676 26.6762 25.6984 22.8812 27.7732 20.6249C28.5875 19.7385 28.2161 19.2271 27.2545 20.0425C24.8664 22.0669 21.0323 25.1456 19.7646 26.0122C18.6463 26.7763 18.0633 26.9068 17.3662 26.7763C16.0944 26.5387 14.9149 26.1706 13.9522 25.7222C12.6513 25.1165 12.7146 23.1083 13.9512 22.5236L31.6903 14.1368Z'
										fill='white'
									/>
								</svg>
								{/* </a> */}
							</SocialIcon>
						</div>
						<div>
							<SocialIcon href='https://x.com/artfiglobal'>
								{/* <a> */}
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='lg:w-[48px] md:w-[32px] w-[50px] border border-blue-500 border-r-0 rounded-xl'
									viewBox='0 0 48 48'
									fill='none'>
									<circle
										cx='24'
										cy='24'
										r='24'
										fill='#090909'
									/>
									<path
										d='M30.5375 16H33.7584L26.7234 23.201L35 33H28.5202L23.4447 27.0559L17.6369 33H14.4148L21.9393 25.2972L14 16H20.6452L25.2324 21.4318L30.5375 16ZM29.4087 31.2742H31.1938L19.6739 17.6355H17.7603L29.4087 31.2742Z'
										fill='white'
									/>
								</svg>
								{/* </a> */}
							</SocialIcon>
						</div>
						<div>
							<SocialIcon href='https://www.facebook.com/artfiglobal'>
								{/* <a href='https://www.facebook.com/artfiglobal'> */}
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='lg:w-[48px] md:w-[32px] w-[50px] border border-blue-500 border-r-0 rounded-xl'
									viewBox='0 0 48 48'
									fill='none'>
									<circle
										cx='24'
										cy='24'
										r='24'
										fill='#090909'
									/>
									<path
										d='M25.729 33V25.2581H28.3408L28.729 22.2269H25.729V20.2962C25.729 19.4215 25.9727 18.8226 27.228 18.8226H28.8187V16.1201C28.0448 16.0372 27.2668 15.9971 26.4884 16.0002C24.1798 16.0002 22.5948 17.4095 22.5948 19.9967V22.2212H20V25.2524H22.6005V33H25.729Z'
										fill='white'
									/>
								</svg>
								{/* </a> */}
							</SocialIcon>
						</div>

						<div>
							<SocialIcon href='https://www.linkedin.com/company/artfiglobal/'>
								{/* <a href='https://www.linkedin.com/company/artfiglobal/'> */}
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='lg:w-[48px] md:w-[32px] w-[50px] border border-blue-500 border-r-0 rounded-xl'
									viewBox='0 0 48 48'
									fill='none'>
									<circle
										cx='24'
										cy='24'
										r='24'
										fill='#090909'
									/>
									<path
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M22.3147 21.9237H25.4715V23.4962C25.9263 22.5918 27.0925 21.7792 28.8444 21.7792C32.2027 21.7792 33 23.5795 33 26.8826V33H29.6V27.6348C29.6 25.7537 29.1453 24.693 27.9876 24.693C26.3819 24.693 25.7147 25.8362 25.7147 27.634V33H22.3147V21.9237ZM16.4845 32.8555H19.8845V21.7792H16.4845V32.8555ZM20.3716 18.1675C20.3717 18.4525 20.3152 18.7346 20.2053 18.9976C20.0954 19.2605 19.9344 19.499 19.7315 19.6992C19.3204 20.1077 18.764 20.3364 18.1845 20.335C17.606 20.3346 17.0509 20.1065 16.6392 19.7001C16.4371 19.4992 16.2766 19.2605 16.1669 18.9975C16.0572 18.7345 16.0005 18.4524 16 18.1675C16 17.5921 16.2295 17.0413 16.6401 16.635C17.0514 16.2279 17.6067 15.9997 18.1854 16C18.7651 16 19.321 16.2287 19.7315 16.635C20.1412 17.0413 20.3716 17.5921 20.3716 18.1675Z'
										fill='white'
									/>
								</svg>
							</SocialIcon>

							{/* </a> */}
						</div>

						<div>
							<SocialIcon href='https://www.instagram.com/artfiglobal/'>
								{/* <a href='https://www.instagram.com/artfiglobal/'> */}
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='lg:w-[48px] md:w-[32px] w-[50px] border border-blue-500 border-r-0 rounded-xl'
									viewBox='0 0 48 48'
									fill='none'>
									<circle
										cx='24'
										cy='24'
										r='24'
										fill='#090909'
									/>
									<path
										d='M22.4999 22.1362C20.9229 22.1362 19.636 23.4231 19.636 25.0001C19.636 26.577 20.9229 27.8639 22.4999 27.8639C24.0768 27.8639 25.3637 26.577 25.3637 25.0001C25.3637 23.4231 24.0768 22.1362 22.4999 22.1362ZM31.0893 25.0001C31.0893 23.8141 31.1001 22.6389 31.0335 21.4551C30.9669 20.0801 30.6532 18.8598 29.6477 17.8543C28.6401 16.8467 27.4219 16.5352 26.0469 16.4686C24.861 16.402 23.6858 16.4127 22.502 16.4127C21.3161 16.4127 20.1409 16.402 18.9571 16.4686C17.5821 16.5352 16.3618 16.8489 15.3563 17.8543C14.3487 18.862 14.0372 20.0801 13.9706 21.4551C13.904 22.6411 13.9147 23.8163 13.9147 25.0001C13.9147 26.1838 13.904 27.3612 13.9706 28.545C14.0372 29.92 14.3508 31.1403 15.3563 32.1458C16.3639 33.1534 17.5821 33.4649 18.9571 33.5315C20.143 33.5981 21.3182 33.5874 22.502 33.5874C23.6879 33.5874 24.8631 33.5981 26.0469 33.5315C27.4219 33.4649 28.6422 33.1512 29.6477 32.1458C30.6553 31.1381 30.9669 29.92 31.0335 28.545C31.1022 27.3612 31.0893 26.186 31.0893 25.0001ZM22.4999 29.4065C20.0614 29.4065 18.0934 27.4385 18.0934 25.0001C18.0934 22.5616 20.0614 20.5936 22.4999 20.5936C24.9383 20.5936 26.9063 22.5616 26.9063 25.0001C26.9063 27.4385 24.9383 29.4065 22.4999 29.4065ZM27.0868 21.4422C26.5174 21.4422 26.0577 20.9825 26.0577 20.4131C26.0577 19.8438 26.5174 19.384 27.0868 19.384C27.6561 19.384 28.1159 19.8438 28.1159 20.4131C28.116 20.5483 28.0895 20.6822 28.0379 20.8072C27.9862 20.9321 27.9104 21.0456 27.8148 21.1412C27.7192 21.2368 27.6057 21.3126 27.4808 21.3643C27.3559 21.4159 27.222 21.4424 27.0868 21.4422Z'
										fill='white'
									/>
								</svg>
								{/* </a> */}
							</SocialIcon>
						</div>
						<div>
							<SocialIcon href='https://www.youtube.com/@artfi'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='lg:w-[48px] md:w-[32px] w-[50px] border border-blue-500 border-r-0 rounded-xl'
									viewBox='0 0 48 48'
									fill='none'>
									<circle
										cx='24'
										cy='24'
										r='24'
										fill='#090909'
									/>
									<path
										d='M32.6338 19.8867C32.5314 19.5248 32.3312 19.1947 32.0532 18.9294C31.7751 18.664 31.429 18.4726 31.0491 18.3743C29.6407 18.006 24.0062 18 24.0062 18C24.0062 18 18.3726 17.994 16.9633 18.346C16.5837 18.4489 16.2383 18.643 15.9601 18.9096C15.682 19.1763 15.4805 19.5065 15.375 19.8687C15.0036 21.2098 15 23.9914 15 23.9914C15 23.9914 14.9964 26.7868 15.3651 28.1142C15.572 28.8481 16.1791 29.4279 16.9507 29.6257C18.3735 29.994 23.9927 30 23.9927 30C23.9927 30 29.6273 30.006 31.0357 29.6549C31.4156 29.5567 31.7621 29.3657 32.0408 29.1009C32.3195 28.8361 32.5209 28.5066 32.6248 28.145C32.9972 26.8047 32.9999 24.024 32.9999 24.024C32.9999 24.024 33.0179 21.2278 32.6338 19.8867ZM22.2039 26.5684L22.2084 21.4299L26.8914 24.0034L22.2039 26.5684Z'
										fill='white'
									/>
								</svg>
							</SocialIcon>
						</div>
					</div>
				</div>
				<div className='text-center text-white lg:py-12 '>
					<h1>Copyright @2023 Artfi. All rights Reserved</h1>
				</div>
			</div>
		</div>
	);
};

export default SocialIcons;
