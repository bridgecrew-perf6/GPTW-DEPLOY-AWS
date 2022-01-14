import React from 'react'

const Product = ({title,desc,img,price,stars,review,productUrl}) => {
    return (
	<div className="flex flex-col justify-between m-4">
		<div className="relative flex flex-col md:flex-row  rounded-md shadow-lg p-3 max-w-md md:max-w-lg border border-white bg-white justify-around dark:bg-secondaryDark dark:border-transparent">
			<div className="w-20 bg-white grid place-items-center dark:bg-secondaryDark">
				<img src={img} alt="tailwind logo" className="rounded-xl" />
			</div>
				<div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3 dark:bg-secondaryDark">
					<div className="flex justify-between item-center">
						<div className="flex items-center">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-yellow-500" viewBox="0 0 20 20"
								fill="currentColor">
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
							<p className="text-gray-600 font-medium text-xs ml-1">
								{stars}
								<span className="text-gray-500 font-normal text-xs">{review}</span>
							</p>
						</div>
						<div className="bg-red-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
							Best Seller</div>
					</div>
					<h3 className="font-medium text-gray-800 md:text-md text-md text-left dark:text-white">{title}</h3>
					<p className=" text-gray-500 text-sm md:text-xs lg:text-xs font-normal text-left dark:text-gray-400">{desc}</p>
					<div className="flex items-center justify-between">
						<p className="text-lg md:text-lg  lg:text-xl font-medium text-gray-800 dark:text-white">
							{price}
							<span className="font-normal text-gray-600 text-base dark:text-gray-400">/month</span>
						</p>
						<div className="flex items-center justify-center">
							<a href={productUrl} target='_blank'>
						<button className="px-5 py-2 md:px-2 md:py-1 md:ml-3 lg:px-5 lg:py-2 bg-primary rounded-md text-white text-xs flex justify-center items-center dark:bg-darkBtn dark:hover:bg-indigo-700">
						Know more
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3 ml-2">
  							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</button>
						</a>
						</div>
					</div>
				</div>
		</div>
	</div>
    )
}

export default Product
