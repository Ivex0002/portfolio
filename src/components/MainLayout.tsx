import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Sidebar } from "./sidebar/Sidebar";
import { BackGround } from "./BackGround";

export function MainLayout() {
  return (
    <>
      <BackGround />
      <div className="absolute inset-0 flex flex-col items-center">
        <Header />
        <div className="px-50 w-screen">
          <Outlet />
        </div>
        <Footer />
      </div>
      <Sidebar />
    </>
  );
}
