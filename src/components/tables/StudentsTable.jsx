import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
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

const StudentsTable = () => {
  return (
    <div className='w-full flex justify-center items-center my-4'>
      <div className='w-3/4'>
        <h5 className='py-3 text-2xl font-semibold text-light-green'>
          List of Students
        </h5>
        <DataGrid
          rows={rows}
          columns={columns}
          showColumnVerticalBorder={true}
          showCellVerticalBorder={true}
        />
      </div>
    </div>
  );
};

export default StudentsTable;
