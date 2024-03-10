import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Team from "./Team";
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<nav>
					<Link to="/">Home</Link>
					<Link to="/About">About</Link>
				</nav>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/About" element={<About />} >
						<Route path="/About/Team" element={<Team />} />
					</Route>
				</Routes>
			</header>
		</div>
	);
}

export default App;
