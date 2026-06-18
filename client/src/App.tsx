// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLoader } from "@components/common";

// ——— Lazy Import Pages ———————————————————————————————————————————————————————————————————————————
const Home = lazy(() => import("@pages/Home/Home"));

// ——— App Component ———————————————————————————————————————————————————————————————————————————————
function App() {
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
