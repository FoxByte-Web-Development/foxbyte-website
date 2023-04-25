import { useState, createContext, useContext } from "react";
import { languageOptions, dictionaryList } from "../languages/language-frame";

export const LanguageContext = createContext({
  userLanguage: "es",
  dictionary: dictionaryList.es,
});

export const LanguageProvider = ({ children }) => {
  const defaultLanguage = window.localStorage.getItem("rcml-lang");
  const [userLanguage, setUserLanguage] = useState(defaultLanguage || "es");

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: selected => {
      const newLanguage = languageOptions[selected] ? selected : "es";
      setUserLanguage(newLanguage);
      window.localStorage.setItem("rcml-lang", newLanguage);
    },
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
};

export const Text = ({ textId }) => {
  const languageContext = useContext(LanguageContext);
  return languageContext.dictionary[textId] || textId;
};
