
import {Link, Outlet } from "react-router-dom";

export default function About() {
	return (
		<>
			<h1>About</h1>
			<h2>Ini adalah Halaman About</h2>
			<ul>
				<li>
					<Link to="/About/Team">Team</Link>
				</li>
			</ul>
			<Outlet/>
		</>
	);
}
