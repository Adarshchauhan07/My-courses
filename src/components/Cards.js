import Card from "./Card";
import React, { useState, useEffect } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Cards = ({ apiUrlData, categoryData }) => {
	
	const [likeCard, setLikeCard] = useState([]);

	function getData() {
		if (categoryData === "All") {
			let array = [];
			Object.values(apiUrlData).forEach((groupData) => {
				groupData.forEach((course) => {
					array.push(course);
				});
			});
			return array;
		} 
		else {
			return apiUrlData[categoryData];
		}
	}

	return (
		<div className="m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			{getData()?.map((course) => (
				<Card
					key={course.id}
					course={course}
					likeCard={likeCard}
					setLikeCard={setLikeCard}
				/>
			))}
		</div>
	);
};

export default Cards;
