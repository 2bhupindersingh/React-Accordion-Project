import React, { useEffect, useState } from "react";
import axios from "axios";
import QuestionList from "./QuestionList";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const Question = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="container">
      {data.map((item) => (
        <QuestionList item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Question;
