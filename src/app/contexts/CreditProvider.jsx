import useCredit from "@/hooks/useCredit";
import { CreditContext } from "./useCreditContext";

const CreditProvider = ({ children }) => {
  const { credit, resetCredit, isEnoughCredit, addCredit, subtractCredit } = useCredit();

  const actions = { resetCredit, isEnoughCredit, addCredit, subtractCredit };

  return <CreditContext.Provider value={[credit, actions]}>{children}</CreditContext.Provider>;
};

export default CreditProvider;
