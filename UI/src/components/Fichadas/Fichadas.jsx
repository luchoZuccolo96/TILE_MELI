import React, { useContext } from "react";
// import { dataContext } from "../../App";
import { Link } from "react-router-dom";
import data from "../../data/prd/FICHADAS/Estado.json";

const Fichadas = () => {
	// const data = useContext(dataContext);
	// console.log(data);

	return (
		<>
			<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
				<div className="flex justify-center text-center ">
					<div className="ml-1">
						<p className="text-gray-900  whitespace-no-wrap">Fichadas</p>
					</div>
				</div>
			</td>
			<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
				<p className="text-gray-900 whitespace-no-wrap">{data.Fecha}</p>
			</td>
			<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
				<span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
					<span
						aria-hidden="true"
						className="absolute inset-0 bg-green-200 rounded-full opacity-50"
					></span>
					<span className="relative">{data.Estado}</span>
				</span>
			</td>
			<td className="bg-white border-b border-gray-200">
				<div className="mx-auto flex gap-10 ">
					<div className="w-auto h-auto">
						<div className="flex-1 h-full ">
							<Link to="/Fichadas1">
								<button className="relative">
									<div className="flex items-center justify-center flex-1 h-full p-2 bg-blue-800 text-white shadow rounded-full  focus:outline-none sm:w-auto  hover:bg-blue-500 focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-4 w-4"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
										</svg>
									</div>
								</button>
							</Link>
						</div>
					</div>
				</div>
			</td>
		</>
	);
};

export default Fichadas;
