  import React, { useState } from "react";
import data from "../../data.json";
import Item from "../Item/Item.js";
import "./ItemList.css";

const ItemList = () => {
  const [courses] = useState(data);
  return (
    <div className="courses">
      {courses.map(course => (
        <Item key={course.id} course={course} />
      ))}
    </div>
  );
};

export default ItemList;
