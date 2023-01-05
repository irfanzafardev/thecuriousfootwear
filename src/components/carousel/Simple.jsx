import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 10,
		paritialVisibilityGutter: 60,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
		paritialVisibilityGutter: 50,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		paritialVisibilityGutter: 30,
	},
};

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple = () => {
	const [categories, setCategories] = useState([]);

	const rootAPI = "https://thecuriousfootwear-server.vercel.app/api/category";
	const fetchCategories = async () => {
		const { data } = await axios.get(rootAPI + "/all");
		setCategories(data);
	};
	useEffect(() => {
		fetchCategories();
	}, []);
	return (
		<Carousel ssr itemClass="image-item mt-5" responsive={responsive}>
			{categories.map((item) => (
				<div className="item" key={item.categoryId}>
					<Link to={`/category?cat=${item.name}`} className="link">
						<div className="btn btn-outline-dark">{item.name}</div>
					</Link>
				</div>
			))}
		</Carousel>
	);
};

export default Simple;
