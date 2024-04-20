import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import EmployeeList from "./features/Employee/EmployeeList";
import NewEmployeeForm from "./features/Employee/NewEmployeeForm";
import { EmployeeProvider } from "./contexts/EmployeeContext";

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
  return (
    <EmployeeProvider>
      <RouterProvider router={router} />
    </EmployeeProvider>
  );
}

export default App;
