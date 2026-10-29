/* eslint-disable react/prop-types */
import { useState } from "react";

function PostCard(props) {
  const { title, body } = props;
  const [clicked, setClicked] = useState(false);

  return (
    <div
      onClick={() => setClicked(!clicked)}
      className={`p-6 rounded-lg shadow transition-colors duration-200 cursor-pointer ${
        clicked ? "bg-blue-100" : "bg-white"
      }`}
    >
      <h2 className="text-base font-bold text-gray-800 mb-2 leading-snug">
        {title}
      </h2>
      <p className="text-sm text-gray-600 leading-relaxed">
        {body}
      </p>
    </div>
  );
}

export default PostCard;
