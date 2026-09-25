import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useStartApp } from "@/shared/hooks";
import { AppLoader } from "@/shared/components";

const Home = lazy(() => import("@/pages/Home/Home"));
const Settings = lazy(() => import("@/pages/Settings/Settings"));

function App() {
  useStartApp();

  return (
    <Suspense fallback={<AppLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Suspense>
  );
}

export default App;
