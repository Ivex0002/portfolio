import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./footer/Footer";
import { Header } from "./Header";
import { Sidebar } from "./sidebar/Sidebar";
import { BackGround } from "./BackGround";
import { route } from "../routes/route";
import { LibMetaData } from "./LibMetaData";

export function MainLayout() {
  const location = useLocation();

  const currentRoute = route.find((el) => el.path === location.pathname);

  return (
    <>
      <BackGround />
      <div className="absolute inset-0 overflow-x-hidden overflow-y-auto scrollbar-transparent">
        <div className="flex flex-col w-screen pb-4 px-50 min-w-400">
          <Header />
          <LibMetaData currentRoute={currentRoute} />
          <Outlet />

          <Footer currentRoute={currentRoute} />
        </div>
      </div>

      <Sidebar />
    </>
  );
}
