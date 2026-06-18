// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStartApp } from "@hooks";
import { AppLoader } from "@components/common";

// ——— Lazy Import Pages ———————————————————————————————————————————————————————————————————————————
const Home = lazy(() => import("@pages/Home/Home"));

// ——— App Component ———————————————————————————————————————————————————————————————————————————————
function App() {
  useStartApp();

  return (
    <BrowserRouter>
      <Suspense fallback={<AppLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
