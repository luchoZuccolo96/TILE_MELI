import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Fichadas1 from "./components/Fichadas/Fichadas1";
import Fichadas2 from "./components/Fichadas/Fichadas2";
import Ausencias1 from "./components/Ausencias/Ausencias1";
import Ausencias2 from "./components/Ausencias/Ausencias2";
import Infocontrol1 from "./components/Infocontrol/Infocontrol1";
import Infocontrol2 from "./components/Infocontrol/Infocontrol2";
// import axios from "axios";
import "./App.css";
export const dataContext = createContext();

function App() {
	// const url = "";
	const [response, setResponse] = useState([]);

	// useEffect(() => {
	// 	axios.get(url).then((res) => {
	// 		setResponse(res.data);
	// 	});
	// }, []);

	return (
		<dataContext.Provider value={response}>
			<div className="App">
				<Routes>
					<Route path="/" element={<Navbar />}></Route>
					<Route path="Fichadas1" element={<Fichadas1 />} />
					<Route path="Fichadas2" element={<Fichadas2 />} />
					<Route path="Ausencias1" element={<Ausencias1 />} />
					<Route path="Ausencias2" element={<Ausencias2 />} />
					<Route path="Infocontrol1" element={<Infocontrol1 />} />
					<Route path="Infocontrol2" element={<Infocontrol2 />} />
				</Routes>
			</div>
		</dataContext.Provider>
	);
}

export default App;
