import { Link as RouterLink, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const navigate = useNavigate();

  const buttonClasses =
    "text-white font-bold bg-blue-500 hover:bg-blue-600 py-3 px-8 rounded-lg shadow-md transition duration-400 ease-in-out";

  const linkClasses =
    "text-white font-bold bg-blue-500  hover:bg-blue-600 py-3 px-8 rounded-lg transition duration-400 ease-in-out";

  const handleClick = () => {
    if (to === "-1") {
      navigate(-1);
    }
  };

  if (to === "-1") {
    return (
      <button className={buttonClasses} onClick={handleClick}>
        {children}
      </button>
    );
  }

  return (
    <RouterLink to={to} className={linkClasses}>
      {children}
    </RouterLink>
  );
}

export default LinkButton;
