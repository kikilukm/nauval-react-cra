import { Link } from "react-router-dom";
export default function Blog() {
	return (
		<>
			<h1>Blog</h1>
			<ul>
				<li>
					<Link to="Article-1">Article 1</Link>
				</li>
				<li>
					<Link to="Article-2">Article 2</Link>
				</li>
				<li>
					<Link to="Article-3">Article 3</Link>
				</li>
			</ul>
		</>
	);
}
