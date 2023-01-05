import React from "react";

const Section = ({ children }) => {
	return (
		<section
			style={{
				margin: "20px 0 20px 0",
				// display: "block",
			}}
		>
			{children}
		</section>
	);
};

export default Section;
