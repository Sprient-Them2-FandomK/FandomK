import { Toast } from "@/components/common/Toast";
import Header from "@/components/layout/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Toast />
      <Outlet />
    </>
  );
};

export default RootLayout;
