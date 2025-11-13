import Homepage from "@/pages/Homepage";
import Mypage from "@/pages/Mypage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import ListPage from "@/pages/ListPage";

const PATHS = {
  INDEX: "/",
  LIST: "/list",
  MYPAGE: "/mypage",
};

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: PATHS.LIST, element: <ListPage /> },
      { path: PATHS.MYPAGE, element: <Mypage /> },
      { path: "*", element: <div>404 에러 쵸비상</div> },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
