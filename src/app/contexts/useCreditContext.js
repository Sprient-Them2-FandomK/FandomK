import { createContext, useContext } from "react";

export const CreditContext = createContext(null);

const useCreditContext = () => {
  const context = useContext(CreditContext);
  if (!context) {
    throw new Error("useCreditContext must be used within a CreditProvider");
  }
  return context;
};

export default useCreditContext;
