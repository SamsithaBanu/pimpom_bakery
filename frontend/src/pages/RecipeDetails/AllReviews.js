import React, { useEffect, useState } from "react";
import SummaryApi from "../../common";
import { ReviewStyled } from "./ReviewsStyled";
import { FaStar } from "react-icons/fa";
import moment from "moment";

const AllReviews = ({ recipeId, reviewAdded, onGetReview }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [avgReview, setAvgReview] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          SummaryApi?.allReviews?.url.replace(":recipeId", recipeId),
          {
            method: SummaryApi?.allReviews?.method,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setReviews(data.reviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [recipeId, reviewAdded]);

  console.log("rev", reviews);

  useEffect(() => {
    const totalRating = reviews.reduce(
      (sum, review) => sum + Number(review?.rating),
      0
    );
    console.log("revdf", totalRating);
    const averageRating = totalRating / reviews.length;
    setAvgReview(Math.round(averageRating));
    console.log("average", Math.round(averageRating));
    onGetReview(averageRating.toFixed(2));
  }, [reviews]);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p>There is some Error to load the Reviews: {error}</p>;

  return (
    <ReviewStyled>
      {reviews?.length > 0 && (
        <>
          <i className="header">Customer Reviews</i>
          <ul className="reviewWrapper">
            {reviews.map((review) => (
              <li key={review._id} className="reviewList">
                <div className="top">
                  <div className="left">
                    <div className="name">{review?.userName}</div>
                    <div className="date">
                      {moment(review?.createdAt).format("DD, MMM YYYY")}
                    </div>
                  </div>
                  <div className="right">
                    {[...Array(review?.rating)]?.map((value) => (
                      <span
                        key={value}
                        style={{
                          cursor: "pointer",
                          color: "gold",
                        }}
                      >
                        <FaStar size={17} />
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bottom">{review.content}</div>
              </li>
            ))}
          </ul>
        </>
      )}
    </ReviewStyled>
  );
};

export default AllReviews;
