import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./app/AppRouter";
import CreditProvider from "@/app/contexts/CreditProvider";
import { GlobalStyle } from "./styles/GlobalStyle";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CreditProvider>
      <GlobalStyle />
      <AppRouter />
    </CreditProvider>
  </StrictMode>
);
