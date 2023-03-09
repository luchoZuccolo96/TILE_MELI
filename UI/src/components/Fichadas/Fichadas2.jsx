import React from "react";
import data from "../../data/prd/FICHADAS/Estado2.json";

const Fichadas2 = () => {
	return (
		<div className="container ">
			<div className="py-8">
				<div className="px-4 py-4 -mx-4  sm:-mx-8 sm:px-8">
					<div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
						<table className="min-w-full leading-normal">
							<thead>
								<tr>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-boold text-center text-gray-800 uppercase bg-white border-b border-gray-200"
									>
										Empleado
									</th>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-boold text-center text-gray-800 uppercase bg-white border-b border-gray-200"
									>
										ReportaA
									</th>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-boold text-center text-gray-800 uppercase bg-white border-b border-gray-200"
									>
										Nivell11
									</th>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-boold text-center text-gray-800 uppercase bg-white border-b border-gray-200"
									>
										Nivell12
									</th>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-boold text-center text-gray-800 uppercase bg-white border-b border-gray-200"
									>
										Nivell13
									</th>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-boold text-center text-gray-800 uppercase bg-white border-b border-gray-200"
									>
										Nivell14
									</th>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-boold text-center text-gray-800 uppercase bg-white border-b border-gray-200"
									>
										Nivell15
									</th>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-boold text-center text-gray-800 uppercase bg-white border-b border-gray-200"
									>
										Nivell16
									</th>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-boold text-center text-gray-800 uppercase bg-white border-b border-gray-200"
									>
										Puesto
									</th>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-boold text-center text-gray-800 uppercase bg-white border-b border-gray-200"
									>
										Horario
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
										<p className="text-gray-900 whitespace-no-wrap">NULL</p>
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
										<p className="text-gray-900 whitespace-no-wrap">NULL</p>
									</td>
									<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
										<p className="text-gray-900 whitespace-no-wrap">NULL</p>
									</td>
									<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
										<p className="text-gray-900 whitespace-no-wrap">NULL</p>
									</td>
									<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
										<p className="text-gray-900 whitespace-no-wrap">NULL</p>
									</td>
									<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
										<p className="text-gray-900 whitespace-no-wrap">NULL</p>
									</td>
									<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
										<p className="text-gray-900 whitespace-no-wrap">NULL</p>
									</td>
									<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
										<p className="text-gray-900 whitespace-no-wrap">NULL</p>
									</td>
									<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
										<p className="text-gray-900 whitespace-no-wrap">NULL</p>
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

export default Fichadas2;
