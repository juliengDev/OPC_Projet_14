const columns = [
  // { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 100,
    editable: false,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 100,
    editable: false,
  },
  {
    field: "birthDate",
    headerName: "Birth Date",
    type: "date",
    width: 100,
    editable: false,
    valueFormatter: (params) => {
      return params.value;
    },
  },
  {
    field: "startDate",
    headerName: "Start Date",
    sortable: false,
    type: "date",
    width: 100,
    valueFormatter: (params) => {
      return params.value;
    },
  },
  {
    field: "street",
    headerName: "Street",
    width: 150,
    editable: false,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
    editable: false,
  },
  {
    field: "department",
    headerName: "Department",
    width: 100,
    editable: false,
  },
];

export default columns;