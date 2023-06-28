import React, { useState } from "react";

const QuestionList = ({ item }) => {
  const { id, title, body } = item;
  const [isActive, setIsActive] = useState(false);
  const toggleHandler = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className="accordion" key={item.id}>
        <div className="accordion-header">
          <div className="accordion-count">{id}</div>
          <h2>{title}</h2>
          <span className="accordion-btn" onClick={toggleHandler}>
            {isActive ? (
              <span className="accordion-minus">-</span>
            ) : (
              <span className="accordion-plus">+</span>
            )}
          </span>
        </div>
        <div className={isActive ? "accordion-body active" : "accordion-body"}>
          {body}
        </div>
      </div>
    </>
  );
};

export default QuestionList;
