import React, { useState, useEffect } from "react";
import SummaryApi from "../../common";
import { ReviewStyled } from "./ReviewsStyled";
import { toast } from "react-toastify";
import { FaStar } from "react-icons/fa6";

const StarRating = ({ rating, onRatingChange }) => {
  const [hoverValue, setHoverValue] = useState(0);

  const handleClick = (value) => {
    onRatingChange(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(0);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          style={{
            cursor: "pointer",
            color: value <= (hoverValue || rating) ? "gold" : "gray",
            height: "35px",
            width: "35px",
          }}
          onClick={() => handleClick(value)}
          onMouseOver={() => handleMouseOver(value)}
          onMouseLeave={handleMouseLeave}
        >
          <FaStar size={30} />
        </span>
      ))}
    </div>
  );
};

const Reviews = ({ recipeId, onChangeRecipe }) => {
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState("");
  const [user, setUser] = useState("");

  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     try {
  //       const response = await fetch(SummaryApi?.checkLoginStatus?.url, {
  //         method: "GET",
  //         credentials: "include", // Include cookies in the request
  //       });

  //       if (response.ok) {
  //         toast.success("added review successfully!!!");
  //       } else {
  //         toast.error("please login to add review!!");
  //       }
  //     } catch (error) {
  //       toast.error("please login to add review!!");
  //     }
  //   };

  //   checkLoginStatus();
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        SummaryApi?.uploadReviews?.url.replace(":recipeId", recipeId),
        {
          method: SummaryApi?.uploadReviews?.method,
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // Include cookies in the request
          body: JSON.stringify({ rating, content }),
        }
      );

      const text = await response.text(); // Get the raw response

      const newReview = JSON.parse(text); // Parse the JSON response
      console.log("newrevi", newReview);
      if (!newReview?.error) {
        onChangeRecipe(true);
        toast.success('successfully added the comment!');
      }
      if (newReview?.error) {
        toast.error(newReview?.message);
      }
      setRating(5);
      setContent("");
      setUser("");
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  return (
    <ReviewStyled>
      <i>
        <div className="header">Submit Your Review</div>
      </i>
      <form onSubmit={handleSubmit} className="form">
        <div className="row">
          <label className="label">Add your Rating</label>
          <StarRating rating={rating} onRatingChange={setRating} />
        </div>
        <div className="row">
          <label className="label">Enter your Comments</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Add a review"
            required
            size={5}
            className="textarea"
          />
        </div>
        <button type="submit" className="submitCTA">
          Submit Review
        </button>
      </form>
    </ReviewStyled>
  );
};

export default Reviews;
