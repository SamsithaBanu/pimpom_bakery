import "@fortawesome/fontawesome-free/css/all.min.css";

export const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating); // Get full stars
  const hasHalfStar = rating % 1 !== 0; // Check if there's a half star
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Calculate remaining empty stars

  const renderStars = () => {
    let stars = [];

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <i key={i} className="fa fa-star" style={{ color: "gold" }}></i>
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <i
          key="half"
          className="fa fa-star-half-alt"
          style={{ color: "gold" }}
        ></i>
      );
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <i
          key={i + fullStars + 1}
          className="fa fa-star"
          style={{ color: "#ccc" }}
        ></i>
      );
    }

    return stars;
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "2px" }}>
      {renderStars()}
    </div>
  );
};
