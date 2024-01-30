import React, { useState, useEffect } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ course, likeCard, setLikeCard }) => {
  function toastHandler() {
    if (likeCard.length !== 0 && likeCard.includes(course.id)) {
      setLikeCard((prev) => {
        return prev.filter((id) => id !== course.id);
      });
      toast.warning("Mja nhi aaya is course me 😅");
    } 
    else {
      setLikeCard((prev) => [...prev, course.id]);
      toast.success("Ye  mujhe Pasand aaya❤️");
    }
  }

  return (
    <div className="relative max-w-xs mx-auto bg-white rounded-xl overflow-hidden shadow-md">
      <img
        className="w-full h-40 object-cover"
        src={course.image.url}
        alt={course.title}
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{course.title}</h3>
        <p className="text-gray-600 text-sm">{course.description}</p>
      </div>

      <button
        onClick={toastHandler}
        className="absolute top-0 right-0  bg-white rounded-full p-2"
      >
        {likeCard.includes(course.id) ? (
          <FcLike fontSize="1.5rem" />
        ) : (
          <FcLikePlaceholder fontSize="1.5rem" />
        )}
      </button>
    </div>
  );
};

export default Card;
