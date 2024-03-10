import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Team from "./Team";
import Blog from "./Blog";
import BlogDetail from "./BlogDetail";
import NotFound from "./NotFound";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<nav>
					<Link to="/">Home</Link>
					<Link to="/Blog">Blog</Link>
					<Link to="/About">About</Link>
				</nav>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="About" element={<About />}>
						<Route path="Team" element={<Team />} />
					</Route>
					<Route path="Blog" element={<Blog />} />
					<Route path="Blog/:slug" element={<BlogDetail />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</header>
		</div>
	);
}

export default App;
