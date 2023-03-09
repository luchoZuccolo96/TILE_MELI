import React from "react";
import { Link } from "react-router-dom";
// import data from "../../data/prd/INFOCONTROL/Estado2.json";
import data from "../../data/INFOCONTROL/folder_execution-a7451d17-da0f-48bf-90ec-bdded72e7cec-2023.01.22/estado_execution-a7451d17-da0f-48bf-90ec-bdded72e7cec-2023.01.22.json";

const Infocontrol1 = () => {
	return (
		<div className="container max-w-3xl px-4 mx-auto sm:px-8">
			<div className="py-8">
				<div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
					<div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
						<table className="min-w-full leading-normal">
							<thead>
								<tr>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-boold text-center text-gray-800 uppercase bg-white border-b border-gray-200"
									>
										FECHA
									</th>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-boold text-center text-gray-800 uppercase bg-white border-b border-gray-200"
									>
										status
									</th>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-boold text-center text-gray-800 uppercase bg-white border-b border-gray-200"
									>
										Registro
									</th>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-boold text-center text-gray-800 uppercase bg-white border-b border-gray-200"
									></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
										<p className="text-gray-900 whitespace-no-wrap">
											{data.Fecha}
										</p>
									</td>
									<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
										<span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
											<span
												aria-hidden="true"
												className="absolute inset-0 bg-red-200 rounded-full opacity-50"
											></span>
											<span className="relative">Con Error</span>
										</span>
									</td>
									<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
										<p className="text-gray-900 whitespace-no-wrap">
											{data.Transacciones}
										</p>
									</td>
									<td className="bg-white border-b border-gray-200">
										<div className="mx-auto flex gap-10">
											<div className="w-auto h-auto">
												<div className="flex-1 h-full">
													<Link to="/Infocontrol2">
														<button className="relative">
															<div className="flex items-center justify-center flex-1 h-full p-2 bg-blue-800 text-white shadow rounded-full  focus:outline-none sm:w-auto  hover:bg-blue-500 focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40">
																<svg
																	xmlns="http://www.w3.org/2000/svg"
																	className="h-4 w-4"
																	fill="none"
																	viewBox="0 0 24 24"
																	stroke="currentColor"
																>
																	<path
																		stroke-width="2"
																		d="M12 6v6m0 0v6m0-6h6m-6 0H6"
																	/>
																</svg>
															</div>
														</button>
													</Link>
												</div>
											</div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Infocontrol1;
