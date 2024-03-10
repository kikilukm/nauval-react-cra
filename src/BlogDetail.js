import { useParams } from "react-router-dom";
export default function BlogDetail() {
	const urlParam = useParams();
	console.log(urlParam);
	return (
		<>
			<h1> blog Detail {urlParam.slug}</h1>
			<p>
				lorem ipsum dolor sit amet consectetur adipisicing elit.
				Officiis dolores dignissimos voluptatibus voluptas. Repellendus,
				autem.
			</p>
		</>
	);
}
