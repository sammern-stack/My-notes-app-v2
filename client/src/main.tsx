import "@/shared/styles/global.scss";
import { StrictMode } from 'react'
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/shared/lib/queryClient.ts";

const root = document.getElementById("root")!;
createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
);
