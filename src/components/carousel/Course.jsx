import { Carousel } from "antd";
import React from "react";
import { CardCourse } from "../cards/CardCourse";
import { ContentCard } from "../cards/data";

const contentStyle = {
  height: "100%",
  color: "#fff",
  lineHeight: "100%",
  textAlign: "center",
};


const Course = () => {
  console.log(ContentCard[2])
  return (
    <div className="container mx-auto">
      <Carousel autoplay>
        <div style={contentStyle}>
          <CardCourse />
        </div>
        <div>
          <div style={contentStyle}>
            <CardCourse />
        
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <CardCourse />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Course;
