import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Contact from "./pages/contact";
import Notfound from "./pages/404";
import ScrollToTop from "./components/common/ScrollToTop";

import "./input.css";

function App() {

	return (
		<div className="App">
			<Routes>
				<Route path="/portfolio/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
            <ScrollToTop />
		</div>
	);
}

export default App;
