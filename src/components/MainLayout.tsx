import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
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
        <div className="flex flex-col w-screen">
          <div className="w-full h-screen pb-4 px-50">
            <div className="flex flex-col min-w-250">
              <Header />
              <LibMetaData currentRoute={currentRoute} />
              <div className="flex-1 overflow-hidden">
                <Outlet />
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>

      <Sidebar />
    </>
  );
}
