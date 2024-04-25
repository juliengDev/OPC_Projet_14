import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();

  return (
    <div className="mt-20 flex flex-col items-center text-3xl">
      <h1>Something went wrong 😢</h1>
      <p className="my-12">{error.data || error.message}</p>
      <LinkButton to="-1">&larr; Go Back</LinkButton>
    </div>
  );
}

export default Error;
