import Homepage from "@/pages/HomePage";
import ListPage from "@/pages/ListPage";
import Mypage from "@/pages/MyPage";
import NotFoundPage from "@/pages/NotFoundPage";
import RouteErrorPage from "@/pages/RouteErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";

const PATHS = {
  INDEX: "/",
  LIST: "/list",
  MYPAGE: "/mypage",
};

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <RouteErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      { path: PATHS.LIST, element: <ListPage /> },
      { path: PATHS.MYPAGE, element: <Mypage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
