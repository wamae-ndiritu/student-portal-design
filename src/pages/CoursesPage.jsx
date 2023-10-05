import React from "react";
import Hero from "../components/Hero";
import TopHeader from "../components/TopHeader";
import Stats from "../components/Stats";
import StudentsTable from "../components/tables/StudentsTable";

const CoursesPage = () => {
  const title = "Hello, Anne";
  const description =
    "Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Urna condimentum mattis pellentesque id nibh tortor id. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim.";
  const image = "/assets/images/image-5.png";
  return (
    <div>
      <TopHeader />
      <Hero title={title} description={description} image={image} />
      <Stats
        studentName={"Wamae Ndiritu"}
        studentNumber={"0820301058"}
        attendance={"90%"}
        coursesEnrolled={3}
      />
      <StudentsTable />
    </div>
  );
};

export default CoursesPage;
