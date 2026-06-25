// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStartApp } from "@hooks";
import { AppLoader } from "@components/common";

// ——— Lazy Import Pages ———————————————————————————————————————————————————————————————————————————
const Home = lazy(() => import("@pages/Home/Home"));
const Settings = lazy(() => import("@pages/Settings/Settings"));

// ——— App Component ———————————————————————————————————————————————————————————————————————————————
function App() {
  useStartApp();

  return (
    <BrowserRouter>
      <Suspense fallback={<AppLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
