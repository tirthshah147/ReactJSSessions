import React from "react";
import "./Item.css";
const Item = ({ course }) => {
  return (
    <div className="course">
      <div className="course__img--container">
        <img
          src={course.courseImage}
          alt={course.title}
          className="course__img"
        />
      </div>
      <h4 className="course__title">{course.title}</h4>
      <span className="course__author">By: {course.author}</span>
      <span className="course__price">{course.price}$</span>
      <span className={course.isHot ? "course__status hot" : "course__status"}>
        {course.isHot ? "Hot" : null}
      </span>
    </div>
  );
};

export default Item;
