import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import { route } from "./routes/route";
import { Init } from "./init/init";

export function App() {
  return (
    <>
      <Init />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            {route.map(({ path, component: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
