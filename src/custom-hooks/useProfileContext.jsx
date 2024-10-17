import React, { createContext, useState } from "react";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [selectedValue, setSelectedValue] = useState("daily");

  return (
    <ProfileContext.Provider value={{ selectedValue, setSelectedValue }}>
      {children}
    </ProfileContext.Provider>
  );
};