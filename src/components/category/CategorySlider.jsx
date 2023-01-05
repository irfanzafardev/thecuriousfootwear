import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./categoryslider.css";
import axios from "axios";
import { Link } from "react-router-dom";

const CategorySlider = () => {
	const [categories, setCategories] = useState([]);

	const rootAPI = "https://thecuriousfootwear-server.vercel.app/api/category";
	const fetchCategories = async () => {
		const { data } = await axios.get(rootAPI + "/all");
		setCategories(data);
	};
	useEffect(() => {
		fetchCategories();
	}, []);
	function SampleNextArrow(props) {
		const { className, style, onClick } = props;
		return <div className={className} style={{ ...style, display: "block", background: "transparent" }} onClick={onClick} />;
	}
	const settings = {
		dots: true,
		infinite: false,
		centerMode: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<section className="category-slider">
			<div className="row">
				<div className="col-12 col-lg-6">
					<div className="slider ">
						<Slider {...settings}>
							{categories.map((item) => (
								<div className="item" key={item.categoryId}>
									<Link to={`/category?cat=${item.name}`} className="link">
										<div className="btn btn-outline-dark">{item.name}</div>
									</Link>
								</div>
							))}
						</Slider>
					</div>
				</div>
				<div className="col-12 col-lg-12">
					<div className="d-flex justify-content-center justify-content-lg-end">
						<button className="btn btn-outline-dark">See all</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CategorySlider;
