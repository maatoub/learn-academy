import React from "react";
import { CardCourse } from "../cards/CardCourse";
import { ContentCard } from "../cards/data";
import { Carousel } from "antd";

const contentStyle = {
  height: "100%",
  color: "#fff",
  lineHeight: "100%",
  textAlign: "center",
};

const Course = () => {
  return (
    <div className="container mx-auto">
      <Carousel autoplay>
        <div style={contentStyle}>
          <div className="grid grid-cols-1 sm:grid-cols-2 pb-12 gap-10 justify-center items-center flex-wrap">
            <CardCourse card={ContentCard[0]} />
            <CardCourse card={ContentCard[1]} />
          </div>
        </div>
        <div style={contentStyle}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center items-center flex-wrap">
            <CardCourse card={ContentCard[2]} />
            <CardCourse card={ContentCard[3]} />
          </div>
        </div>
        <div style={contentStyle}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center items-center flex-wrap">
            <CardCourse card={ContentCard[4]} />
            <CardCourse card={ContentCard[5]} />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Course;
