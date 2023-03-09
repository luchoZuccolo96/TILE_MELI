import React from "react";
import empleado1 from "../../data/prd/INFOCONTROL/Empleado1.json";
import empleado2 from "../../data/prd/INFOCONTROL/Empleado2.json";
import Paginador from "../Paginador/Paginador";

const Fichadas2 = () => {
	console.log(empleado1);
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
										Reporta
									</th>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-boold text-center text-gray-800 uppercase bg-white border-b border-gray-200"
									>
										Nivell1
									</th>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-boold text-center text-gray-800 uppercase bg-white border-b border-gray-200"
									>
										Nivell2
									</th>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-boold text-center text-gray-800 uppercase bg-white border-b border-gray-200"
									>
										Nivell3
									</th>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-boold text-center text-gray-800 uppercase bg-white border-b border-gray-200"
									>
										Nivell4
									</th>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-boold text-center text-gray-800 uppercase bg-white border-b border-gray-200"
									>
										Nivell5
									</th>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-boold text-center text-gray-800 uppercase bg-white border-b border-gray-200"
									>
										Nivell6
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
										<p className="text-gray-900 whitespace-no-wrap">
											{empleado1.PersonNumber}
										</p>
									</td>
									<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
										<span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
											<span className="relative">
												{empleado1.ReportstoManager}
											</span>
										</span>
									</td>
									<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
										<p className="text-gray-900 whitespace-no-wrap">
											{empleado1.HomeBusinessStructureLevel1}
										</p>
									</td>
									<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
										<p className="text-gray-900 whitespace-no-wrap">
											{empleado1.HomeBusinessStructureLevel2}
										</p>
									</td>
									<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
										<p className="text-gray-900 whitespace-no-wrap">
											{empleado1.HomeBusinessStructureLevel3}
										</p>
									</td>
									<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
										<p className="text-gray-900 whitespace-no-wrap">
											{empleado1.HomeBusinessStructureLevel4}
										</p>
									</td>
									<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
										<p className="text-gray-900 whitespace-no-wrap">
											{empleado1.HomeBusinessStructureLevel5}
										</p>
									</td>
									<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
										<p className="text-gray-900 whitespace-no-wrap">
											{empleado1.HomeBusinessStructureLevel6}
										</p>
									</td>
									<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
										<p className="text-gray-900 whitespace-no-wrap">
											{empleado1.HomePrimaryJob}
										</p>
									</td>
									<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
										<p className="text-gray-900 whitespace-no-wrap">
											{empleado1.HomeLaborCategoryLevel1}
										</p>
									</td>
								</tr>

								<tr>
									<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
										<p className="text-gray-900 whitespace-no-wrap">
											{empleado2.PersonNumber}
										</p>
									</td>
									<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
										<span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
											<span className="relative">
												{empleado2.ReportstoManager}
											</span>
										</span>
									</td>
									<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
										<p className="text-gray-900 whitespace-no-wrap">
											{empleado2.HomeBusinessStructureLevel1}
										</p>
									</td>
									<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
										<p className="text-gray-900 whitespace-no-wrap">
											{empleado2.HomeBusinessStructureLevel2}
										</p>
									</td>
									<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
										<p className="text-gray-900 whitespace-no-wrap">
											{empleado2.HomeBusinessStructureLevel3}
										</p>
									</td>
									<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
										<p className="text-gray-900 whitespace-no-wrap">
											{empleado2.HomeBusinessStructureLevel4}
										</p>
									</td>
									<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
										<p className="text-gray-900 whitespace-no-wrap">
											{empleado2.HomeBusinessStructureLevel5}
										</p>
									</td>
									<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
										<p className="text-gray-900 whitespace-no-wrap">
											{empleado2.HomeBusinessStructureLevel6}
										</p>
									</td>
									<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
										<p className="text-gray-900 whitespace-no-wrap">
											{empleado2.HomePrimaryJob}
										</p>
									</td>
									<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
										<p className="text-gray-900 whitespace-no-wrap">
											{empleado2.HomeLaborCategoryLevel1}
										</p>
									</td>
								</tr>
							</tbody>
						</table>
						<Paginador />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Fichadas2;
