import React from "react";
import { Link } from "react-router";

const NewsDetailCard = ({ news }) => {
  // console.log(news);

  return (
    <div className="space-y-5">
      <img
        className="w-full h-[350px] object-cover"
        src={news.image_url}
        alt=""
      />
      <h2 className="text-2xl font-bold">{news.title}</h2>
      <p>{news.details}</p>
      <Link to={`/category/${news.category_id}`} className="btn btn-secondary">
        Back to Category
      </Link>
    </div>
  );
};

export default NewsDetailCard;
