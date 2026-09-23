import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import Signin from "./pages/Signin";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Food from "./pages/Food";
import Activity from "./pages/Activity";
import Profile from "./pages/Profile/Profile";
import SignLayout from "./layouts/SignLayout";
import Signup from "./pages/Signup";
import GetUserData from "./pages/GetDataUser/GetDataUser";
import GetUserDataLayout from "./layouts/GetUserDataLayout";

const router = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "/food",
        Component: Food,
      },
      {
        path: "/activity",
        Component: Activity,
      },
      {
        path: "/profile",
        Component: Profile,
      },
    ],
  },
  {
    Component: SignLayout,
    children: [
      {
        path: "/signin",
        Component: Signin,
      },
      {
        path: "/signup",
        Component: Signup,
      },
    ],
  },
  {
    Component: GetUserDataLayout,
    children: [
      {
        path: "/getdata",
        Component: GetUserData,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
