import { useContext } from "react";
import { AllContext } from "../context/ContextProvider";

const useAuth = () => useContext(AllContext);

export default useAuth;
