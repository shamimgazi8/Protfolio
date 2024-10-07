import { useState } from "react";

const ReadMore = ({ text }: { text: string }) => {
  // State to track if the full text is shown or not
  const [isExpanded, setIsExpanded] = useState(false);

  // Define the number of characters to show in collapsed mode
  const limit = 200;

  // Toggle between full and truncated text
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="text-white">
      <p>
        {isExpanded ? text : `${text.substring(0, limit)}...`}
        <button
          onClick={toggleReadMore}
          className="ml-2 text-blue-600 hover:underline"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </p>
    </div>
  );
};
export default ReadMore;
