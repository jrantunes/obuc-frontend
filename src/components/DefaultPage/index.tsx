import Header from "components/Header";
import { Outlet } from "react-router-dom";

const DefaultPage = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default DefaultPage;
