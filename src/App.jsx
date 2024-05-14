import { useRoutes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import routes from "./routes.jsx";
import { Navbar } from "./components/navar/Navar.jsx";

export const App = () => {
  let element = useRoutes(routes);

  return (
    <>
      <Navbar/>
      {element}
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};
