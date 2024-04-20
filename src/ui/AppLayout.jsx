import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      {isLoading && <Loader />}
      <main className="font-main flex flex-col items-center text-xl">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
