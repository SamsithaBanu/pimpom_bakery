import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TestimonialCarouselStyled } from "./TestimonialCarouselStyled";

// const testimonials = [
//   {
//     name: "John Doe",
//     comment: "This product is amazing!",
//     image: "/path/to/image1.jpg",
//   },
//   {
//     name: "Jane Smith",
//     comment: "Great service and support.",
//     image: "/path/to/image2.jpg",
//   },
//   {
//     name: "Michael Johnson",
//     comment: "Highly recommended!",
//     image: "/path/to/image3.jpg",
//   },
// ];

const testimonials = [
  {
    userName: "samsiss",
    rating: 5,
    content:
      "Absolutely delicious! The puff pastry was perfectly flaky and golden, with a melt-in-your-mouth texture. The filling was savory and packed with flavor. This is definitely a new favorite in our household",
    _id: "66d7d461150f39cf5919edfe",
    createdAt: "2024-09-04T03:30:41.401Z",
    updatedAt: "2024-09-04T03:30:41.401Z",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/002/002/257/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg",
  },
  {
    userName: "samsiss",
    rating: 5,
    content:
      "The layers of the puff pastry were beautifully crisp and buttery. Each bite was a delightful combination of textures and flavors. I couldn't stop at just one!",
    _id: "66d7d48a150f39cf5919ee78",
    createdAt: "2024-09-04T03:31:22.913Z",
    updatedAt: "2024-09-04T03:31:22.913Z",
    image:
      "https://api.duniagames.co.id/api/content/upload/file/8143860661599124172.jpg",
  },
  {
    userName: "samsiss",
    rating: 5,
    content:
      "A perfect balance of light and airy pastry with a rich and satisfying filling. This puff recipe is a showstopper, both in taste and presentation. Will be making it again soon!",
    _id: "66d7d50d150f39cf5919ef59",
    createdAt: "2024-09-04T03:33:33.314Z",
    updatedAt: "2024-09-04T03:33:33.314Z",
    image: "https://www.shareicon.net/data/2016/05/24/770137_man_512x512.png",
  },
  {
    userName: "samsiss",
    rating: 5,
    content:
      "The puff pastry was wonderfully light and tender, with just the right amount of crunch. The filling was seasoned to perfection, making every bite an absolute treat. Highly recommend!",
    _id: "66d7d549150f39cf5919ef67",
    createdAt: "2024-09-04T03:34:33.221Z",
    updatedAt: "2024-09-04T03:34:33.221Z",
    image:
      "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
  },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <TestimonialCarouselStyled>
      <div className="carousel-container">
        <div className="rotating-background"></div> {/* Rotating background */}
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-image"
                />
                <p className="testimonial-comment">"{testimonial.content}"</p>
                <h4 className="testimonial-name">- {testimonial.userName}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </TestimonialCarouselStyled>
  );
};

export default TestimonialCarousel;
