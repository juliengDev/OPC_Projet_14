import { Link } from "react-router-dom";

function NewEmployeeForm() {
  return (
    <main>
      <h1>HRnet</h1>
      <section>
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <input id="date-of-birth" type="text" />

          <label htmlFor="start-date">Start Date</label>
          <input id="start-date" type="text" />

          <fieldset>
            {/* margin-top: 10px */}
            <legend>Address</legend>
            <label htmlFor="street">Street</label>
            <input id="street" type="text" />
            <label htmlFor="city">City</label>
            <input id="city" type="text" />
            <label htmlFor="state">State</label>
            <select name="state" id="state"></select>
            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </fieldset>

          <label htmlFor="department">Department</label>
          <select name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </form>
      </section>
    </main>
  );
}

export default NewEmployeeForm;
