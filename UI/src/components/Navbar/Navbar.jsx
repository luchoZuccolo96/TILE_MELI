import React from "react";
import Fichadas from "../Fichadas/Fichadas";
import Ausencias from "../Ausencias/Ausencias";
import Infocontrol from "../Infocontrol/Infocontrol";

const Navbar = () => {
	return (
		<div className="container max-w-3xl px-4 mx-auto sm:px-8">
			<div className="py-16">
				<div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
					<div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
						<table className="min-w-full leading-normal">
							<thead>
								<tr>
									<th
										scope="col"
										className="px-5 py-3  text-sm font-boold text-center text-gray-800 uppercase bg-white border-b border-gray-700"
									>
										Interfaz
									</th>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-boold text-center text-gray-800 uppercase bg-white border-b border-gray-700"
									>
										Fecha
									</th>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-boold text-center text-gray-800 uppercase bg-white border-b border-gray-700"
									>
										status
									</th>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-boold text-center text-gray-800 uppercase bg-white border-b border-gray-700"
									></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<Fichadas />
								</tr>
								<tr>
									<Ausencias />
								</tr>
								<tr>
									<Infocontrol />
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
