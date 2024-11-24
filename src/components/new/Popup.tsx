import React, { useState } from "react";
import { X, CheckCircle, AlertCircle } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WaitlistPopup = ({ isOpen, onClose }: any) => {
	const [email, setEmail] = useState("");
	const [state, setState] = useState("join"); // 'join', 'loading', 'success', 'error'

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault();
	setState("loading");

	try {
		const response = await fetch("/api/subscribe", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				isArtinals: true,
			}),
		});

		const data = await response.json();

		if (!response.ok) {
			if (response.status === 409) {
				setState("error");
				toast.error("This email is already registered!");
				return;
			} else if (response.status === 400) {
				setState("error");
				toast.error(data.error || "Please enter a valid email");
				return;
			} else {
				throw new Error(data.error || "Something went wrong");
			}
		}

		setEmail("");
		setState("success");
		toast.success("Successfully joined the waitlist!");
	} catch (err: any) {
		setState("error");
		toast.error(err.message || "Something went wrong");
		console.error("Subscription error:", err.message);
	}
};


	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
			<div className='bg-[#004FE1] text-white rounded-[10px] p-6 w-[95%] max-w-md lg:w-[457px] lg:h-[306px] lg:p-[40px]'>
				{state === "join" && (
					<>
						<div className='flex justify-between items-center mb-4 md:text-[22px] text-[16px]'>
							<h2 className='font-extrabold text-white font-agrandir w-[80%]'>
								Audit is in progress and will start soon!
							</h2>

							<svg
								onClick={onClose}
								className='cursor-pointer -mt-7'
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'>
								<path
									d='M18 6L6 18'
									stroke='white'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
								<path
									d='M6 6L18 18'
									stroke='white'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
						</div>
						<form onSubmit={handleSubmit}>
							<input
								type='email'
								placeholder='Email Address'
								className='w-full p-2.5 border border-white  bg-[#004FE1] rounded-md text-[16px] font-light mb-8 mt-4  text-[#FFF]'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
							<button
								type='submit'
								className='w-full bg-[#FFF] text-black text-[12px] uppercase font-agrandir font-extrabold py-3 rounded-md hover:bg-gray-400 transition-colors'>
								Sign up to get notified!{" "}
							</button>
						</form>
					</>
				)}
				{state === "loading" && (
					<div className='text-center items-center my-auto mt-10'>
						<div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#D2FB97] mx-auto mb-4'></div>
						<p>Joining waitlist...</p>
					</div>
				)}
				{state === "success" && (
					<div className='text-center items-center justify-between flex flex-col p-[32px] -mt-5'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='65'
							height='66'
							viewBox='0 0 65 66'
							fill='none'>
							<path
								d='M29.7188 3.69052C31.2695 2.19038 33.7305 2.19038 35.2812 3.69052L39.0055 7.29343C39.8923 8.15127 41.1253 8.5519 42.3469 8.37911L47.4777 7.65339C49.6139 7.35123 51.6049 8.79776 51.9777 10.9229L52.873 16.0268C53.0862 17.242 53.8482 18.2909 54.9381 18.8691L59.5155 21.2978C61.4214 22.309 62.1819 24.6496 61.2344 26.5879L58.9587 31.2433C58.4169 32.3518 58.4169 33.6482 58.9587 34.7567L61.2344 39.4121C62.1819 41.3504 61.4214 43.691 59.5155 44.7022L54.9381 47.1309C53.8482 47.7091 53.0862 48.758 52.873 49.9732L51.9777 55.0771C51.6049 57.2022 49.6139 58.6488 47.4777 58.3466L42.3469 57.6209C41.1253 57.4481 39.8923 57.8487 39.0055 58.7066L35.2812 62.3095C33.7305 63.8096 31.2695 63.8096 29.7188 62.3095L25.9945 58.7066C25.1077 57.8487 23.8747 57.4481 22.6531 57.6209L17.5223 58.3466C15.3861 58.6488 13.3951 57.2022 13.0223 55.0771L12.127 49.9732C11.9138 48.758 11.1518 47.7091 10.0619 47.1309L5.48446 44.7022C3.57855 43.691 2.81807 41.3504 3.76559 39.4121L6.04129 34.7567C6.58313 33.6482 6.58313 32.3518 6.04129 31.2433L3.76559 26.5879C2.81807 24.6496 3.57855 22.309 5.48446 21.2978L10.0619 18.8691C11.1518 18.2909 11.9138 17.242 12.127 16.0268L13.0223 10.9229C13.3951 8.79776 15.3861 7.35123 17.5223 7.65339L22.6531 8.37911C23.8747 8.5519 25.1077 8.15127 25.9945 7.29343L29.7188 3.69052Z'
								fill='#D2FB97'
								fill-opacity='0.8'
							/>
							<path
								d='M29.7188 3.69052C31.2695 2.19038 33.7305 2.19038 35.2812 3.69052L39.0055 7.29343C39.8923 8.15127 41.1253 8.5519 42.3469 8.37911L47.4777 7.65339C49.614 7.35123 51.6049 8.79776 51.9777 10.9229L52.873 16.0268C53.0862 17.242 53.8482 18.2909 54.9381 18.8691L59.5155 21.2978C61.4214 22.309 62.1819 24.6496 61.2344 26.5879L58.9587 31.2433C58.4169 32.3518 58.4169 33.6482 58.9587 34.7567L61.2344 39.4121C62.1819 41.3504 61.4214 43.691 59.5155 44.7022L54.9381 47.1309C53.8482 47.7091 53.0862 48.758 52.873 49.9732L51.9777 55.0771C51.6049 57.2022 49.6139 58.6488 47.4777 58.3466L42.3469 57.6209C41.1253 57.4481 39.8923 57.8487 39.0055 58.7066L35.2812 62.3095C33.7305 63.8096 31.2695 63.8096 29.7188 62.3095L25.9945 58.7066C25.1077 57.8487 23.8747 57.4481 22.6531 57.6209L17.5223 58.3466C15.386 58.6488 13.3951 57.2022 13.0223 55.0771L12.127 49.9732C11.9138 48.758 11.1518 47.7091 10.0619 47.1309L5.48446 44.7022C3.57855 43.691 2.81807 41.3504 3.76559 39.4121L6.04129 34.7567C6.58313 33.6482 6.58313 32.3518 6.04129 31.2433L3.76559 26.5879C2.81807 24.6496 3.57855 22.309 5.48446 21.2978L10.0619 18.8691C11.1518 18.2909 11.9138 17.242 12.127 16.0268L13.0223 10.9229C13.3951 8.79776 15.3861 7.35123 17.5223 7.65339L22.6531 8.37911C23.8747 8.5519 25.1077 8.15127 25.9945 7.29343L29.7188 3.69052Z'
								stroke='#D2FB97'
								stroke-width='4'
							/>
							<path
								d='M22.5 32.6667L29.1667 39.3333L42.5 26'
								stroke='white'
								stroke-width='4'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
						</svg>
						<h2 className='text-[24px] font-bold mb-4 my-4 text-white'>
							Thanks for joining our Waitlist
						</h2>
						<button
							onClick={onClose}
							className='w-full border border-[#FFF] text-black bg-white rounded-3xl py-3 uppercase hover:bg-gray-400 hover:text-white transition-colors'>
							Close
						</button>
					</div>
				)}
				{state === "error" && (
					<div className='text-center'>
						<AlertCircle
							className='mx-auto mb-4 text-red-500'
							size={48}
						/>
						<h2 className='text-[24px] font-bold mb-2'>Oops!</h2>
						<p className=' mb-4 lg:text-[16px]'>
							Something went wrong. Please try again after
							sometime.
						</p>
						<button
							onClick={() => setState("join")}
							className='w-full text-black bg-white border-[#367FBF] border py-3 uppercase rounded-lg hover:bg-gray-400 hover:text-white transition-colors'>
							Try Again
						</button>
					</div>
				)}
			</div>
			<ToastContainer />
		</div>
	);
};

export default WaitlistPopup;
