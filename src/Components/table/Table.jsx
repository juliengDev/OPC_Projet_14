import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import columns from "../../mock/columns";

function Table({ employees }) {
  return (
    <DataGrid
      rows={employees}
      columns={columns}
      ColumnFilter
      ColumnSelector
      DensitySelector
      slots={{ toolbar: GridToolbar }}
      slotProps={{
        toolbar: {
          showQuickFilter: true,
        },
      }}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
      pageSizeOptions={[10, 25, 50, 100]}
      checkboxSelection
      disableRowSelectionOnClick
    />
  );
}

export default Table;
