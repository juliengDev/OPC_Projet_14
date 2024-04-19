import { Link } from "react-router-dom";

function NewEmployeeForm() {
  return (
    <>
      <h1 className="mt-12 text-5xl font-bold">HRnet</h1>
      <section className="flex flex-col items-center">
        <Link to="/employee-list" className="my-6 block text-xl text-blue-500">
          View Current Employees
        </Link>
        <h2 className="mb-4 text-3xl font-bold">Create Employee</h2>
        <form action="#" id="create-employee">
          <div className="mb-4">
            <label htmlFor="first-name" className="mb-3 mt-4 block text-lg ">
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              className=" rounded-md border px-4  focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="last-name" className="mb-3 mt-4 block text-lg ">
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              className=" rounded-md border px-4  focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="date-of-birth" className="mb-3 mt-4 block text-lg ">
              Date of Birth
            </label>
            <input
              id="date-of-birth"
              type="text"
              className=" rounded-md border px-4  focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="start-date" className="mb-3 mt-4 block text-lg ">
              Start Date
            </label>
            <input
              id="start-date"
              type="text"
              className=" rounded-md border px-4  focus:border-blue-500 focus:outline-none"
            />
          </div>

          <fieldset className="mb-4 rounded-md border border-gray-300 p-4">
            <legend className="mb-2 text-lg ">Address</legend>
            <div className="mb-2">
              <label htmlFor="street" className="mb-3 mt-4 block text-lg ">
                Street
              </label>
              <input
                id="street"
                type="text"
                className="w-full rounded-md border px-3  focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="city" className="mb-3 mt-4 block text-lg ">
                City
              </label>
              <input
                id="city"
                type="text"
                className=" rounded-md border px-4  focus:border-blue-500 focus:outline-none"
              />
            </div>
          </fieldset>

          <div className="mb-4">
            <label htmlFor="department" className="mb-3 mt-4 block text-lg ">
              Department
            </label>
            <select
              name="department"
              id="department"
              className="w-full rounded-md border px-2  focus:border-blue-500 focus:outline-none"
            >
              <option>Sales</option>
              <option>Marketing</option>
              <option>Engineering</option>
              <option>Human Resources</option>
              <option>Legal</option>
            </select>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-6 rounded bg-blue-500 px-8 py-1  text-white  hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default NewEmployeeForm;
