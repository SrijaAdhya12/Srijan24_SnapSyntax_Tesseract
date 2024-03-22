import image from '../assets/card-img.jpg'
const Hero = () => {
	return (
		<section className="self-center p-20 px-auto flex justify-center flex-col max-w-screen-md w-full">
			<div className="self-center w-full">
				<h1 className="uppercase font-bold text-center text-[90px] leading-[75px]">
					Senior
					<br />
					Experience
					<br />
					Designer <strong>©</strong>
				</h1>
				<div className="flex flex-row pt-5">
					<h6 className="text-sm text-gray-800 pl-[110px] uppercase font-bold">
						Currently crafting experiences
						<br />
						experiences at CROSBY
					</h6>
					<h6 className="text-sm text-gray-800 pl-[110px] uppercase font-bold">[2021 - PRESENT]</h6>
				</div>
				<div className="flex items-center justify-center">
					<img src={image} alt="img" className="rounded-2xl mt-24 drop-shadow-2xl w-[300px]" />
				</div>
			</div>
		</section>
	)
}

export default Hero
