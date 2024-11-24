"use client";
import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import Link from "next/link";
import WaitlistPopup from "./Popup";

const HeroSection = () => {
	// const [showIcons, setShowIcons] = useState(false);
	const texts = ["Institutions", "Builders", "Gallaries", "Artists", "Users"];
	const [currentIndex, setCurrentIndex] = useState(0);
	const [visibleText, setVisibleText] = useState("");
	const [isErasing, setIsErasing] = useState(false);
	const [typingSpeed, setTypingSpeed] = useState(150);
		 const [isPopupOpen, setIsPopupOpen] = useState(false);
			const openPopup = () => setIsPopupOpen(true);
			const closePopup = () => setIsPopupOpen(false);
	useEffect(() => {
		const typeText = () => {
			const currentText = texts[currentIndex];
			let index = visibleText.length;

			// If we're not currently erasing, type out the current text
			if (!isErasing && index < currentText.length) {
				setVisibleText(currentText.substring(0, index + 1));
				setTypingSpeed(200);
			}

			// Once the current text is fully typed out, set isErasing to true after a delay
			else if (!isErasing && index === currentText.length) {
				setIsErasing(true);
				setTypingSpeed(1000); // Delay before starting to erase
			}

			// If we're erasing, erase the text letter by letter
			else if (isErasing && index > 0) {
				setVisibleText(currentText.substring(0, index - 1));
				setTypingSpeed(100);
			}

			// Once text is fully erased, move on to the next text and set isErasing to false
			else if (isErasing && index === 0) {
				setIsErasing(false);
				setCurrentIndex((currentIndex + 1) % texts.length);
				setTypingSpeed(500); // Small delay before typing the next text
			}
		};

		const typingTimer = setTimeout(typeText, typingSpeed);
		return () => clearTimeout(typingTimer);
	}, [visibleText, isErasing]);
	return (
		<div className='relative h-screen w-full overflow-hidden md:-mb-[40%] lg:-mb-[0%]'>
			<video
				className='absolute top-0 left-0 w-full h-[700px] 2xl:h-[85vh] object-cover'
				autoPlay
				loop
				muted
				playsInline
				preload='auto'>
				<source src='/Video.mp4' type='video/mp4' />
				<source src='/Video.webm' type='video/webm' />
				Your browser does not support the video tag.
			</video>

			{/* Overlay for better text visibility */}
			<div className='absolute inset-0 opacity-70'></div>

			{/* Content */}
			<div className='relative z-10 flex flex-col items-center justify-center h-full text-white px-4'>
				<nav className='absolute top-0 left-0 right-0 p-4'>
					<ul className='flex justify-between space-x-6 md:px-10 px-4'>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='90'
								height='21'
								viewBox='0 0 90 21'
								fill='none'>
								<path
									d='M8.81022 1.74866L17.6476 20.7831H14.1263L12.588 20.7831H4.81885L3.52137 20.7831H0L8.81022 1.74866ZM0 20.7831L8.70343 20.7831L8.81022 4.02899L0 20.7831Z'
									fill='white'
								/>
								<path
									d='M84.7382 20.6525C84.004 20.6253 83.2879 20.4893 82.59 20.2446C81.9011 19.9908 81.2938 19.6509 80.7681 19.2249C80.2515 18.7898 79.8753 18.2913 79.6396 17.7293L81.5975 16.8864C81.7334 17.1946 81.9782 17.4846 82.3317 17.7565C82.6852 18.0285 83.093 18.246 83.5553 18.4091C84.0176 18.5723 84.4844 18.6539 84.9557 18.6539C85.4542 18.6539 85.921 18.5768 86.3561 18.4227C86.7912 18.2686 87.1447 18.0421 87.4166 17.7429C87.6976 17.4348 87.838 17.0677 87.838 16.6417C87.838 16.1885 87.684 15.835 87.3758 15.5812C87.0767 15.3183 86.696 15.1144 86.2337 14.9693C85.7805 14.8153 85.3183 14.6702 84.8469 14.5343C83.9133 14.2986 83.0794 14.0176 82.3453 13.6913C81.6111 13.356 81.031 12.9345 80.605 12.4269C80.188 11.9102 79.9796 11.2531 79.9796 10.4555C79.9796 9.61252 80.2107 8.88286 80.6729 8.26651C81.1443 7.65016 81.7606 7.1743 82.522 6.83893C83.2834 6.50356 84.0991 6.33588 84.9693 6.33588C86.066 6.33588 87.0676 6.57154 87.974 7.04287C88.8804 7.5142 89.5557 8.15321 89.9998 8.95991L88.1644 10.034C88.0103 9.70769 87.7746 9.42217 87.4574 9.17744C87.1401 8.92365 86.7776 8.72424 86.3697 8.57922C85.9618 8.4342 85.5449 8.35715 85.1188 8.34809C84.5931 8.32996 84.0991 8.39794 83.6369 8.55203C83.1837 8.70612 82.8166 8.94178 82.5356 9.25902C82.2637 9.5672 82.1277 9.95242 82.1277 10.4147C82.1277 10.8679 82.2727 11.2123 82.5628 11.448C82.8619 11.6836 83.2471 11.874 83.7185 12.019C84.1989 12.155 84.72 12.3136 85.282 12.4949C86.1068 12.7577 86.8773 13.0614 87.5933 13.4058C88.3094 13.7502 88.8849 14.1808 89.32 14.6974C89.7642 15.2141 89.9817 15.8531 89.9726 16.6145C89.9726 17.4484 89.7234 18.178 89.2248 18.8034C88.7263 19.4198 88.0782 19.8911 87.2806 20.2174C86.492 20.5437 85.6446 20.6887 84.7382 20.6525Z'
									fill='white'
								/>
								<path
									d='M75.0417 20.394V0H77.3259V20.394H75.0417Z'
									fill='white'
								/>
								<path
									d='M69.8807 6.79744H72.1649V20.3935H69.8807L69.7856 18.0957C69.3596 18.8843 68.7704 19.5233 68.0181 20.0128C67.2748 20.5022 66.3866 20.747 65.3533 20.747C64.3562 20.747 63.4226 20.5611 62.5525 20.1895C61.6823 19.8088 60.9119 19.2876 60.2412 18.626C59.5795 17.9552 59.0629 17.1848 58.6912 16.3146C58.3196 15.4445 58.1338 14.5064 58.1338 13.5003C58.1338 12.5304 58.3151 11.615 58.6776 10.7539C59.0402 9.8928 59.5432 9.14048 60.1868 8.49694C60.8394 7.84433 61.5917 7.33674 62.4437 6.97418C63.2957 6.60256 64.2112 6.41675 65.1901 6.41675C66.2597 6.41675 67.1978 6.67054 68.0045 7.17812C68.8112 7.67665 69.4638 8.32472 69.9623 9.12235L69.8807 6.79744ZM65.3125 18.5308C66.2098 18.5308 66.9848 18.3133 67.6374 17.8782C68.2991 17.4341 68.8067 16.8358 69.1602 16.0835C69.5227 15.3312 69.704 14.5018 69.704 13.5954C69.704 12.6709 69.5227 11.837 69.1602 11.0938C68.7976 10.3415 68.2855 9.74777 67.6238 9.3127C66.9712 8.86856 66.2008 8.64649 65.3125 8.64649C64.4151 8.64649 63.5994 8.86856 62.8652 9.3127C62.131 9.75684 61.5464 10.3551 61.1113 11.1074C60.6853 11.8506 60.4723 12.68 60.4723 13.5954C60.4723 14.5109 60.6944 15.3448 61.1385 16.0971C61.5826 16.8404 62.1718 17.4341 62.906 17.8782C63.6402 18.3133 64.4423 18.5308 65.3125 18.5308Z'
									fill='white'
								/>
								<path
									d='M56.4957 11.9367V20.3935H54.2116V12.4398C54.2116 11.7509 54.0439 11.1255 53.7085 10.5635C53.3731 10.0016 52.9245 9.55743 52.3625 9.23112C51.8005 8.89576 51.1751 8.72807 50.4862 8.72807C49.8064 8.72807 49.181 8.89576 48.61 9.23112C48.048 9.55743 47.5994 10.0016 47.264 10.5635C46.9286 11.1255 46.7609 11.7509 46.7609 12.4398V20.3935H44.4768V6.79744H46.7609V8.49694C47.2413 7.86246 47.8486 7.3594 48.5828 6.98778C49.317 6.60709 50.1146 6.41675 50.9757 6.41675C51.9909 6.41675 52.9154 6.66601 53.7493 7.16453C54.5922 7.65399 55.2584 8.31566 55.7479 9.14955C56.2464 9.98344 56.4957 10.9125 56.4957 11.9367Z'
									fill='white'
								/>
								<path
									d='M39.007 6.79793H41.2911V20.3939H39.007V6.79793ZM40.1762 4.58177C39.8137 4.58177 39.51 4.46394 39.2653 4.22828C39.0206 3.99261 38.8982 3.69803 38.8982 3.34454C38.8982 2.99104 39.0206 2.69646 39.2653 2.4608C39.51 2.22513 39.8091 2.1073 40.1626 2.1073C40.5161 2.1073 40.8152 2.22513 41.06 2.4608C41.3047 2.69646 41.4271 2.99104 41.4271 3.34454C41.4271 3.69803 41.3047 3.99261 41.06 4.22828C40.8243 4.46394 40.5297 4.58177 40.1762 4.58177Z'
									fill='white'
								/>
								<path
									d='M36.7021 9.08245H33.6158L33.6022 20.3943H31.3181L31.3317 9.08245H28.9932V6.79832H31.3317L31.3181 2.52917H33.6022L33.6158 6.79832H36.7021V9.08245Z'
									fill='white'
								/>
								<path
									d='M19.728 20.3935V6.79744H22.0122V8.49694C22.4926 7.86246 23.0998 7.3594 23.834 6.98778C24.5682 6.60709 25.3658 6.41675 26.2269 6.41675C26.7526 6.41675 27.2602 6.48473 27.7497 6.62069L26.8251 8.90482C26.4535 8.78699 26.091 8.72807 25.7375 8.72807C25.0577 8.72807 24.4322 8.89576 23.8612 9.23112C23.2992 9.55743 22.8506 10.0016 22.5152 10.5635C22.1798 11.1255 22.0122 11.7509 22.0122 12.4398V20.3935H19.728Z'
									fill='white'
								/>
							</svg>
						</div>
						<Link href={"https://www.art20.io/"} target='_blank'>
							<div className='font-extrabold font-agrandir text-[12px] flex gap-1 items-center'>
								ART-20{" "}
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='14'
									height='8'
									viewBox='0 0 14 8'
									fill='none'>
									<path
										d='M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM1 4.5L13 4.5V3.5L1 3.5V4.5Z'
										fill='white'
									/>
								</svg>
							</div>
						</Link>
					</ul>
				</nav>

				<div
					className={`${styles.cash} lg:text-[80px] md:text-[40px] text-[24px] lg:leading-[85px] font-extrabold font-agrandir px-6 md:px-0 -mt-20 lg:-mt-0 md:-mt-[50%]`}>
					<h1 className='mb-4'>NEW ERA OF DIGITAL OBJECTS FOR</h1>
					<span className='text-[#353434] lg:text-[100px] md:text-[60px] text-[30px] mt-8'>
						{visibleText}|
					</span>
				</div>

				<button
					// href={"https://artinal-dashboard.vercel.app/"}
					// target='_blank'
					className='bg-white text-black border border-black px-8 py-3 mt-4 rounded-md font-semibold hover:bg-opacity-90 transition'
					onClick={openPopup}>
					START BUILDING
				</button>

				<div className='lg:flex  mx-auto lg:ml-[50%] lg:w-[48%]  justify-between items-center lg:mt-[100px] '>
					{/* Scroll Down button */}
					<button className='absolute z-40 lg:mt-16 md:ml-[130px] ml-[130px] lg:ml-0 md:mt-[180px] mt-[220px] transform lg:-translate-x-1/2  animate-bounce'>
						<svg
							width='18'
							height='50'
							viewBox='0 0 18 50'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M9.69361 29.6495L17.7513 20.4362C18.121 20.0137 18.0726 19.3748 17.6455 19.0109C17.2178 18.6456 16.5717 18.6921 16.202 19.1147L10.0265 26.1768V1.01089C10.0265 0.452881 9.56877 0 9.00321 0C8.43765 0 7.97988 0.452881 7.97988 1.01089V26.4308L4.34299 22.4055L1.82561 19.2609C1.47495 18.8235 0.831623 18.7487 0.388182 19.0951C0.133032 19.2946 0 19.5905 0 19.889C0 20.1087 0.0716343 20.3298 0.221039 20.5158L2.77798 23.7055L8.15658 29.6617C8.35237 29.8787 8.63345 30.002 8.92817 30C9.2222 29.9973 9.50123 29.8706 9.69361 29.6495Z'
								fill='white'
							/>
						</svg>
					</button>

					<p className='mt-8 text-[14px] 2xl:text-[18px] 3xl:text-[20px] lg:w-[363px] w-[276px] text-center lg:ml-[15%] font-bold  lg:text-left text-white mb-6'>
						Artinals represent a cutting-edge protocol built on the
						Sui Network, enhancing Sui&apos;s capacity to handle and
						generate diverse digital objects!
					</p>
					{/* Social Media Icons */}
					<div className='flex space-x-6 justify-center '>
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
								rel='noop'>
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

				{/* WaitlistPopup component */}
				<WaitlistPopup isOpen={isPopupOpen} onClose={closePopup} />

				{/* <div className='absolute bottom-4 left-4 flex space-x-4'>
				</div> */}
			</div>
		</div>
	);
};

export default HeroSection;
