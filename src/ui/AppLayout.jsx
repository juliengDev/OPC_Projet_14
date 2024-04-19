import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      {isLoading && <Loader />}
      <main className="flex flex-col items-center">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
