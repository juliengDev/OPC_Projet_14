// ContextAPI + reducer pattern
import { createContext, useContext, useReducer } from "react";

const EmployeeContext = createContext();

const initialState = {
  employeeList: [],
  isLoading: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "employee/created":
      return {
        ...state,
        isLoading: false,
        employeeList: [...state.employeeList, action.payload],
      };
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error("Unknown action type");
  }
}

function EmployeeProvider({ children }) {
  const [{ employeeList, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const createEmployee = (data) => {
    dispatch({ type: "employee/created", payload: data });
  };
  return (
    <EmployeeContext.Provider
      value={{
        employeeList,
        isLoading,
        error,
        createEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

//custom hook
function useEmployee() {
  const context = useContext(EmployeeContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the EmployeeProvider");
  return context;
}

export { EmployeeProvider, useEmployee };
