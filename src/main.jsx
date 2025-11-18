import { CreditProvider } from "@/app/contexts/CreditContext";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./app/AppRouter";
import { GlobalStyle } from "./styles/globalStyle";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CreditProvider>
      <GlobalStyle />
      <AppRouter />
    </CreditProvider>
  </StrictMode>
);
