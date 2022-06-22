import { createContext, useState } from "react";

import questions from "../assets/jsons/questions.json";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [username, setUsername] = useState("Player 1");
  const [answers, setAnswers] = useState([]);

  const value = {
    questions,
    username,
    answers,
    setUsername,
    setAnswers,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
