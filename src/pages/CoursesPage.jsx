import React from "react";
import Hero from "../components/Hero";
import TopHeader from "../components/TopHeader";
import Stats from "../components/Stats";
import ListTable from "../components/tables/ListTable";

const columns = [
  {
    field: "id",
    headerName: "Student No",
    width: 250,
  },
  { field: "student_name", headerName: "Student Name", width: 250 },
  {
    field: "grade",
    headerName: "Current Grade",
    width: 150,
  },
  {
    field: "attendance",
    headerName: "Average Attedance",
    width: 160,
  },
  {
    field: "action",
    headerName: "Action",
    width: 100,
    renderCell: () => {
      return (
        <button className='bg-red-500 rounded px-3 py-2 text-white cursor-pointer'>
          Delete
        </button>
      );
    },
  },
];

const rows = [
  {
    id: "08210304058",
    student_name: "Water John Snow",
    grade: "80%",
    attendance: "75%",
  },
  {
    id: "0821004058",
    student_name: "John Doe",
    grade: "50%",
    attendance: "65%",
  },
];

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
      <ListTable headers={columns} data={rows} title='List of Table' />
    </div>
  );
};

export default CoursesPage;
