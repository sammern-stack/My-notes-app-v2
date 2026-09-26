import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useStartApp } from "@/shared/hooks";
import { useTheme, useFont } from "@/features/settings";
import { Dialog } from "@/shared/components";

const Home = lazy(() => import("@/pages/Home/Home"));
const Settings = lazy(() => import("@/pages/Settings/Settings"));
const Loading = lazy(() => import("@/pages/Loading/Loading"));

function App() {
  useStartApp();
  useTheme();
  useFont();

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Dialog />
    </Suspense>
  );
}

export default App;
