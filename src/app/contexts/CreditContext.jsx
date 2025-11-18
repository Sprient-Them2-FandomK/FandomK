import { creditStorage } from "@/storage/credit.storage";
import { createContext, useContext, useEffect, useState } from "react";

const CreditContext = createContext(null);

export const CreditProvider = ({ children }) => {
  const [credit, setCredit] = useState(() => creditStorage.get());

  useEffect(() => {
    creditStorage.set(credit);
  }, [credit]);

  /** 크레딧 초기화 */
  const resetCredit = () => {
    setCredit(0);
  };

  /** 유효성 검사: 차감 가능한지 여부 */
  const isEnoughCredit = (num) => {
    return credit - num >= 0;
  };

  /** 크레딧 추가 */
  const addCredit = (num) => {
    setCredit((prev) => prev + num);
  };

  /** 크레딧 차감 */
  const subtractCredit = (num) => {
    if (!isEnoughCredit(num)) return;
    setCredit((prev) => prev - num);
  };

  const actions = { resetCredit, isEnoughCredit, addCredit, subtractCredit };

  return <CreditContext.Provider value={[credit, actions]}>{children}</CreditContext.Provider>;
};

const useCreditContext = () => {
  const context = useContext(CreditContext);
  if (!context) {
    throw new Error("useCreditContext must be used within a CreditProvider");
  }
  return context;
};

export default useCreditContext;
