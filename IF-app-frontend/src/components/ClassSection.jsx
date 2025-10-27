import React from "react";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import ClassCard from "./ClassCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getClasses } from "../utils/googleCalendarApi";
import "../blocks/class.css";

function ClassSection({ isLoggedIn, handleJoinClick }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getClasses()
      .then((data) => {
        const allClasses = data.items;
        const filteredClasses = allClasses.filter((event) => event.summary);
        const classData = filteredClasses.map((event) => {
          return {
            id: event.id,
            title: event.summary,
            description: event.description,
            meetLink: event.hangoutLink,
          };
        });
        setData(classData);
      })
      .catch(console.error);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 2000,
    pauseOnHover: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="class__section">
      <h2 className="class__carousel-header"> Fall 2025 Classes</h2>
      <div className="class__carousel-feature">
        <Slider {...settings}>
          {data.map((event) => (
            <ClassCard
              key={event.id}
              isLoggedIn={isLoggedIn}
              item={event}
              handleJoinClick={handleJoinClick}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default ClassSection;
