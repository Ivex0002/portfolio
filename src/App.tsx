import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import { route } from "./routes/route";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {Object.values(route).map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          {/* <Route path="/stack-modal" element={<StackModal />} />
          <Route path="/stripe-art" element={<StripeArt />} />
          <Route path="/vive-floating-box" element={<ViveFloatingBox />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
