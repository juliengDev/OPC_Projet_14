import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import EmployeeList from "./features/Employee/EmployeeList";
import NewEmployeeForm from "./features/Employee/NewEmployeeForm";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <NewEmployeeForm /> },
      { path: "/employee-list", element: <EmployeeList /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
