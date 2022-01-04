import React from 'react'

const ProductSkeleton = () => {
    return (
    <div className="flex flex-col justify-between m-4 ">
	<div
		className="relative flex flex-col md:flex-row  rounded-md shadow-lg p-3 max-w-xl md:w-96 lg:w-96 border border-white bg-white justify-around">
		<div className="w-20 bg-white grid place-items-center">
			<span className="rounded-full bg-gray-200 animate-pulse h-24 w-24 pr-20"></span>
    	</div>
			<div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
				<div className="flex justify-between item-center">
					<div className="flex items-center">
						<p className="text-gray-600 font-medium text-xs ml-1">
							<span className="text-gray-500 font-normal text-xs bg-gray-200 w-full animate-pulse h-2"></span>
						</p>
					</div>
					<div className="px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block bg-gray-200 animate-pulse h-5 w-20"></div>
				</div>
				<h3 className="font-medium text-gray-800 md:text-md text-md text-left bg-gray-200 w-full animate-pulse h-8"></h3>
				<p className="md:text-xs text-gray-500 text-base font-normal text-left bg-gray-200 w-full animate-pulse h-2"></p>
				<p className="md:text-xs text-gray-500 text-base font-normal text-left bg-gray-200 w-full animate-pulse h-2"></p>
				<p className="md:text-xs text-gray-500 text-base font-normal text-left bg-gray-200 w-full animate-pulse h-2"></p>
				<p className="md:text-xs text-gray-500 text-base font-normal text-left bg-gray-200 w-full animate-pulse h-2"></p>
				<p className="md:text-xs text-gray-500 text-base font-normal text-left bg-gray-200 w-full animate-pulse h-2"></p>
                <div className="flex items-center justify-between">
                    <p className="text-md font-medium text-gray-800 bg-gray-200 w-20 h-8 animate-pulse rounded-md">
                        <span className="font-normal text-gray-600 text-base"></span>
                    </p>
                    <button className="px-5 py-2 rounded-md text-white text-xs bg-gray-200 w-20 animate-pulse h-8">
                    </button>
                </div>
			</div>
		</div>
	</div>





    // <div class="bg-white p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none ">
    //   {/* <div class="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-200 animate-pulse" ></div>
    //   <div class="flex flex-col flex-1 gap-5 sm:p-2">
    //     <div class="flex flex-1 flex-col gap-3">
    //       <div class="bg-gray-200 w-full animate-pulse h-14 rounded-2xl" ></div>
    //       <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
    //       <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
    //       <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
    //       <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
    //     </div>
    //     <div class="mt-auto flex gap-3">
    //       <div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full" ></div>
    //       <div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full ml-auto" ></div>
    //     </div>
    //   </div>
    // </div> */}
    )
}

export default ProductSkeleton
