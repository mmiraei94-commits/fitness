import { Outlet } from "react-router";
import SidebarMenu from "../components/SidebarMenu";
import BottomMenu from "../components/BottomMenu";

const MainLayout = () => {
  return (
    <section className="">
      <SidebarMenu/>
      <BottomMenu/>
      <Outlet />
    </section>
  );
};

export default MainLayout;
